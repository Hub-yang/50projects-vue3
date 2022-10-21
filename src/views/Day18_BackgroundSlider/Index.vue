<template>
  <div class="body" :style="{backgroundImage: 'url(' + bgImgUrl + ')'}">
    <div class="slider-container">
      <div v-for="(img, index) in imgList" :key="index" :class="['slide',img.active ? 'active' : '']"
        :style="{backgroundImage: 'url(' + img.url + ')'}"></div>

      <button class="arrow left-arrow" id="left" @click="leftClick">
        <i class="fas fa-arrow-left"></i>
      </button>

      <button class="arrow right-arrow" id="right" @click="rightClick">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"

const imgList = reactive([
  { active: true, url: "src/assets/imgs/001.jpg" },
  { active: false, url: "src/assets/imgs/002.jpg" },
  { active: false, url: "src/assets/imgs/003.png" },
  { active: false, url: "src/assets/imgs/004.jpg" },
])

let activeSlide = ref(0)
let bgImgUrl = ref('')

publicFn()

function leftClick() {
  activeSlide.value--

  if (activeSlide.value < 0) {
    activeSlide.value = imgList.length - 1
  }

  publicFn()
}

function rightClick() {
  activeSlide.value++

  if (activeSlide.value > imgList.length - 1) {
    activeSlide.value = 0
  }

  publicFn()
}

function publicFn() {
  bgImgUrl.value = imgList[activeSlide.value].url
  imgList.forEach((slide) => slide.active = false)
  imgList[activeSlide.value].active = true
}
</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
