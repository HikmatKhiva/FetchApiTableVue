<template>
    <table class="table-auto w-full">
        <TableHead />
        <tbody class="text-sm divide-y  divide-gray-100">
            <TableItem :clicked="todo.clicked" :handleSelectItem="todo.handleSelectItem" :deleteApi="todo.deleteTodo"
                v-for="(item, index) in data" :index="index" :item="item" :key="item.id" />
        </tbody>
    </table>
</template>
<script setup>
import { defineProps } from 'vue';
import { useTodoStorage } from '../../storage/useTodoStorage';
import TableItem from './TableItem.vue';
import TableHead from './TableHead.vue';
const todo = useTodoStorage()
const props = defineProps({
    data: {
        type: Object,
    },
})
</script>