<script setup lang="ts">
interface RandomFunc {
  lower: () => string
  upper: () => string
  number: () => string
  symbol: () => string
  [key: string]: any
}

interface passwordConfig {
  lower: boolean
  upper: boolean
  number: boolean
  symbol: boolean
  [key: string]: any
}
const resPassword = ref('')
const length = ref(5)
let timer: number

const config = reactive<passwordConfig>({
  lower: true,
  upper: true,
  number: true,
  symbol: true,
})

const tootipShow = ref(false)
const tootipType = ref('success')
const tootipText = ref('')

const randomFunc: RandomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

function onTootipOpen(options: { type?: string, msg: string, duration?: number }) {
  const { type = 'success', msg = '', duration = 2000 } = options
  tootipType.value = type
  tootipText.value = msg
  tootipShow.value = true
  clearTimeout(timer)
  timer = setTimeout(() => tootipShow.value = false, duration)
}

// 复制密码
async function handleCopy(text: string): Promise<void> {
  if (resPassword.value) {
    await navigator.clipboard.writeText(text)
    onTootipOpen({
      msg: '拷贝成功',
    })
  }
}

// 生成密码
function handleClick(): void {
  resPassword.value = generatePassword(
    config,
    length.value,
  )
}

function generatePassword(
  config: passwordConfig,
  length: number,
) {
  let generatedPassword = ''
  const typesCount
    = Number(config.lower) + Number(config.upper) + Number(config.number) + Number(config.symbol)
  const typesArr = ['lower', 'upper', 'number', 'symbol']
  if (typesCount === 0) {
    onTootipOpen({
      type: 'error',
      msg: '至少选择一项！',
    })
    return ''
  }

  for (let i = 0; i < length; i += typesCount) {
    // 数组重排
    typesArr.sort(() => Math.random() - 0.5)
    typesArr.forEach((type) => {
      if (config[type]) {
        generatedPassword += randomFunc[type]()
      }
    })
  }

  const finalPassword = generatedPassword.slice(0, length)
  return finalPassword
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}
</script>

<template>
  <div class="body base_container">
    <div class="tootip" :class="[tootipType]" :style="{ top: tootipShow ? '10px' : '-50px' }">
      {{ tootipText }}
    </div>
    <div class="container">
      <h2>密码生成器</h2>
      <div class="result-container">
        <span id="result">{{ resPassword }}</span>
        <button id="clipboard" class="btn" @click="handleCopy(resPassword)">
          <i class="far fa-clipboard" />
        </button>
      </div>
      <div class="settings">
        <div class="setting">
          <label>密码长度</label>
          <input id="length" v-model="length" type="number" min="4" max="20">
        </div>
        <div class="setting">
          <label>是否包含大写字母</label>
          <input id="uppercase" v-model="config.upper" type="checkbox">
        </div>
        <div class="setting">
          <label>是否包含小写字母</label>
          <input id="lowercase" v-model="config.lower" type="checkbox">
        </div>
        <div class="setting">
          <label>是否包含数字</label>
          <input id="numbers" v-model="config.number" type="checkbox">
        </div>
        <div class="setting">
          <label>是否包含符号</label>
          <input id="symbols" v-model="config.symbol" type="checkbox">
        </div>
      </div>

      <button id="generate" class="btn btn-large" @click="handleClick">
        生成密码
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
