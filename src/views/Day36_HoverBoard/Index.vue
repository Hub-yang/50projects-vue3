<script setup>
// 面板背景色
const bgColor = ref('#1d1d1d')
// 颜色列表
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

function setColor(e) {
  const color = getRandomColor()
  e.target.style.background = color
  e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
  e.target.style.background = bgColor.value
  e.target.style.boxShadow = '0 0 2px #000'
}

// 获取随机颜色
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
</script>

<template>
  <div class="body base_container">
    <div id="container" class="container">
      <div
        v-for="key in 500"
        :key
        class="square"
        @mouseover="setColor"
        @mouseout="removeColor"
      />
    </div>
  </div>
</template>

<style lang="scss">
@use './index.scss';
.square {
  background-color: v-bind(bgColor);
}
</style>
