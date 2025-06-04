<script setup lang="ts">
const canvas = ref<any>(null)
let ctx: CanvasRenderingContext2D
const isPressed = ref<boolean>(false)
const x = ref<number>(0)
const y = ref<number>(0)
const size = ref<number>(10)
const color = ref<string>('#000000')

onMounted(() => {
  ctx = canvas.value.getContext('2d')
})

function handleMouseDown(e: Event) {
  isPressed.value = true
  x.value = (e as any).offsetX
  y.value = (e as any).offsetY
}

function handleMouseUp() {
  isPressed.value = false
  x.value = 0
  y.value = 0
}

function handleMouseMove(e: Event) {
  if (isPressed.value) {
    const x2 = (e as any).offsetX
    const y2 = (e as any).offsetY

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
    if (size.value > 5)
      size.value -= 5
  }
  else if (type === '+') {
    if (size.value < 50)
      size.value += 5
  }
}

function clear() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
}
</script>

<template>
  <div class="body">
    <canvas
      ref="canvas"
      width="800"
      height="650"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mousemove="handleMouseMove"
    />
    <div class="toolbox">
      <button id="decrease" @click="handleClick('-')">
        -
      </button>
      <span id="size">{{ size }}</span>
      <button id="increase" @click="handleClick('+')">
        +
      </button>
      <input id="color" v-model.lazy="color" type="color">
      <button id="clear" @click="clear">
        X
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
