<script setup lang="ts">
import type { VNodeRef } from 'vue'

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']
const messageBtns = [
  { title: 'Show Info Notification', type: 'info' },
  { title: 'Show Success Notification', type: 'success' },
  { title: 'Show Error Notification', type: 'error' },
]

const toasts = ref<VNodeRef | null>(null)
function createNotification(message: string, type: string) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type)
  notif.textContent = message || getRandomMessage()
  toasts.value.appendChild(notif)
  setTimeout(() => {
    notif.remove()
  }, 1000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
</script>

<template>
  <div class="body base_container">
    <div id="toasts" ref="toasts" />
    <div class="btns">
      <button v-for="({ title, type }) in messageBtns" :key="type" :class="[`btn ${type}`]" @click="createNotification('', type)">
        {{ title }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@use './index.scss';
</style>
