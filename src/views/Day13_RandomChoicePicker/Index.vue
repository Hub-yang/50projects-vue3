<template>
  <div class="body">
    <div class="container">
      <h3>
        Enter all of the choices divided by a comma (','). <br />
        Press enter when you're done
      </h3>
      <textarea
        v-focus
        placeholder="Enter choices here..."
        id="textarea"
        v-model.trim="text"
        @keyup="handleKeyup"
      ></textarea>

      <div id="tags">
        <span
          :class="['tag', item.highlight ? 'highlight' : '']"
          v-for="(item, index) in tag.list"
          :key="index"
          >{{ item.value }}</span
        >
      </div>
    </div>
  </div>
</template>

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

const text = ref<string>("")

let tag = reactive<{ list: any[] }>({
  list: [],
})

function handleKeyup(event: Event) {
  createTags(text.value)
  if ((event as any).key == "Enter") {
    text.value = ""
    randomSelect()
  }
}

function createTags(value: string) {
  let tags = value.split(",").filter((tag) => tag.trim() !== "")
  const resList: Listitem[] = []
  tags.forEach((tag) => {
    const obj = { value: tag, highlight: false }
    resList.push(obj)
  })
  tag.list = resList
}

function randomSelect() {
  const times = 20

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    if (randomTag !== undefined) {
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
  return tag.list[Math.floor(Math.random() * tag.list.length)]
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
