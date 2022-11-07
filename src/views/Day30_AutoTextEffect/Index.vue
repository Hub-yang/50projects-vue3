<template>
  <div class="body">
    <h1>{{ curText }}</h1>

    <div class="main_container">
      <span>Speed:</span>
      <button class="add" @click="speed++">+</button>
      <input type="text" id="speed" v-model="initSpeed" />
      <button class="minus" @click="speed--">-</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue"

const speed = ref(1)
const text = "We Love Programming!"
const idx = ref(1)
const curText = ref("")

const initSpeed = computed(() => {
  if (speed.value >= 10) speed.value = 10
  if (speed.value <= 1) speed.value = 1
  return speed.value
})

onMounted(() => {
  writeText()
})

const writeText = () => {
  curText.value = text.slice(0, idx.value)

  idx.value++

  if (idx.value > text.length) {
    idx.value = 1
  }

  setTimeout(() => {
    writeText()
  }, 300 / initSpeed.value)
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
