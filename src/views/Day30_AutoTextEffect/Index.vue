<script setup lang="ts">
const speed = ref<number>(1)
const text: string = 'We Love Programming!'
const idx = ref<number>(1)
const curText = ref<string>('')

const initSpeed = computed<number>(() => {
  if (speed.value >= 10)
    speed.value = 10
  if (speed.value <= 1)
    speed.value = 1
  return speed.value
})

onMounted(() => {
  writeText()
})

function writeText() {
  curText.value = text.slice(0, idx.value)

  idx.value++

  if (idx.value > text.length)
    idx.value = 1

  setTimeout(() => {
    writeText()
  }, 300 / initSpeed.value)
}
</script>

<template>
  <div class="body">
    <h1>{{ curText }}</h1>

    <div class="main_container">
      <span>Speed:</span>
      <button class="add" @click="speed++">
        +
      </button>
      <input id="speed" v-model="initSpeed" type="text">
      <button class="minus" @click="speed--">
        -
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
