<template>
  <div class="body">
    <div class="phone">
      <img :class="['content', img.show ? 'show' : '']" v-for="(img, index) in imgList" :key="index" :src="img.imgUrl"
        :alt="img.imgAlt">
      <nav>
        <ul>
          <li :class="{ active: tab.active }" v-for="(tab, index) in tabList" :key="index" @click="handleClick(index)">
            <i :class="['fas', tab.tabClass]"></i>
            <p>{{ tab.tab }}</p>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
const imgList = reactive([
  { imgUrl: "src/assets/imgs/001.jpg", imgAlt: "home", show: true },
  { imgUrl: "src/assets/imgs/002.jpg", imgAlt: "work", show: false },
  { imgUrl: "src/assets/imgs/003.png", imgAlt: "blog", show: false },
  { imgUrl: "src/assets/imgs/004.jpg", imgAlt: "about", show: false },
])

const tabList = reactive([
  { tabClass: "fa-home", tab: "Home", active: true },
  { tabClass: "fa-box", tab: "Work", active: false },
  { tabClass: "fa-book-open", tab: "Blog", active: false },
  { tabClass: "fa-users", tab: "About", active: false },
])

const handleClick = (i) => {
  imgList.forEach((img, idx) => {
    img.show = idx === i ? true : false
  })
  tabList.forEach((tab, idx) => {
    tab.active = idx == i ? true : false
  })
}
</script>
<style scoped lang="scss">
@import "./index.scss"
</style>
