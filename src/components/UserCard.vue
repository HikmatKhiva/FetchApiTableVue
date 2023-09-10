<template>
  <!--User Card -->
  <figure
    v-motion="fadeCard(index * 0.2)"
    class="product__card border self-start rounded-md relative"
  >
    <h5 class="absolute bg-blue-500 right-0 text-xs p-2 rounded-bl text-white capitalize">
      {{ user.gender }}
    </h5>
    <img class="w-full h-56 object-cover rounded-full" :src="user.image" :alt="user.firstName" />
    <figcaption class="h-[150px] p-2 pt-5 flex flex-col gap-2">
      <div class="flex justify-between gap-2">
        <p class="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap">
          FirstName:{{ user.firstName }}
        </p>
        <p class="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap">
          LastName:{{ user.lastName }}
        </p>
      </div>
      <div class="flex justify-between gap-2">
        <p class="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap">
          Email:{{ user.email }}
        </p>
        <p class="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap">
          Phone:{{ user.phone }}
        </p>
      </div>

      <div class="flex justify-between gap-2">
        <p class="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap">Age:{{ user.age }}</p>
        <p class="w-[50%] overflow-hidden text-ellipsis whitespace-nowrap">
          UserName:{{ user.username }}
        </p>
      </div>
      <div class="flex flex-col absolute top-2 gap-2">
        <router-link
          class="bg-green-500 p-2 px-3 text-xs text-white rounded hover:bg-green-600 transition-all duration-300"
          :to="'/user/' + user.id"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </router-link>
        <button
          @click="state.handleUserDelete(user.id)"
          type="button"
          class="bg-red-500 p-2 px-3 text-xs text-white rounded hover:bg-red-600 transition-all duration-300"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </figcaption>
  </figure>
</template>
<script setup>
import { useUsers } from '../storage/users'
import { fadeCard } from '../utils/motion'
const state = useUsers()
defineProps({
  user: {
    type: Object
  },
  index: {
    type: Number
  }
})
</script>
