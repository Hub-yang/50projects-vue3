<script setup lang="ts" vapor>
import { getItemList } from '~/api/http'

type AnyKey = Record<string, any>

const listItems = ref<AnyKey[]>([])
const filteredList = ref<AnyKey[]>([])
const keyWords = ref('')
const firstRender = ref(true)

onMounted(() => getData())

async function getData() {
  try {
    const { results }: AnyKey = await getItemList() || {}
    listItems.value = results ?? []
  }
  catch (error) {
    throw new Error(`${error}`)
  }
  finally {
    firstRender.value = false
  }
}

function filterData() {
  filteredList.value = listItems.value.filter((item: AnyKey) => {
    const objRef = (item.name.first + item.name.last).toLowerCase()
    return objRef.includes(keyWords.value.toLowerCase())
  })
}

watchEffect(filterData)
</script>

<template>
  <div class="body base_container">
    <div class="container">
      <header class="header">
        <h4 class="title">
          Live User Filter
        </h4>
        <small class="subtitle">Search by name and/or location</small>
        <input id="filter" v-model="keyWords" type="text" placeholder="Search">
      </header>

      <ul id="result" class="user-list">
        <template v-if="listItems.length">
          <li v-for="(item, index) in (firstRender ? listItems : filteredList)" :key="index">
            <img :src="item.picture.large" :alt="item.name.first">
            <div class="user-info">
              <h4>{{ `${item.name.first} ${item.name.last}` }}</h4>
              <p>{{ `${item.location.city},${item.location.country}` }}</p>
            </div>
          </li>
        </template>
        <li v-else>
          <h3>Loading...</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
