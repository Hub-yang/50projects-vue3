<template>
  <div class="body">
    <div id="insert">
      <div v-if="!flag" class="key">
        Press any key to get the keyCode
      </div>
      <template v-else>
        <div class="key">
          {{key ==' ' ? 'Space' : key}}
          <small>event.key</small>
        </div>

        <div class="key">
          {{keyCode}}
          <small>event.keyCode</small>
        </div>

        <div class="key">
          {{code}}
          <small>event.code</small>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted } from "vue"

const flag = ref(false)
const keyInfo = reactive({
  key: "",
  keyCode: 0,
  code: ""
})

onMounted(() => {
  window.addEventListener("keydown", handlerKeyDown)
})

const { key, keyCode, code } = toRefs(keyInfo)

function handlerKeyDown(event) {
  flag.value = true
  if (event) {
    keyInfo.key = event.key
    keyInfo.keyCode = event.keyCode
    keyInfo.code = event.code
  }
}

</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
