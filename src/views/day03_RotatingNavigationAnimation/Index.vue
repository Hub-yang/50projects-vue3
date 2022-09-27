<template>
  <div class="body">
    <div :class="['container', showNav ? 'show-nav' : '']">
      <div class="circle-container">
        <div class="circle">
          <button id="close" @click="showNav = false">
            <i class="fas fa-times"></i>
          </button>
          <button id="open" @click="showNav = true">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <router-view #="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </div>

    <nav>
      <ul>
        <li v-for="nav in navList" :key="nav.id" @click="switchNav(nav.path)">
          <i :class="nav.class"></i><span>{{ nav.name }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"

const navList = reactive([
  { id: 1, path: "/day03/page01", class: "fas fa-home", name: "Home" },
  { id: 2, path: "/day03/page02", class: "fas fa-user-alt", name: "About" },
  { id: 3, path: "/day03/page03", class: "fas fa-envelope", name: "Contact" },
])
const showNav = ref(false)

const router = useRouter()

const switchNav = (path) => {
  showNav.value = false
  router.push(path)
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
