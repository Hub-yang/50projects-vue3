<script setup lang="ts">
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
  <div class="layout">
    <main>
      <router-view v-slot="{ Component }">
        <Transition name="nested">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>

    <div class="pagenation">
      <button :disabled="currentRouteIdx === 1" @click="goPrev">
        上一页
      </button>
      <button :disabled="currentRouteIdx === routes.length - 1" @click="goNext">
        下一页
      </button>
    </div>
  </div>
</template>

<style scoped>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.4s ease-in-out;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.layout {
  height: 100%;
  width: 100%;
  overflow: hidden;

  main {
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .pagenation {
    z-index: 999;
    height: 100px;
    width: 100%;
    background: #000;
  }
}
</style>
