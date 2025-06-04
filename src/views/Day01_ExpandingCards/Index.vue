<script setup lang="ts">
interface CardItem {
  title: string
  active: boolean
  url: string
}
// url动态路径
const cardList = ref<CardItem[]>([
  {
    title: 'one',
    active: true,
    url: new URL('~/assets/imgs/001.jpg', import.meta.url).href,
  },
  {
    title: 'two',
    active: false,
    url: new URL('~/assets/imgs/002.jpg', import.meta.url).href,
  },
  {
    title: 'three',
    active: false,
    url: new URL('~/assets/imgs/003.png', import.meta.url).href,
  },
  {
    title: 'four',
    active: false,
    url: new URL('~/assets/imgs/004.jpg', import.meta.url).href,
  },
  {
    title: 'five',
    active: false,
    url: new URL('~/assets/imgs/005.jpg', import.meta.url).href,
  },
])

function toggleActive(index: number) {
  cardList.value.forEach((item, i) => {
    item.active = (i === index)
  })
}
</script>

<template>
  <div class="container">
    <div
      v-for="({ url, title, active }, idx) in cardList" :key="title"
      class="panel" :class="[active ? 'active' : '']"
      :style="{
        backgroundImage: `url(${url})`,
      }"
      @click="toggleActive(idx)"
    >
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
