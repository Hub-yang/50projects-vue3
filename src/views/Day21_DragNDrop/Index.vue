<script setup lang="ts">
import type { VNodeRef } from 'vue'

const drag = ref<VNodeRef | null>(null)

function handleDragStart(e: Event) {
  const targetEl = e.target as HTMLElement
  targetEl.className += ' hold'
  setTimeout(() => (targetEl.className = 'invisible'))
}

function handleDragEnd(e: Event) {
  ;(e.target as HTMLElement).className = 'fill'
}

function dragEnter(e: Event) {
  ;(e.currentTarget as HTMLElement).className += ' hovered'
}

function dragLeave(e: Event) {
  ;(e.currentTarget as HTMLElement).className = 'empty'
}

function dragDrop(e: Event) {
  ;(e.currentTarget as HTMLElement).className = 'empty'
  ;(e.currentTarget as HTMLElement).append(drag.value)
}
</script>

<template>
  <div class="body base_container">
    <div
      class="empty"
      @dragover.prevent
      @dragenter.prevent="dragEnter"
      @dragleave="dragLeave"
      @drop="dragDrop"
    >
      <div
        ref="drag"
        class="fill"
        draggable="true"
        @dragstart="handleDragStart"
        @dragend="handleDragEnd"
      />
    </div>
    <div
      v-for="item in 4"
      :key="item"
      class="empty"
      @dragover.prevent
      @dragenter.prevent="dragEnter"
      @dragleave="dragLeave"
      @drop="dragDrop"
    />
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
