<template>
    <tr>
        <td class="p-2 text-center text-xs md:text-base w-14">
            {{ item.id }}
        </td>
        <td class="p-2 text-center text-base w-20">
            <img class="rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 md:h-28 object-cover md:object-contain"
                :src="item.thumbnail" :alt="item.title">
        </td>
        <td class="p-2 text-center text-xs md:text-base">
            {{ item.title }}
        </td>
        <td class="p-2 text-center text-xs md:text-base">
            <span class="font-medium text-green-500">${{ item.price }}</span>
        </td>
        <td class="text-center md:py-4 text-base flex flex-wrap p-2 gap-2 md:gap-4 justify-center md:h-20">
            <button @click="handleSelectItem(item, index)"
                class="p-1 px-2 md:p-2 md:px-3 rounded hover:bg-blue-600 bg-blue-500 text-white">
                <i class="fa-sharp fa-solid fa-pen"></i>
            </button>
            <button :disabled="clicked" @click="deleteApi(item.id)"
                class="p-1 px-2 md:p-2 md:px-3 rounded hover:bg-red-600 bg-red-500 text-white">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
    </tr>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    item: {
        type: Object,
        required: true
    },
    clicked: {
        type: Boolean
    },
    deleteApi: {
        type: Function,
    },
    handleSelectItem: {
        type: Function
    },
    index: {
        type: Number
    }
})
</script>
