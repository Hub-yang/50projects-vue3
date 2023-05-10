<template>
  <div class="body">
    <h3>Double click on the image to <i class="fas fa-heart"></i> it</h3>
    <small
      >You liked it <span id="times">{{ clicks }}</span> times</small
    >

    <div class="loveMe" @click="clickToHeart">
      <!-- <i v-if="showHeart" ref="heart" class="fas fa-heart"></i> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const clicks = ref<number>(0)
const showHeart = ref<boolean>(false)
const heart = ref<HTMLElement>()
let clickTime: number = 0

const clickToHeart = (e: Event) => {
  console.log("click")
  // if (clickTime === 0) {
  //   clickTime = new Date().getTime()
  // } else {
  //   if (new Date().getTime() - clickTime < 800) {
  //     createHeart(e)
  //     clickTime = 0
  //   } else {
  //     clickTime = new Date().getTime()
  //   }
  // }
  createHeart(e)
}

const createHeart = (e: Event) => {
  // showHeart.value = true
  // const colorList = ["red", "green", "blue", "orange", "purple"]
  // const x = e.clientX
  // const y = e.clientY
  // const leftOffset = e.target.offsetLeft
  // const topOffset = e.target.offsetTop
  // const xInside = x - leftOffset
  // const yInside = y - topOffset
  // nextTick(() => {
  //   heart.value.style.top = `${yInside}px`
  //   heart.value.style.left = `${xInside}px`
  //   heart.value.style.color =
  //     colorList[Math.floor(Math.random() * (colorList.length - 1))]
  // })
  // clicks.value++
  // setTimeout(() => (showHeart.value = false), 1000)

  const loveMe = document.querySelector(".loveMe")
  const heart = document.createElement("i")
  heart.classList.add("fas")
  heart.classList.add("fa-heart")

  const colorList = ["red", "green", "blue", "orange", "purple"]
  const x = (e as any).clientX
  const y = (e as any).clientY

  const leftOffset = (e.target as any).offsetLeft
  const topOffset = (e.target as any).offsetTop

  const xInside = x - leftOffset
  const yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`
  heart.style.color =
    colorList[Math.floor(Math.random() * (colorList.length - 1))]

  loveMe!.appendChild(heart)

  clicks.value++

  setTimeout(() => heart.remove(), 1000)
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
