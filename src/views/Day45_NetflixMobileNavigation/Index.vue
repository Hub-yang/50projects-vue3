<script setup>
const visible = ref(false)
const active = ref(true)
const itemList = [
  { name: 'Teams' },
  { name: 'Locations' },
  {
    name: 'Life at Netflix',
    children: [
      { name: 'Netflix culture memo' },
      { name: 'Work life balance' },
      { name: 'Inclusion & diversity' },
      { name: 'Blog' },
    ],
  },
]

function handlerClick(bool) {
  if (bool)
    active.value = !active.value
}
</script>

<template>
  <div class="body base_container">
    <button class="nav-btn open-btn" @click="visible = true">
      <i class="fas fa-bars" />
    </button>

    <img src="../../assets/imgs/Netflix_Logo_2014-700x188.png" alt="Logo" class="logo">

    <p class="text">
      Mobile Navigation
    </p>

    <div class="nav nav-black" :class="{ visible: !!visible }">
      <div class="nav nav-red" :class="{ visible: !!visible }">
        <div class="nav nav-white" :class="{ visible: !!visible }">
          <button class="nav-btn close-btn" @click="visible = false">
            <i class="fas fa-times" />
          </button>

          <img src="../../assets/imgs/Netflix_Logo_2014-700x188.png" alt="Logo" class="logo">

          <ul class="list">
            <li
              v-for="({ name, children }) in itemList" :key="name"
              @click="handlerClick(children?.length)"
            >
              <a href="#">{{ name }}</a>
              <i
                v-if="children" class="icon fas"
                :class="[active ? 'fas fa-angle-down' : 'fa-angle-right']"
              />
              <ul v-if="children" v-show="active">
                <li v-for="(child) in children" :key="child.name" @click.stop>
                  <a href="#">{{ child.name }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
