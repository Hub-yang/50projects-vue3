<script setup>
import { computed, onMounted, reactive, ref } from 'vue'

const imgList = reactive([
  {
    url: 'src/assets/imgs/001.jpg',
    alt: 'first-image',
  },
  {
    url: 'src/assets/imgs/002.jpg',
    alt: 'second-image',
  },
  {
    url: 'src/assets/imgs/005.jpg',
    alt: 'third-image',
  },
  {
    url: 'src/assets/imgs/004.jpg',
    alt: 'fourth-image',
  },
])

const idx = ref(0)
const translateX = ref(0)
const imgWidth = ref(850)
let interval
onMounted(() => {
  interval = setInterval(run, 2000)
})

const refTranslateX = computed(() => `${translateX.value}px`)
const refImgWidth = computed(() => `${imgWidth.value}px`)

function changeImg() {
  if (idx.value > imgList.length - 1)
    idx.value = 0
  else if (idx.value < 0)
    idx.value = imgList.length - 1

  translateX.value = -idx.value * imgWidth.value
}

function run() {
  idx.value++
  changeImg()
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

function prevImg() {
  idx.value--
  changeImg()
  resetInterval()
}

function nextImg() {
  idx.value++
  changeImg()
  resetInterval()
}
</script>

<template>
  <div class="body">
    <div class="carousel" :style="{ '--imgWidth': refImgWidth }">
      <div class="image-container" :style="{ '--translateX': refTranslateX }">
        <img
          v-for="(img, index) in imgList"
          :key="index"
          :style="{ '--imgWidth': refImgWidth }"
          :src="img.url"
          :alt="img.alt"
        >
      </div>

      <div class="buttons-container">
        <button class="btn" @click="prevImg">
          Prev
        </button>
        <button class="btn" @click="nextImg">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
