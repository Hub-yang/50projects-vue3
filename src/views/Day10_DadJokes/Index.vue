<template>
  <div class="body">
    <div class="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" class="joke">{{joke || 'Loading...'}}</div>
      <button id="jokeBtn" class="btn" @click="generateJoke">Get Another Joke</button>
    </div>
  </div>
</template>

<script setup>
import { getJokes } from "../../api/http"
import { ref, reactive, onMounted } from "vue"

const joke = ref("")

onMounted(() => {
  generateJoke()
})

async function generateJoke() {
  joke.value = ""
  const res = await getJokes()
  joke.value = res.joke
}

</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
