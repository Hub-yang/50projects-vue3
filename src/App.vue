<script setup lang="ts">
import Navigation from '~/components/Navigation.vue'
</script>

<template>
  <div v-if="$route.path !== '/day06'" class="layout">
    <main class="base-main-h">
      <router-view v-slot="{ Component }">
        <Transition name="nested">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>
    <Navigation />
  </div>
  <router-view v-else v-slot="{ Component }">
    <Transition name="nested">
      <component :is="Component" />
    </Transition>
  </router-view>
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
    /* display: flex;
    align-items: center;
    justify-content: center; */
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>
