<template>
    <teleport to=".modal">
        <dialog @click.self="todo.clearSelectItem"
            class="main-modal fixed w-screen h-screen inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
            v-if="selectedItem">
            <div class="border modal-container bg-white w-11/12 md:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div class="modal-content py-4 text-left px-6">
                    <!--Title-->
                    <div class="flex justify-between items-center pb-3">
                        <p class="text-2xl font-bold">Update Product</p>
                        <div @click="todo.clearSelectItem" class="modal-close cursor-pointer  z-50">
                            <svg class="fill-current md:text-2xl text-red-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                viewBox="0 0 18 18">
                                <path
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <!--Body-->
                    <div class="my-5">
                        <div class=" flex gap-5">
                            <input type="text" class="border rounded-md shadow focus outline-none px-3 py-1 flex-grow" :placeholder="selectedItem.title">
                            <input type="text" class="border rounded-md shadow focus outline-none px-3 py-1 flex-grow" :placeholder="selectedItem.price +'$'">
                        </div>

                    </div>
                    <!--Footer-->
                    <div class="flex justify-end pt-2">
                        <button
                        disabled
                            class="focus:outline-none px-4 bg-green-500 p-3 ml-3 rounded-lg text-white hover:bg-green-600">save</button>
                    </div>
                </div>
            </div>
        </dialog>
    </teleport>
</template>

<script setup>
import { defineProps } from 'vue';
import { useTodoStorage } from '../../storage/useTodoStorage';
const todo = useTodoStorage()
const props = defineProps({
    selectedItem: {
        type: Object
    },
    
})
</script>

<style scoped>
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
}

.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
}

.fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style>