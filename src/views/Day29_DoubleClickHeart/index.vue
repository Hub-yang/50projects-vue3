<script setup lang="ts">
import type { VNodeRef } from 'vue'

const clicks = ref(0)
const loveMe = ref<VNodeRef | null>(null)
let timer: number

function clickToHeart(e: MouseEvent) {
  createHeart(e)
}

function createHeart(e: MouseEvent) {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')
  const colorList = ['red', 'green', 'blue', 'orange', 'purple']
  const { clientX: x, clientY: y } = e
  const { offsetLeft: leftOffset, offsetTop: topOffset } = e.target as any
  heart.style.top = `${y - topOffset}px`
  heart.style.left = `${x - leftOffset}px`
  heart.style.color
    = colorList[Math.floor(Math.random() * (colorList.length - 1))]

  loveMe.value.appendChild(heart)
  clicks.value++
  timer = setTimeout(() => {
    clearTimeout(timer)
    heart.remove()
  }, 1000)
}
</script>

<template>
  <div class="body base_container">
    <h3>Double click on the image to <i class="fas fa-heart" /> it</h3>
    <small>You liked it <span id="times">{{ clicks }}</span> times</small>

    <div ref="loveMe" class="loveMe" @dblclick="clickToHeart" />
  </div>
</template>

<style lang="scss">
@use './index.scss';
</style>
