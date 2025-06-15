<script setup lang="ts">
import { getUserInfo, getUserRepos } from '~/api/http'

interface AnyKey { [prop: string]: string }

const user = ref<AnyKey>({})
const errMsg = ref('')
const repoList = ref<AnyKey[]>([])
const username = ref('')
const loading = ref(false)

async function getUser(username: string): Promise<void> {
  loading.value = true
  try {
    user.value = (await getUserInfo(username)) as any
    // 获取项目信息
    getRepos(username)
  }
  catch (error: any) {
    if (+error?.response?.status === 404)
      errMsg.value = 'No profile with this username'
  }
  finally {
    loading.value = false
  }
}

async function getRepos(username: string) {
  try {
    const repos = (await getUserRepos(username)) as any
    repoList.value = repos.slice(0, 5)
  }
  catch (error) {
    console.error(`${error}`)
    errMsg.value = 'Problem fetching repos'
  }
}

function handleSubmit() {
  if (username.value)
    getUser(username.value)
}
</script>

<template>
  <div class="body base_container">
    <form class="user-form" @submit.prevent="handleSubmit">
      <input
        v-model.trim.lazy="username"
        type="text"
        placeholder="Search a Github User"
      >
    </form>

    <main>
      <div
        v-if="!Object.getOwnPropertyNames(user).length && !errMsg && loading"
      >
        Loading...
      </div>

      <div
        v-else-if="Object.getOwnPropertyNames(user).length && !errMsg"
        class="card"
      >
        <div>
          <img :src="user.avatar_url" :alt="user.name" class="avatar">
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
            >{{ repo.name }}</a>
          </div>
        </div>
      </div>

      <div v-else-if="errMsg" class="card">
        <h1>{{ errMsg }}</h1>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
