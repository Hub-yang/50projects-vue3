<script setup lang="ts">
const toggleActive = ref<boolean>(true)

const navList: { title: string }[] = [
  { title: 'Home' },
  { title: 'Works' },
  { title: 'About' },
  { title: 'Content' },
]
</script>

<template>
  <div class="body">
    <nav id="nav" :class="[toggleActive ? 'active' : '']">
      <ul>
        <li v-for="(nav, index) in navList" :key="index">
          <a href="#">{{ nav.title }}</a>
        </li>
      </ul>
      <button id="toggle" class="icon" @click="toggleActive = !toggleActive">
        <div class="line line1" />
        <div class="line line2" />
      </button>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
