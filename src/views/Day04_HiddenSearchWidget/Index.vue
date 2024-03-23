<script setup lang="ts">
const showSearchBar = ref(false)

const input = ref<HTMLDivElement | null>(null)

function handleSearchBar(): void {
  (input.value as HTMLDivElement).focus()
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
