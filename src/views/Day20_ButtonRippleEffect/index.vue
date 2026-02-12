<script setup lang="ts">
import type { VNodeRef } from 'vue'

interface BtnItem {
  show: boolean
  color: string
}
const spanEl = ref<VNodeRef | null>(null)
const btnList = reactive<BtnItem[]>([
  { show: false, color: 'purple' },
  { show: false, color: 'skyblue' },
  { show: false, color: 'orange' },
])

function handleClick(idx: number, e: MouseEvent) {
  btnList[idx].show = true
  const x = e.clientX
  const y = e.clientY

  const buttonTop = (e.target as any).offsetTop
  const buttonLeft = (e.target as any).offsetLeft

  const xInside = x - buttonLeft
  const yInside = y - buttonTop

  spanEl.value[idx].style.top = `${yInside}px`
  spanEl.value[idx].style.left = `${xInside}px`

  setTimeout(() => (btnList[idx].show = false), 500)
}
</script>

<template>
  <div class="body base_container">
    <button
      v-for="({ show, color }, idx) in btnList"
      :key="color"
      class="ripple"
      :style="{ '--color': color }"
      @click="handleClick(idx, $event)"
    >
      Click Me<span v-show="show" ref="spanEl" class="circle" />
    </button>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
