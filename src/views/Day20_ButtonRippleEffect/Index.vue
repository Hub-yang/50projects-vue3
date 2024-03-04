<script setup lang="ts">
const span = ref<any>(null)
const btnList = reactive<{ text: string, show: boolean, color: string }[]>([
  { text: 'Click Me', show: false, color: 'purple' },
  { text: 'Click Me', show: false, color: 'skyblue' },
  { text: 'Click Me', show: false, color: 'orange' },
])

function handleClick(index: number, e: Event) {
  btnList[index].show = true
  const x = (e as any).clientX
  const y = (e as any).clientY

  const buttonTop = (e as any).target.offsetTop
  const buttonLeft = (e as any).target.offsetLeft

  const xInside = x - buttonLeft
  const yInside = y - buttonTop

  span.value[index].style.top = `${yInside}px`
  span.value[index].style.left = `${xInside}px`

  setTimeout(() => (btnList[index].show = false), 500)
}
</script>

<template>
  <div class="body">
    <button
      v-for="(btn, index) in btnList"
      :key="index"
      class="ripple"
      :style="{ '--color': btn.color }"
      @click="handleClick(index, $event)"
    >
      {{ btn.text }}<span v-show="btn.show" ref="span" class="circle" />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
