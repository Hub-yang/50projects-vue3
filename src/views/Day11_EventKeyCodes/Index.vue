<script setup lang="ts">
const flag = ref<boolean>(false)
const keyInfo = reactive<{ key: string, keyCode: number, code: string }>({
  key: '',
  keyCode: 0,
  code: '',
})

onMounted(() => {
  window.addEventListener('keydown', handlerKeyDown)
})

const { key, keyCode, code } = toRefs(keyInfo)

function handlerKeyDown(event: Event) {
  flag.value = true
  if (event) {
    keyInfo.key = (event as any).key
    keyInfo.keyCode = (event as any).keyCode
    keyInfo.code = (event as any).code
  }
}
</script>

<template>
  <div class="body">
    <div id="insert">
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
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
