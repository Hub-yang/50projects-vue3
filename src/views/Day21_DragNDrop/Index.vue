<template>
  <div class="body">
    <div
      class="empty"
      @dragover.prevent
      @dragenter.prevent="dragEnter"
      @dragleave="dragLeave"
      @drop="dragDrop"
    >
      <div
        class="fill"
        ref="drag"
        draggable="true"
        @dragstart="handleDragStart"
        @dragend="handleDragEnd"
      ></div>
    </div>
    <div
      class="empty"
      v-for="item in 4"
      @dragover.prevent
      @dragenter.prevent="dragEnter"
      @dragleave="dragLeave"
      @drop="dragDrop"
    ></div>
  </div>
</template>

<script setup lang="ts">
const drag = ref<any>(null)

function handleDragStart(e: Event) {
  let targetEl = e.target as HTMLElement
  targetEl.className += " hold"
  setTimeout(() => (targetEl.className = "invisible"))
}

function handleDragEnd(e: Event) {
  ;(e.target as HTMLElement).className = "fill"
}

function dragEnter(e: Event) {
  ;(e.currentTarget as HTMLElement).className += " hovered"
}

function dragLeave(e: Event) {
  ;(e.currentTarget as HTMLElement).className = "empty"
}

function dragDrop(e: Event) {
  ;(e.currentTarget as HTMLElement).className = "empty"
  ;(e.currentTarget as HTMLElement).append(drag.value)
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
