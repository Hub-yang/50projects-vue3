<script setup lang="ts">
interface NavItem {
  id: number
  path: string
  class: string
  name: string
}

const navList = reactive<NavItem[]>([
  { id: 1, path: '/day03/page01', class: 'fas fa-home', name: 'Home' },
  { id: 2, path: '/day03/page02', class: 'fas fa-user-alt', name: 'About' },
  { id: 3, path: '/day03/page03', class: 'fas fa-envelope', name: 'Contact' },
])
const showNav = ref(false)

function switchNav(path: string): void {
  showNav.value = false
  useRouter().push(path)
}
</script>

<template>
  <div class="body">
    <div class="container" :class="[showNav ? 'show-nav' : '']">
      <div class="circle-container">
        <div class="circle">
          <button id="close" @click="showNav = false">
            <i class="fas fa-times" />
          </button>
          <button id="open" @click="showNav = true">
            <i class="fas fa-bars" />
          </button>
        </div>
      </div>

      <router-view #="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>

    <nav>
      <ul>
        <li v-for="nav in navList" :key="nav.id" @click="switchNav(nav.path)">
          <i :class="nav.class" /><span>{{ nav.name }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
