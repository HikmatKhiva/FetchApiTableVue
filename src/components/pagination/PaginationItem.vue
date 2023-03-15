<template>
    <li @click="getPage(page)" :class="{ 'active': page === (pageNumber / 10) + 1 }"
        class="bg-white text-xs md:text-base cursor-pointer border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700  leading-tight py-2 px-2 md:px-3">
        {{ page }}
    </li>
</template>
<script setup>
import { defineProps} from 'vue';
const props = defineProps({
    page: {
        type: Number,
        required: true
    },
    pageNumber: {
        type: Number,
        required: true
    },
    getValue: {
        type: Function,
        required: true,
    }
})
const getPage = (value) => props.getValue(value);
</script>
<style>
li.active {
    color: #3b82f6;
    background: #3b83f637;
}
</style>