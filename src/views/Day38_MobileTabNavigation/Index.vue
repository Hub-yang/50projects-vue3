<script setup>
const imgList = reactive([
  { imgUrl: 'src/assets/imgs/001.jpg', imgAlt: 'home', show: true },
  { imgUrl: 'src/assets/imgs/002.jpg', imgAlt: 'work', show: false },
  { imgUrl: 'src/assets/imgs/003.png', imgAlt: 'blog', show: false },
  { imgUrl: 'src/assets/imgs/004.jpg', imgAlt: 'about', show: false },
])

const tabList = reactive([
  { tabClass: 'fa-home', tab: 'Home', active: true },
  { tabClass: 'fa-box', tab: 'Work', active: false },
  { tabClass: 'fa-book-open', tab: 'Blog', active: false },
  { tabClass: 'fa-users', tab: 'About', active: false },
])

function handleClick(i) {
  imgList.forEach((img, idx) => {
    img.show = idx === i
  })
  tabList.forEach((tab, idx) => {
    tab.active = idx === i
  })
}
</script>

<template>
  <div class="body base_container">
    <div class="phone">
      <img
        v-for="({ imgUrl: src, imgAlt: alt, show }) in imgList"
        :key="src"
        class="content"
        :class="{ show: !!show }"
        :src
        :alt
      >
      <nav>
        <ul>
          <li v-for="({ tabClass, tab, active }, idx) in tabList" :key="tab" :class="{ active: !!active }" @click="handleClick(idx)">
            <i class="fas" :class="[tabClass]" />
            <p>{{ tab }}</p>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
