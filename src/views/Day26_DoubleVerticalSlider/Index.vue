<template>
  <div class="body">
    <div class="slider-container" ref="sliderContainer">
      <div
        class="left-slide"
        :style="{
          top: initializeTop,
          transform: `translateY(${transform}px)`,
        }"
      >
        <div
          v-for="(title, index) in titleList"
          :key="index"
          :style="{ backgroundColor: title.color }"
        >
          <h1>{{ title.one }}</h1>
          <p>{{ title.two }}</p>
        </div>
      </div>
      <div
        class="right-slide"
        :style="{ transform: `translateY(-${transform}px)` }"
      >
        <div
          v-for="(img, index) in imgList"
          :key="index"
          :style="{ backgroundImage: 'url(' + img.url + ')' }"
        ></div>
      </div>

      <div class="action-buttons">
        <button class="btn down-button" @click="changeSlide('down')">
          <i class="fas fa-arrow-down"></i>
        </button>
        <button class="btn up-button" @click="changeSlide('up')">
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue"

const imgList = reactive([
  {
    url: "https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80",
  },
])

const titleList = reactive([
  { one: "Nature flower", two: "all in pink", color: "#fd3555" },
  { one: "Bluuue Sky", two: "with it's mountains", color: "#2a86ba" },
  { one: "Lonely castle", two: "in the wilderness", color: "#252e33" },
  { one: "Flying eagle", two: "in the sunset", color: "#ffb866" },
])

const activeSlideIndex = ref(0)
const sliderContainer = ref()
const initializeTop = `-${(imgList.length - 1) * 100}vh`
const sliderHeight = ref(0)

const transform = computed(() => activeSlideIndex.value * sliderHeight.value)

function changeSlide(direction) {
  sliderHeight.value = sliderContainer.value.clientHeight
  if (direction === "up") {
    activeSlideIndex.value++
    if (activeSlideIndex.value > imgList.length - 1) {
      activeSlideIndex.value = 0
    }
  } else if (direction === "down") {
    activeSlideIndex.value--
    if (activeSlideIndex.value < 0) {
      activeSlideIndex.value = imgList.length - 1
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
