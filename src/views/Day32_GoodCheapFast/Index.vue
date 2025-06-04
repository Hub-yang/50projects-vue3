<script setup>
import { ref } from 'vue'

const good = ref(false)
const cheap = ref(false)
const fast = ref(false)
function handleChange(flag) {
  if (good.value && cheap.value && fast.value) {
    if (flag === 'good')
      fast.value = false

    if (flag === 'cheap')
      good.value = false

    if (flag === 'fast')
      cheap.value = false
  }
}
</script>

<template>
  <div class="body">
    <h2>How do you want your project to be?</h2>

    <div class="toggle-container">
      <input
        id="good"
        v-model="good"
        type="checkbox"
        class="toggle"
        @change="handleChange('good')"
      >
      <label for="good" class="label">
        <div class="ball" />
      </label>
      <span>Good</span>
    </div>

    <div class="toggle-container">
      <input
        id="cheap"
        v-model="cheap"
        type="checkbox"
        class="toggle"
        @change="handleChange('cheap')"
      >
      <label for="cheap" class="label">
        <div class="ball" />
      </label>
      <span>Cheap</span>
    </div>

    <div class="toggle-container">
      <input
        id="fast"
        v-model="fast"
        type="checkbox"
        class="toggle"
        @change="handleChange('fast')"
      >
      <label for="fast" class="label">
        <div class="ball" />
      </label>
      <span>Fast</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
