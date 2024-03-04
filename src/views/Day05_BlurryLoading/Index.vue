<script setup lang="ts">
const url = ref<string>('src/assets/imgs/009.jpg')

const load = ref<number>(0)

const loading = shallowRef<any>(null)

const bg = shallowRef<any>(null)

const timer = setInterval(blurring, 30)

function blurring() {
  load.value++
  if (load.value > 99)
    clearInterval(timer)

  loading.value.style.opacity = scale(load.value, 0, 100, 1, 0)
  bg.value.style.filter = `blur(${scale(load.value, 0, 100, 30, 0)}px)`
}

function scale(
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
): number | void {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
</script>

<template>
  <div
    ref="bg"
    class="body"
    :style="{ backgroundImage: `url(${url})` }"
  />
  <div ref="loading" class="loading-text">
    {{ load }}%
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
