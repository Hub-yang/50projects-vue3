<script setup lang="ts">
import type { VNodeRef } from 'vue'

const inputRef = ref<VNodeRef | null>(null)
const labelRef = ref<VNodeRef | null>(null)
const range = ref(50)
const left = ref()

function handlerInput() {
  const range_width = getComputedStyle(inputRef.value).getPropertyValue('width')
  const label_width = getComputedStyle(labelRef.value).getPropertyValue('width')
  const num_width = +range_width.substring(0, range_width.length - 2)
  const num_label_width = +label_width.substring(0, label_width.length - 2)

  const max = +inputRef.value.max
  const min = +inputRef.value.min

  left.value = range.value * (num_width / max) - num_label_width / 2 + scale(range.value, min, max, 10, -10)
}

function scale(num: number, in_min: number, in_max: number, out_min: number, out_max: number) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
</script>

<template>
  <div class="body base_container">
    <h2>Custom Range Slider</h2>
    <div class="range-container">
      <input id="range" ref="inputRef" v-model="range" type="range" min="0" max="100" @input="handlerInput">
      <label ref="labelRef" for="range" :style="{ left: `${left}px` }">{{ range }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
