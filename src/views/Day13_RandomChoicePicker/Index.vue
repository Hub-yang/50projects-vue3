<script setup lang="ts">
interface Listitem {
  value: string
  highlight: boolean
}
const vFocus = {
  mounted(el: HTMLElement) {
    el.focus()
  },
}

const text = ref('')
const tagList = ref<Listitem[]>([])

function handleKeyup(event: Event) {
  createTags(text.value)
  if ((event as any).key === 'Enter') {
    text.value = ''
    randomSelect()
  }
}

function createTags(value: string) {
  const tags = value.split(',').filter(tag => tag.trim() !== '')
  const resList: Listitem[] = []
  tags.forEach((tag) => {
    const item = { value: tag, highlight: false }
    resList.push(item)
  })
  tagList.value = resList
}

function randomSelect() {
  const times = 20

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    if (randomTag) {
      randomTag.highlight = true
      setTimeout(() => {
        randomTag.highlight = false
      }, 100)
    }
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      randomTag.highlight = true
    }, 100)
  }, times * 100)
}

function pickRandomTag(): Listitem {
  return tagList.value[Math.floor(Math.random() * tagList.value.length)]
}
</script>

<template>
  <div class="body">
    <div class="container">
      <h3>
        Enter all of the choices divided by a comma (','). <br>
        Press enter when you're done
      </h3>
      <textarea
        v-model.trim="text"
        v-focus
        placeholder="Enter choices here..."
        @keyup="handleKeyup"
      />

      <div id="tags">
        <span
          v-for="({ highlight, value }, key) in tagList" :key
          class="tag"
          :class="[highlight ? 'highlight' : '']"
        >{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
