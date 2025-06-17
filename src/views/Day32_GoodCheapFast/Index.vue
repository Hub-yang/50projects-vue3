<script setup>
const typeOption = reactive({
  good: false,
  cheap: false,
  fast: false,
})
function handleChange(flag) {
  if (typeOption.good && typeOption.cheap && typeOption.fast) {
    if (flag === 'good')
      typeOption.fast = false

    if (flag === 'cheap')
      typeOption.good = false

    if (flag === 'fast')
      typeOption.cheap = false
  }
}
</script>

<template>
  <div class="body base_container">
    <h2>How do you want your project to be?</h2>

    <div v-for="key in Object.keys(typeOption)" :key class="toggle-container">
      <input
        :id="key"
        v-model="typeOption[key]"
        type="checkbox"
        class="toggle"
        @change="handleChange(key)"
      >
      <label :for="key" class="label">
        <div class="ball" />
      </label>
      <span>{{ key.charAt(0).toUpperCase() + key.slice(1) }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
