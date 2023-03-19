<template>
  <header class="w-full py-4 flex justify-center gap-2 md:gap-0 md:justify-between items-center">
    <h2 class="text-sm sm:text-base md:text-2xl">All Products </h2>
    <input @input="event => todo.search = event.target.value"
      class="border md:text-base font-medium p-2 rounded-md outline-none focus:border-blue-500" type="text"
      placeholder="Search Products">
  </header>
</template>
<script setup>
import { useTodoStorage } from '../../storage/useTodoStorage';
const todo = useTodoStorage()
</script>
