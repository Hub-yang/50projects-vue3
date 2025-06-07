<script setup lang="ts">
const imgList = reactive<{ active: boolean, url: string }[]>([
  { active: true, url: 'src/assets/imgs/001.jpg' },
  { active: false, url: 'src/assets/imgs/002.jpg' },
  { active: false, url: 'src/assets/imgs/003.png' },
  { active: false, url: 'src/assets/imgs/004.jpg' },
])

const activeSlide = ref(0)
const bgImgUrl = ref('')

publicFn()

function leftClick() {
  activeSlide.value--

  if (activeSlide.value < 0)
    activeSlide.value = imgList.length - 1

  publicFn()
}

function rightClick() {
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
  <div class="body base_container" :style="{ backgroundImage: `url(${bgImgUrl})` }">
    <div class="slider-container">
      <div
        v-for="({ active, url }) in imgList"
        :key="url"
        class="slide base-main-h" :class="[active ? 'active' : '']"
        :style="{ backgroundImage: `url(${url})` }"
      />

      <button class="arrow left-arrow" @click="leftClick">
        <i class="fas fa-arrow-left" />
      </button>

      <button class="arrow right-arrow" @click="rightClick">
        <i class="fas fa-arrow-right" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
