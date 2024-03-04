<script setup lang="ts">
const imgList = reactive<{ active: boolean, url: string }[]>([
  { active: true, url: 'src/assets/imgs/001.jpg' },
  { active: false, url: 'src/assets/imgs/002.jpg' },
  { active: false, url: 'src/assets/imgs/003.png' },
  { active: false, url: 'src/assets/imgs/004.jpg' },
])

const activeSlide = ref<number>(0)
const bgImgUrl = ref<string>('')

publicFn()

function leftClick(): void {
  activeSlide.value--

  if (activeSlide.value < 0)
    activeSlide.value = imgList.length - 1

  publicFn()
}

function rightClick(): void {
  activeSlide.value++

  if (activeSlide.value > imgList.length - 1)
    activeSlide.value = 0

  publicFn()
}

function publicFn() {
  bgImgUrl.value = imgList[activeSlide.value].url
  imgList.forEach(slide => (slide.active = false))
  imgList[activeSlide.value].active = true
}
</script>

<template>
  <div class="body" :style="{ backgroundImage: `url(${bgImgUrl})` }">
    <div class="slider-container">
      <div
        v-for="(img, index) in imgList"
        :key="index"
        class="slide" :class="[img.active ? 'active' : '']"
        :style="{ backgroundImage: `url(${img.url})` }"
      />

      <button id="left" class="arrow left-arrow" @click="leftClick">
        <i class="fas fa-arrow-left" />
      </button>

      <button id="right" class="arrow right-arrow" @click="rightClick">
        <i class="fas fa-arrow-right" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
