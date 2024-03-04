<script setup lang="ts">
const showSearchBar = ref<boolean>(false)

const input = ref<any>(null)

function handleSearchBar(): void {
  input.value.focus()
  showSearchBar.value = !showSearchBar.value
}
</script>

<template>
  <div class="body">
    <div class="search" :class="[showSearchBar ? 'active' : '']">
      <input ref="input" type="text" class="input" placeholder="Search...">
      <button class="btn" @click="handleSearchBar">
        <i class="fas fa-search" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
