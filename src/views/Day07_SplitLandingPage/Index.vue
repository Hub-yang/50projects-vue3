<script setup lang="ts">
const toggle = ref('')
</script>

<template>
  <div class="body">
    <div
      class="container"
      :class="[toggle || '']"
    >
      <div
        class="split left"
        @mouseenter="toggle = 'hover-left'"
        @mouseleave="toggle = ''"
      >
        <h1>Title One</h1>
        <a href="#" class="btn">Show More</a>
      </div>
      <div
        class="split right"
        @mouseenter="toggle = 'hover-right'"
        @mouseleave="toggle = ''"
      >
        <h1>Title Two</h1>
        <a href="#" class="btn">Show More</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
