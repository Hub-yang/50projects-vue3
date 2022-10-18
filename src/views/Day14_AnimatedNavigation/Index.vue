<template>
  <div class="body">
    <nav :class="[toggleActive ? 'active' : '']" id="nav">
      <ul>
        <li v-for="(nav, index) in navList" :key="index"><a href="#">{{nav.title}}</a></li>
      </ul>
      <button class="icon" id="toggle" @click="toggleActive=!toggleActive">
        <div class="line line1"></div>
        <div class="line line2"></div>
      </button>
    </nav>
  </div>

</template>

<script setup>
import { ref, reactive } from "vue"
const toggleActive = ref(true)

const navList = [
  { title: "Home" },
  { title: "Works" },
  { title: "About" },
  { title: "Content" },
]

</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
