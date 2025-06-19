<script setup lang="ts">
import type { VNodeRef } from 'vue'
import { nanoid } from 'nanoid'

interface TodoItem {
  id: string
  haveDone: boolean
  text: string
}

const input = ref<VNodeRef | null>(null)
const todoList = ref<TodoItem[]>([])
const todo = ref('')

onMounted(() => todoList.value = getToDoList())

// 添加事项
function addToDoItem() {
  if (todo.value) {
    const todoItem: TodoItem = {
      id: nanoid(),
      haveDone: false,
      text: todo.value,
    }
    todoList.value.push(todoItem)
    setToDoList()
    todo.value = ''
    input.value.value = ''
  }
}

// 完成事项
function doneItem(id: string) {
  todoList.value.forEach((item) => {
    if (item.id === id)
      item.haveDone = !item.haveDone
  })
  setToDoList()
}

// 删除事项
function delItem(id: string) {
  todoList.value = todoList.value.filter(item => item.id !== id)
  setToDoList()
}

function setToDoList() {
  localStorage.setItem('todolist', JSON.stringify(todoList.value))
}

function getToDoList(): TodoItem[] {
  return localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist') as string) : []
}
</script>

<template>
  <div class="body base_container">
    <h1>todos</h1>
    <form id="form" @submit.prevent="addToDoItem">
      <input
        ref="input" v-model.trim.lazy="todo" type="text" class="input" placeholder="Enter your todo"
        autocomplete="off"
      >

      <ul id="todos" class="todos">
        <li
          v-for="({ id, haveDone, text }) in todoList" :key="id" :class="{ completed: haveDone }"
          @click="doneItem(id)" @contextmenu.prevent="delItem(id)"
        >
          {{ text }}
        </li>
      </ul>
    </form>
    <small>Left click to toggle completed. <br>
      Right click to delete todo</small>
  </div>
</template>

<style scoped lang="scss">
@use './index.scss';
</style>
