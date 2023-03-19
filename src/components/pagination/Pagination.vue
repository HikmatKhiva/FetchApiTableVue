<template>
    <nav class="py-5 flex  justify-center md:justify-end pagination " aria-label="Page-navigation">
        <ul class="inline-flex -space-x-px">
            <li :class="{ 'hidden': pageNumber === 0 }" @click="todo.handlePageBtn('prev')"
                class="bg-white border hidden sm:block text-xs md:text-base cursor-pointer border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 ">
                Previous
            </li>
            <PaginationItem :getValue="getValue" v-for="page in props.pages" :page="page" :pageNumber="props.pageNumber"
                :key="page" />
            <li :class="{ 'hidden': pageNumber === 90 }" @click="todo.handlePageBtn('next')"
                class="bg-white cursor-pointer border text-xs md:text-base border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 ">
                Next
            </li>
        </ul>
    </nav>
</template>
<script setup>
import { defineProps } from 'vue';
import PaginationItem from './PaginationItem.vue';
import { useTodoStorage } from '../../storage/useTodoStorage';
const todo = useTodoStorage();
const props = defineProps({
    pages: {
        type: Number,
        required: true
    },
    pageNumber: {
        type: Number,
        required: true
    },
})
const getValue = (value) => { todo.handlePage(value) }
</script>
