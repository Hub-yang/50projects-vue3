<script setup>
import { nanoid } from 'nanoid'

const input = ref()
const todoList = ref([])
const todo = ref('')

onMounted(() => {
  todoList.value = JSON.parse(getToDoList()) || []
})

// 添加事项
function addToDoItem() {
  if (todo.value) {
    const todoItem = reactive({
      id: nanoid(),
      haveDone: false,
      text: todo.value,
    })
    todoList.value.push(todoItem)
    setToDoList()
    todo.value = ''
    input.value.value = ''
  }
}

// 完成事项
function doneItem(id) {
  todoList.value.forEach((item) => {
    if (item.id === id)
      item.haveDone = !item.haveDone
  })
  setToDoList()
}

// 删除事项
function delItem(id) {
  todoList.value = todoList.value.filter(item => item.id !== id)
  setToDoList()
}

function setToDoList() {
  localStorage.setItem('todolist', JSON.stringify(todoList.value))
}

function getToDoList() {
  return localStorage.getItem('todolist')
}
</script>

<template>
  <div class="body">
    <h1>todos</h1>
    <form id="form" @submit.prevent="addToDoItem">
      <input
        ref="input" v-model.trim.lazy="todo" type="text" class="input" placeholder="Enter your todo"
        autocomplete="off"
      >

      <ul id="todos" class="todos">
        <li
          v-for="todoItem in todoList" :key="todoItem.id" :class="[todoItem.haveDone ? 'completed' : '']"
          @click="doneItem(todoItem.id)" @contextmenu.prevent="delItem(todoItem.id)"
        >
          {{ todoItem.text }}
        </li>
      </ul>
    </form>
    <small>Left click to toggle completed. <br>
      Right click to delete todo</small>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
