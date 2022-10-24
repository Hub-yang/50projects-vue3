<template>
  <div class="body">
    <div class="empty" @dragover.prevent @dragenter.prevent="dragEnter" @dragleave="dragLeave" @drop="dragDrop">
      <div class="fill" ref="drag" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd"></div>
    </div>
    <div class="empty" v-for="item in 4" @dragover.prevent @dragenter.prevent="dragEnter" @dragleave="dragLeave"
      @drop="dragDrop"></div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const drag = ref()

function handleDragStart(e) {
  let targetEl = e.target
  targetEl.className += ' hold'
  setTimeout(() => targetEl.className = 'invisible')
}

function handleDragEnd(e) {
  e.target.className = "fill"
}

function dragEnter(e) {
  e.currentTarget.className += " hovered"
}

function dragLeave(e) {
  e.currentTarget.className = "empty"
}

function dragDrop(e) {
  e.currentTarget.className = "empty"
  e.currentTarget.append(drag.value)
}
</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
