<template>
  <div class="body">
    <canvas ref="canvas" width="800" height="650" @mousedown="handleMouseDown" @mouseup="handleMouseUp"
      @mousemove="handleMouseMove"></canvas>
    <div class="toolbox">
      <button id="decrease" @click="handleClick('-')">-</button>
      <span id="size">{{ size }}</span>
      <button id="increase" @click="handleClick('+')">+</button>
      <input type="color" id="color" v-model.lazy="color">
      <button id="clear" @click="clear">X</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const canvas = ref(null)
let ctx = undefined
const isPressed = ref(false)
const x = ref(0)
const y = ref(0)
const size = ref(10)
const color = ref("#000000")

onMounted(() => {
  ctx = canvas.value.getContext("2d")
})

function handleMouseDown(e) {
  isPressed.value = true
  x.value = e.offsetX
  y.value = e.offsetY
}

function handleMouseUp() {
  isPressed.value = false
  x.value = undefined
  y.value = undefined
}

function handleMouseMove(e) {
  if (isPressed.value) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x.value, y.value, x2, y2)

    x.value = x2
    y.value = y2
  }
}

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size.value, 0, Math.PI * 2)
  ctx.fillStyle = color.value
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color.value
  ctx.lineWidth = size.value * 2
  ctx.stroke()
}

function handleClick(type) {
  if (type == '-') {
    if (size.value > 5) {
      size.value -= 5
    }
  } else if (type == '+') {
    if (size.value < 50) {
      size.value += 5
    }
  }
}

function clear() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
}
</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
