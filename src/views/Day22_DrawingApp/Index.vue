<script setup lang="ts">
import type { VNodeRef } from 'vue'

const canvas = ref<VNodeRef | null>(null)
let ctx: CanvasRenderingContext2D
const isPressed = ref(false)
const x = ref(0)
const y = ref(0)
const size = ref(10)
const color = ref('#000000')

onMounted(() => ctx = canvas.value.getContext('2d'))

function handleMouseDown(e: MouseEvent) {
  isPressed.value = true
  x.value = e.offsetX
  y.value = e.offsetY
}

function handleMouseUp() {
  isPressed.value = false
  x.value = 0
  y.value = 0
}

function handleMouseMove(e: MouseEvent) {
  if (isPressed.value) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x.value, y.value, x2, y2)

    x.value = x2
    y.value = y2
  }
}

function drawCircle(x: number, y: number) {
  ctx.beginPath()
  ctx.arc(x, y, size.value, 0, Math.PI * 2)
  ctx.fillStyle = color.value
  ctx.fill()
}

function drawLine(x1: number, y1: number, x2: number, y2: number) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color.value
  ctx.lineWidth = size.value * 2
  ctx.stroke()
}

function handleClick(type: string) {
  if (type === '-') {
    size.value > 5 && (size.value -= 5)
  }
  else if (type === '+') {
    size.value < 50 && (size.value += 5)
  }
}

function clear() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
}
</script>

<template>
  <div class="body base_container">
    <canvas
      ref="canvas"
      width="800"
      height="650"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mousemove="handleMouseMove"
    />
    <div class="toolbox">
      <button @click="handleClick('-')">
        -
      </button>
      <span>{{ size }}</span>
      <button @click="handleClick('+')">
        +
      </button>
      <input v-model.lazy="color" type="color">
      <button @click="clear">
        X
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
