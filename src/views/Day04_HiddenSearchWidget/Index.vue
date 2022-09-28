<template>
  <div class="body">
    <div :class="['search',showSearchBar ? 'active' : '']">
      <input type="text" class="input" placeholder="Search..." ref="input">
      <button class="btn" @click="handleSearchBar">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"

const showSearchBar = ref(false)

const input = ref(null)

function handleSearchBar() {
  input.value.focus()
  showSearchBar.value = !showSearchBar.value
}
</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
