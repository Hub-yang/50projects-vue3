<template>
  <div class="body">
    <button class="nav-btn open-btn" @click="visible = true">
      <i class="fas fa-bars"></i>
    </button>

    <img src="../../assets/imgs/Netflix_Logo_2014-700x188.png" alt="Logo" class="logo" />

    <p class="text">Mobile Navigation</p>

    <div :class="['nav nav-black', visible ? 'visible' : '']">
      <div :class="['nav nav-red', visible ? 'visible' : '']">
        <div :class="['nav nav-white', visible ? 'visible' : '']">
          <button class="nav-btn close-btn" @click="visible = false">
            <i class="fas fa-times"></i>
          </button>

          <img src="../../assets/imgs/Netflix_Logo_2014-700x188.png" alt="Logo" class="logo" />

          <ul class="list">
            <li v-for="(item, index) in itemList" :key="index"
              @click="handlerClick(item.children && item.children.length)">
              <a href="#">{{ item.name }}</a>
              <i class="icon" v-if="item.children"
                :class="['fas', active ? 'fas fa-angle-down' : 'fa-angle-right']"></i>
              <ul v-if="item.children" v-show="active">
                <li v-for="(child, index) in item.children" :key="index" @click.stop><a href="#">{{ child.name
                }}</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
const visible = ref(false)
const active = ref(true)
const itemList = reactive([
  { name: "Teams" },
  { name: "Locations" },
  {
    name: "Life at Netflix", children: [
      { name: "Netflix culture memo" },
      { name: "Work life balance" },
      { name: "Inclusion & diversity" },
      { name: "Blog" },
    ]
  }
])

const handlerClick = (bool) => {
  if (bool) {
    active.value = !active.value
  }
  return
}

</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
