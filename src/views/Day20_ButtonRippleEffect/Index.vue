<template>
  <div class="body">
    <button class="ripple" :style="{'--color':btn.color}" v-for="(btn, index) in btnList" :key="index"
      @click="handleClick(index,$event)">{{btn.text}}<span v-show="btn.show" class="circle" ref="span"></span></button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"

const span = ref()
const btnList = reactive([
  { text: "Click Me", show: false, color: "purple" },
  { text: "Click Me", show: false, color: "skyblue" },
  { text: "Click Me", show: false, color: "orange" },
])

const handleClick = (index, e) => {
  btnList[index].show = true
  const x = e.clientX
  const y = e.clientY

  const buttonTop = e.target.offsetTop
  const buttonLeft = e.target.offsetLeft

  const xInside = x - buttonLeft
  const yInside = y - buttonTop


  span.value[index].style.top = yInside + "px"
  span.value[index].style.left = xInside + "px"


  setTimeout(() => btnList[index].show = false, 500)
}
</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
