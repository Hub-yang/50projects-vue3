<script setup lang="ts">
const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']

function createNotification(message: any, type: string) {
  const toasts = document.getElementById('toasts')
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type)

  notif.textContent = message || getRandomMessage()

  toasts?.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 1000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
</script>

<template>
  <div class="body">
    <div id="toasts" />
    <div class="btns">
      <button class="btn info" @click="createNotification(null, 'info')">
        Show Info Notification
      </button>
      <button class="btn success" @click="createNotification(null, 'success')">
        Show Success Notification
      </button>
      <button class="btn error" @click="createNotification(null, 'error')">
        Show Error Notification
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import './index.scss';
</style>
