<script setup lang='ts'>
import { routes } from '../../router/index'

const _routes = routes.slice(2)

const nav: any[] = []
for (let i = 0; i < _routes.length / 5; i++) {
  const startIdx = i * 5
  const endIdx = i * 5 + 5
  const _temp = _routes.slice(startIdx, endIdx)
  nav.push(_temp)
}
</script>

<template>
  <div class="nav_container">
    <div v-for="(x, idx) in nav" :key="idx" class="base_row">
      <div v-for="y in x" :key="y" class="base_col" @click="$router.push(y.path)">
        {{ y?.name || '--' }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav_container{
  padding: 12px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  .base_row{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    margin-bottom: 12px;
    .base_col{
      width: 18%;
      height: 100%;
      background:skyblue;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all ease .3s;
      cursor: pointer;
      &:hover{
        transition: all ease .3s;
        background: #000;
        color: white;
      }
    }
  }
}
</style>
