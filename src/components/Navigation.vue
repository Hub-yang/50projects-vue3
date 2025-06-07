<script setup lang='ts'>
import { routes } from '~/router'

const router = useRouter()
const route = useRoute()
const currentRouteIdx = ref(-1)

watch(() => route.fullPath, (fullPath) => {
  const reg = /\/[^/]+(?=\/|$)/
  const path = fullPath.match(reg)![0]
  currentRouteIdx.value = routes.findIndex(item => item.path === path)
}, { deep: true })

function goPrev() {
  const prev = routes[currentRouteIdx.value - 1]
  router.push(prev.path)
}

function goNext() {
  const next = routes[currentRouteIdx.value + 1]
  router.push(next.path)
}
</script>

<template>
  <div class="pagenation">
    <button :disabled="currentRouteIdx === 1" @click="goPrev">
      <i class="fas fa-arrow-left" />&nbsp;
      上一页
    </button>
    <button :disabled="currentRouteIdx === routes.length - 1" @click="goNext">
      下一页
      &nbsp;<i class="fas fa-arrow-right" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagenation {
  z-index: 999;
  height: 100px;
  width: 100%;
  display: flex;
  background: #080808;
  padding: 12px 12px 18px 12px;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 12px;

  button {
    width: 50%;
    height: 100%;
    background: #252525;
    border-radius: 0.5rem;
    color: white;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
}
</style>
