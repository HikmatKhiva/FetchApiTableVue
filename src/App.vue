<template>
  <div class="container mx-auto">
    <Loading v-if="todo.loading" />
    <Header />
    <Table :data="todo.searchProduct(todo.todo, todo.search)" />
    <Pagination :pages="todo.options.totalCounts" :pageNumber="todo.page" />
  </div>
  <ModalContent  :selectedItem="todo.selectedItem" />
</template>
<script setup>
import { Header, Table, Pagination,Loading } from './components/export';
import { useTodoStorage } from './storage/useTodoStorage';
import ModalContent from './components/modal/ModalContent.vue';
const todo = useTodoStorage()
todo.fetchTodo()
</script>
<style scoped></style>
