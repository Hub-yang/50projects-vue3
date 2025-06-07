<script setup lang="ts">
import { getJokes } from '~/api/http'

const joke = ref('')

onMounted(() => generateJoke())

async function generateJoke() {
  joke.value = ''
  const { joke: data = '' } = await getJokes()
  joke.value = data
}
</script>

<template>
  <div class="body base_container">
    <div class="container">
      <h3>Don't Laugh Challenge</h3>
      <div class="joke">
        {{ joke || "Loading..." }}
      </div>
      <button class="btn" @click="generateJoke">
        Get Another Joke
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
