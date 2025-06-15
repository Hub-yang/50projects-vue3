<script setup lang="ts">
interface RandomFunc {
  lower: () => string
  upper: () => string
  number: () => string
  symbol: () => string
}
const resPassword = ref<string>('')
const length = ref<number>(5)
const hasLower = ref<boolean>(true)
const hasUpper = ref<boolean>(true)
const hasNumber = ref<boolean>(true)
const hasSymbol = ref<boolean>(true)
const randomFunc: RandomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// 复制密码
async function handleCopy(text: string): Promise<void> {
  if (resPassword.value) {
    await navigator.clipboard.writeText(text)
    // eslint-disable-next-line no-alert
    alert('密码已复制到剪切板！')
  }
}

// 生成密码
function handleClick(): void {
  resPassword.value = generatePassword(
    hasLower.value,
    hasUpper.value,
    hasNumber.value,
    hasSymbol.value,
    length.value,
  )
}

function generatePassword(
  lower: boolean,
  upper: boolean,
  number: boolean,
  symbol: boolean,
  length: number,
) {
  let generatedPassword = ''
  const typesCount
    = Number(lower) + Number(upper) + Number(number) + Number(symbol)
  const typesArr = ['lower', 'upper', 'number', 'symbol']

  if (typesCount === 0) {
    // eslint-disable-next-line no-alert
    alert('至少选择一项')
    return ''
  }

  for (let i = 0; i < length; i += typesCount) {
    // 数组重排
    typesArr.sort(() => Math.random() - 0.5)
    typesArr.forEach((type) => {
      generatedPassword += (randomFunc as any)[type]()
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
  <div class="body">
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
          <input id="uppercase" v-model="hasUpper" type="checkbox">
        </div>
        <div class="setting">
          <label>是否包含小写字母</label>
          <input id="lowercase" v-model="hasLower" type="checkbox">
        </div>
        <div class="setting">
          <label>是否包含数字</label>
          <input id="numbers" v-model="hasNumber" type="checkbox">
        </div>
        <div class="setting">
          <label>是否包含符号</label>
          <input id="symbols" v-model="hasSymbol" type="checkbox">
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
