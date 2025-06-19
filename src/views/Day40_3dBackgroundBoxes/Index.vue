<script setup>
const showBig = ref(false)
function handleClick() {
  showBig.value = !showBig.value
}
</script>

<template>
  <div class="body base_container">
    <button id="btn" class="magic" @click="handleClick">
      Magic 🎩
    </button>
    <div id="boxes" class="boxes" :class="{ big: !!showBig }">
      <template v-for="i in 4" :key="i">
        <div
          v-for="j in 4" :key="j" class="box"
          :style="{ backgroundPosition: `${-(j - 1) * 125}px ${-(i - 1) * 125}px` }"
        />
      </template>
    </div>
  </div>
</template>

<style  lang="scss">
@use './index.scss';
</style>
