<template>
  <div class="body">
    <h2>Custom Range Slider</h2>
    <div class="range-container">
      <input ref="inputRef" type="range" id="range" min="0" max="100" v-model="range" @input="handlerInput">
      <label ref="labelRef" for="range" :style="{ left: left + 'px' }">{{ range }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const inputRef = ref()
const labelRef = ref()
const range = ref(50)
const left = ref()

const handlerInput = () => {
  const range_width = getComputedStyle(inputRef.value).getPropertyValue('width')
  const label_width = getComputedStyle(labelRef.value).getPropertyValue('width')
  const num_width = +range_width.substring(0, range_width.length - 2)
  const num_label_width = +label_width.substring(0, label_width.length - 2)

  const max = +inputRef.value.max
  const min = +inputRef.value.min

  left.value = range.value * (num_width / max) - num_label_width / 2 + scale(range.value, min, max, 10, -10)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
</script>

<style scoped lang="scss">
@import "./index.scss"
</style>