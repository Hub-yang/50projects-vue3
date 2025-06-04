<script setup lang="ts">
const clicks = ref<number>(0)

function clickToHeart(e: Event) {
  createHeart(e)
}

function createHeart(e: Event) {
  const loveMe = document.querySelector('.loveMe')
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const colorList = ['red', 'green', 'blue', 'orange', 'purple']
  const x = (e as any).clientX
  const y = (e as any).clientY

  const leftOffset = (e.target as any).offsetLeft
  const topOffset = (e.target as any).offsetTop

  const xInside = x - leftOffset
  const yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`
  heart.style.color
    = colorList[Math.floor(Math.random() * (colorList.length - 1))]

  loveMe!.appendChild(heart)

  clicks.value++

  setTimeout(() => heart.remove(), 1000)
}
</script>

<template>
  <div class="body">
    <h3>Double click on the image to <i class="fas fa-heart" /> it</h3>
    <small>You liked it <span id="times">{{ clicks }}</span> times</small>

    <div class="loveMe" @click="clickToHeart">
      <!-- <i v-if="showHeart" ref="heart" class="fas fa-heart"></i> -->
    </div>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>
