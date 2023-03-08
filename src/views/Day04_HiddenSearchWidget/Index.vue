<template>
  <div class="body">
    <div :class="['search', showSearchBar ? 'active' : '']">
      <input type="text" class="input" placeholder="Search..." ref="input" />
      <button class="btn" @click="handleSearchBar">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const showSearchBar = ref<boolean>(false)

const input = ref<any>(null)

function handleSearchBar(): void {
  input.value.focus()
  showSearchBar.value = !showSearchBar.value
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
