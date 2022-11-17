<template>
  <div class="body">
    <button id="btn" class='magic' @click="handleClick">Magic 🎩</button>
    <div id="boxes" :class="['boxes', showBig ? 'big' : '']">
      <template v-for="i in 4" :key="i">
        <div class="box" v-for="j in 4" :key="j"
          :style="{ backgroundPosition: `${-(j - 1) * 125}px ${-(i - 1) * 125}px` }">
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"
const showBig = ref(false)
const handleClick = () => {
  showBig.value = !showBig.value
}
</script>

<style  lang="scss">
@import "./index.scss"
</style>
