<script setup lang="ts">
// 卡片数据（注意vite下url的获取和使用）
const cardList = ref<{ [prop: string]: any }[]>([
  {
    title: 'one',
    active: true,
    url: new URL('../../assets/imgs/001.jpg', import.meta.url).href,
  },
  {
    title: 'two',
    active: false,
    url: 'src/assets/imgs/002.jpg',
  },
  {
    title: 'three',
    active: false,
    url: 'src/assets/imgs/003.png',
  },
  {
    title: 'four',
    active: false,
    url: 'src/assets/imgs/004.jpg',
  },
  {
    title: 'five',
    active: false,
    url: 'src/assets/imgs/005.jpg',
  },
])
// 切换active
function toggleActive(index: number) {
  cardList.value.forEach((item, i) => {
    item.active = (i === index)
  })
}
</script>

<template>
  <div class="container">
    <template v-for="(img, index) in cardList" :key="index">
      <div
        class="panel" :class="[img.active ? 'active' : '']"
        :style="{
          backgroundImage: `url(${img.url})`,
        }"
        @click="toggleActive(index)"
      >
        <h3>{{ img.title }}</h3>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
