<script setup lang="ts">
interface KeyItem {
  key: string
  keyCode: number
  code: string
}
const flag = ref(false)
const keyInfo = reactive<KeyItem>({
  key: '',
  keyCode: 0,
  code: '',
})

window.addEventListener('keydown', handlerKeyDown, { capture: true })

const { key, keyCode, code } = toRefs(keyInfo)

function handlerKeyDown(e: KeyboardEvent) {
  flag.value = true
  e.preventDefault()
  e.stopImmediatePropagation()
  if (e) {
    keyInfo.key = e.key
    keyInfo.keyCode = e.keyCode
    keyInfo.code = e.code
  }
}
</script>

<template>
  <div class="body base_container">
    <div v-if="!flag" class="key">
      Press any key to get the keyCode
    </div>
    <template v-else>
      <div class="key">
        {{ key === " " ? "Space" : key }}
        <small>event.key</small>
      </div>

      <div class="key">
        {{ keyCode }}
        <small>event.keyCode</small>
      </div>

      <div class="key">
        {{ code }}
        <small>event.code</small>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
