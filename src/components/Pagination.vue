<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav aria-label="products page navigation" class="flex flex-wrap justify-end">
    <ul class="flex flex-wrap -space-x-px md:text-sm text-xs">
      <li v-for="count in totalPages" class="page_btn" @click="handleClickPageNumber(count)" :key="count">
        <a
          href="#"
          :class="{ 'bg-gray-300': state.computedPage / 10 + 1 === count }"
          class="flex  items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:text-white"
          >{{ count }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useProducts } from '../stores/products'
const state = useProducts()
defineProps({
  totalPages: {
    type: Number,
    default: 0
  },
  handleClickPageNumber: {
    type: Function,
    default: () => {}
  }
})
</script>
