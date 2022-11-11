<template>
  <div class="body">
    <div :class="['counter', infinity ? '' : 'hide']">
      <div class="nums">
        <span class="in_out" :style="{ '--infinite': infinity }">{{
          count
        }}</span>
      </div>
      <h4>Get Ready</h4>
    </div>

    <div :class="['final', infinity ? '' : 'show']">
      <h1>GO</h1>
      <button class="replay" @click="replay">
        <span>Replay</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
const count = ref(3)
let timer
const infinity = ref("infinite")
onMounted(() => {
  runAnimation()
})

function replay() {
  count.value = 3
  infinity.value = "infinite"
  runAnimation()
}

function runAnimation() {
  timer = setInterval(() => {
    if (count.value < 2) {
      infinity.value = ""
      clearInterval(timer)
    } else {
      count.value--
    }
  }, 1000)
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
