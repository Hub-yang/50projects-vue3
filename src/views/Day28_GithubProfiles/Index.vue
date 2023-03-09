<template>
  <div class="body">
    <form class="user-form" id="form" @submit.prevent="handleSubmit">
      <input
        type="text"
        placeholder="Search a Github User"
        v-model.trim.lazy="username"
      />
    </form>

    <main id="main">
      <div
        v-if="!Object.getOwnPropertyNames(user).length && !errMsg && loading"
      >
        Loading...
      </div>

      <div
        class="card"
        v-else-if="Object.getOwnPropertyNames(user).length && !errMsg"
      >
        <div>
          <img :src="user.avatar_url" :alt="user.name" class="avatar" />
        </div>
        <div class="user-info">
          <h2>{{ user.name || user.login }}</h2>
          <p>{{ user.bio || "" }}</p>
          <ul>
            <li>{{ user.followers }} <strong>Followers</strong></li>
            <li>{{ user.following }} <strong>Following</strong></li>
            <li>{{ user.public_repos }} <strong>Repos</strong></li>
          </ul>

          <div id="repos">
            <a
              v-for="repo in repoList"
              :key="repo.id"
              :href="repo.html_url"
              class="repo"
              target="_blank"
              >{{ repo.name }}</a
            >
          </div>
        </div>
      </div>

      <div v-else-if="errMsg" class="card">
        <h1>{{ errMsg }}</h1>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { getUserInfo, getUserRepos } from "../../api/http"

const user = ref<{ [prop: string]: string }>({})
const errMsg = ref("")
const repoList = ref<{ [prop: string]: string }[]>([])
const username = ref("")
const loading = ref(false)

async function getUser(username: string): Promise<void> {
  try {
    user.value = await getUserInfo(username)
    loading.value = false
    // 获取项目信息
    getRepos(username)
  } catch (error: any) {
    loading.value = false
    if (error.response.status == 404) {
      errMsg.value = "No profile with this username"
    }
  }
}

async function getRepos(username) {
  try {
    const repos = await getUserRepos(username)
    repoList.value = repos.slice(0, 5)
    loading.value = false
  } catch (error) {
    loading.value = false
    errMsg.value = "Problem fetching repos"
  }
}

function handleSubmit() {
  loading.value = true
  if (username.value) {
    getUser(username.value)
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
