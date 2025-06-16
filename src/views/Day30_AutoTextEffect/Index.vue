<script setup lang="ts">
const speed = ref(1)
const text = 'We Love Programming!'
const idx = ref(1)
const curText = ref('')
let timer: number

watch(speed, (currentSpeed) => {
  if (currentSpeed >= 10)
    speed.value = 10
  if (currentSpeed <= 1)
    speed.value = 1
})

onMounted(() => writeText())

function writeText() {
  curText.value = text.slice(0, idx.value)
  idx.value++
  if (idx.value > text.length)
    idx.value = 1
  timer = setTimeout(() => {
    writeText()
  }, 300 / speed.value)
}

onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <div class="body base_container">
    <h1>{{ curText }}</h1>
    <div class="main_container">
      <span>Speed: </span>
      <button @click="speed--">
        <span class="button_top"> - </span>
      </button>
      <input id="speed" v-model="speed" type="text">
      <button @click="speed++">
        <span class="button_top"> + </span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
