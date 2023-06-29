<template>
  <div class="body">
    <div class="container">
      <h2>密码生成器</h2>
      <div class="result-container">
        <span id="result">{{ resPassword }}</span>
        <button class="btn" id="clipboard" @click="handleCopy(resPassword)">
          <i class="far fa-clipboard"></i>
        </button>
      </div>
      <div class="settings">
        <div class="setting">
          <label>密码长度</label>
          <input type="number" id="length" min="4" max="20" v-model="length" />
        </div>
        <div class="setting">
          <label>是否包含大写字母</label>
          <input type="checkbox" id="uppercase" v-model="config.upper" />
        </div>
        <div class="setting">
          <label>是否包含小写字母</label>
          <input type="checkbox" id="lowercase" v-model="config.lower" />
        </div>
        <div class="setting">
          <label>是否包含数字</label>
          <input type="checkbox" id="numbers" v-model="config.number" />
        </div>
        <div class="setting">
          <label>是否包含符号</label>
          <input type="checkbox" id="symbols" v-model="config.symbol" />
        </div>
      </div>

      <button class="btn btn-large" id="generate" @click="handleClick">
        生成密码
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface RandomFunc {
  lower: () => string
  upper: () => string
  number: () => string
  symbol: () => string
  [key: string]: any
}

const resPassword = ref<string>("")
const length = ref<number>(5)

interface passwordConfig {
  lower: boolean
  upper: boolean
  number: boolean
  symbol: boolean
  [key: string]: any
}

const config = reactive<passwordConfig>({
  lower: true,
  upper: true,
  number: true,
  symbol: true,
})

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
    alert("密码已复制到剪切板！")
  }
}

// 生成密码
function handleClick(): void {
  resPassword.value = generatePassword(
    config,
    length.value
  )
}

function generatePassword(
  config: passwordConfig,
  length: number
) {
  let generatedPassword = ""
  const typesCount =
    Number(config.lower) + Number(config.upper) + Number(config.number) + Number(config.symbol)
  const typesArr = ["lower", "upper", "number", "symbol"]

  if (typesCount === 0) {
    alert("至少选择一项")
    return ""
  }

  for (let i = 0; i < length; i += typesCount) {
    // 数组重排
    typesArr.sort(() => Math.random() - 0.5)
    console.log(typesArr)
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
  const symbols = "!@#$%^&*(){}[]=<>/,."
  return symbols[Math.floor(Math.random() * symbols.length)]
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
