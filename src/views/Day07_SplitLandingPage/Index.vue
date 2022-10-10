<template>
  <div class="body">
    <div :class="['container',toggle=='left'? 'hover-left' :toggle=='right'? 'hover-right' : '']">
      <div class="split left" @mouseenter="toggle='left'" @mouseleave="toggle=''">
        <h1>Title One</h1>
        <a href="#" class="btn">Show More</a>
      </div>
      <div class="split right" @mouseenter="toggle='right'" @mouseleave="toggle=''">
        <h1>Title Two</h1>
        <a href="#" class="btn">Show More</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"

const url = "src/assets/imgs/002.jpg"

const toggle = ref("")
</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
