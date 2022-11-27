<template>
  <div class="body">
    <h1>todos</h1>
    <form id="form" @submit.prevent="addToDoItem">
      <input type="text" class="input" placeholder="Enter your todo" autocomplete="off" ref="input"
        v-model.trim.lazy="todo" />

      <ul class="todos" id="todos">
        <li :class="[todo.haveDone ? 'completed' : '']" v-for="todo in todoList" :key="todo.id"
          @click="doneItem(todo.id)" @contextmenu.prevent="delItem(todo.id)">{{ todo.text }}
        </li>
      </ul>
    </form>
    <small>Left click to toggle completed. <br />
      Right click to delete todo</small>
  </div>
</template>

<script setup>
import { nanoid } from 'nanoid'
const input = ref()
const todoList = ref([])
const todo = ref("")

onMounted(() => {
  todoList.value = JSON.parse(getToDoList()) || []
})

// 添加事项
const addToDoItem = (e) => {
  if (todo.value) {
    let todoItem = reactive({
      id: nanoid(),
      haveDone: false,
      text: todo.value
    })
    todoList.value.push(todoItem)
    setToDoList()
    todo.value = ""
    input.value.value = ""
  }
}

// 完成事项
const doneItem = (id) => {
  todoList.value.forEach(item => {
    if (item.id === id) {
      item.haveDone = !item.haveDone
    }
  })
  setToDoList()
}

// 删除事项
const delItem = (id) => {
  todoList.value = todoList.value.filter(item => item.id != id)
  setToDoList()
}

const setToDoList = () => {
  localStorage.setItem("todolist", JSON.stringify(todoList.value))
}

const getToDoList = () => {
  return localStorage.getItem("todolist")
}
</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
