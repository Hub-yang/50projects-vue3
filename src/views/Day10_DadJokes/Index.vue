<script setup lang="ts">
import { getJokes } from '../../api/http'

const joke = ref<string>('')

onMounted(() => {
  generateJoke()
})

async function generateJoke() {
  joke.value = ''
  const res = (await getJokes()) as any
  joke.value = res.joke
}
</script>

<template>
  <div class="body">
    <div class="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" class="joke">
        {{ joke || "Loading..." }}
      </div>
      <button id="jokeBtn" class="btn" @click="generateJoke">
        Get Another Joke
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
