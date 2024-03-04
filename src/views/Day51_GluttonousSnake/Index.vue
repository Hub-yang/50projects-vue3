<script setup lang="ts">
// Food类
class Food {
  private element: HTMLElement
  constructor() {
    this.element = document.getElementById('food')!
  }

  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  change() {
    const random = Math.floor(Math.random() * 30) * 10
    this.element.style.left = `${random}px`
    this.element.style.top = `${random}px`
  }
}

// Score类
class ScorePanel {
  score = ref<number>(0)
  level = ref<number>(1)

  scoreEl: HTMLElement
  levelEl: HTMLElement

  maxLevel: number
  levelStep: number
  constructor(maxLevel: number = 10, levelStep: number = 10) {
    this.scoreEl = document.getElementById('score')!
    this.levelEl = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.levelStep = levelStep
  }

  addScore() {
    this.scoreEl.textContent = `${++this.score.value}`
    if (this.score.value % this.levelStep === 0)
      this.levelUp()
  }

  levelUp() {
    if (this.level.value < this.maxLevel)
      this.levelEl.textContent = `${++this.level.value}`
  }
}

// Snake类
class Snake {
  element: HTMLElement
  head: HTMLElement
  // 身体（包括头部）
  bodies: HTMLCollection
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
  }

  // 获取头部坐标
  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }

  set X(value: number) {
    // X和Y不会同时修改，尽心一步判断，减少不必要的set
    if (this.X === value)
      return

    // 限定x值的合法范围
    if (value < 0 || value > 290)
      throw new Error('game over')

    this.moveBodies()
    this.head.style.left = `${value}px`
    // 验证是否撞到自己
    this.checkBodyHeader()
  }

  set Y(value: number) {
    // X和Y不会同时修改，尽心一步判断，减少不必要的set
    if (this.Y === value)
      return

    if (value < 0 || value > 290)
      throw new Error('game over')

    this.moveBodies()
    this.head.style.top = `${value}px`
    // 验证是否撞到自己
    this.checkBodyHeader()
  }

  checkBodyHeader() {
    for (let i = 1; i < this.bodies.length; i++) {
      const bd = this.bodies[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop)
        throw new Error('game over')
    }
  }

  // 长度增加
  addBody() {
    const body = document.createElement('div')
    this.element.insertAdjacentElement('beforeend', body)
  }

  // 移动身体
  moveBodies() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      const X = (this.bodies[i - 1] as HTMLElement).offsetLeft
      const Y = (this.bodies[i - 1] as HTMLElement).offsetTop

      ;(this.bodies[i] as HTMLElement).style.left = `${X}px`
      ;(this.bodies[i] as HTMLElement).style.top = `${Y}px`
    }
  }
}

// GameControl类
class GameControl {
  food: Food
  snake: Snake
  scorePanel: ScorePanel
  // 移动方向
  direction: string = ''
  // 保存定时器引用
  timer: any
  // 判定游戏是否结束
  isLive: boolean
  constructor() {
    this.food = new Food()
    this.snake = new Snake()
    this.scorePanel = new ScorePanel(10, 2)
    this.isLive = true
    // 开始游戏
    this.init()
  }

  // 初始化
  init() {
    window.addEventListener('keydown', this.handlerKeyDown.bind(this))
  }

  handlerKeyDown(e: KeyboardEvent) {
    // 防止掉头
    const isTurnAround
      = (e.key === 'ArrowUp' && this.direction === 'ArrowDown')
      || (e.key === 'ArrowDown' && this.direction === 'ArrowUp')
      || (e.key === 'ArrowLeft' && this.direction === 'ArrowRight')
      || (e.key === 'ArrowRight' && this.direction === 'ArrowLeft')

    if (isTurnAround)
      return
    this.direction = e.key
    this.run()
  }

  run() {
    // 没有清掉警定时器
    clearTimeout(this.timer)
    let X = this.snake.X
    let Y = this.snake.Y
    if (this.direction === 'ArrowUp')
      Y -= 10

    if (this.direction === 'ArrowDown')
      Y += 10

    if (this.direction === 'ArrowLeft')
      X -= 10

    if (this.direction === 'ArrowRight')
      X += 10

    // 判断是否吃到食物
    this.checkEatOrNot(X, Y)

    try {
      this.snake.X = X
      this.snake.Y = Y
    }
    catch (error: any) {
      this.isLive = false
      throw new Error(error)
    }

    // 注意等级
    this.isLive
    && (this.timer = setTimeout(
      this.run.bind(this),
      300 - (this.scorePanel.level.value - 1) * 30,
    ))
  }

  checkEatOrNot(X: number, Y: number) {
    // 获取食物位置
    const foodx = this.food.X
    const foody = this.food.Y
    // 吃到食物，改变位置，分数加1，长度加1
    if (X === foodx && Y === foody) {
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}

onMounted(() => {
  nextTick(() => {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const control = new GameControl()
  })
})
</script>

<template>
  <!-- 创建游戏的主容器 -->
  <div id="main">
    <!-- 设置游戏的舞台 -->
    <div id="stage">
      <!-- 设置蛇 -->
      <div id="snake">
        <!-- snake内部的div 表示蛇的各部分 -->
        <div />
      </div>

      <!-- 设置食物 -->
      <div id="food">
        <!-- 添加四个小div 来设置食物的样式 -->
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>

    <!-- 设置游戏的积分牌 -->
    <div id="score-panel">
      <div>SCORE:<span id="score">0</span></div>
      <div>LEVEL:<span id="level">1</span></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./index.scss";
</style>
