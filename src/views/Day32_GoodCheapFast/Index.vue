<template>
  <div class="body">
    <h2>How do you want your project to be?</h2>

    <div class="toggle-container">
      <input
        type="checkbox"
        id="good"
        @change="handleChange('good')"
        class="toggle"
        v-model="good"
      />
      <label for="good" class="label">
        <div class="ball"></div>
      </label>
      <span>Good</span>
    </div>

    <div class="toggle-container">
      <input
        type="checkbox"
        id="cheap"
        class="toggle"
        v-model="cheap"
        @change="handleChange('cheap')"
      />
      <label for="cheap" class="label">
        <div class="ball"></div>
      </label>
      <span>Cheap</span>
    </div>

    <div class="toggle-container">
      <input
        type="checkbox"
        id="fast"
        class="toggle"
        v-model="fast"
        @change="handleChange('fast')"
      />
      <label for="fast" class="label">
        <div class="ball"></div>
      </label>
      <span>Fast</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const good = ref(false)
const cheap = ref(false)
const fast = ref(false)
function handleChange(flag) {
  if (good.value && cheap.value && fast.value) {
    if (flag === "good") {
      fast.value = false
    }
    if (flag === "cheap") {
      good.value = false
    }
    if (flag === "fast") {
      cheap.value = false
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
