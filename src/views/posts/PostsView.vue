<template>
  <section class="posts">
    <div class="container mx-auto">
      <div class="flex gap-5 md:flex-row flex-col-reverse items-start mt-5">
        <!-- Posts -->
        <div class="flex flex-col flex-grow gap-3 w-full md:w-[80%]">
          <PostCard
            v-for="(post, index) in state.computedPosts"
            :key="post.id"
            :post="post"
            :index="index"
            :filter="state.filter"
            :handleFilter="state.handleFilter"
          />
        </div>
        <!-- Tags -->
        <div class="bg-gray-100 p-3 rounded md:w-[15%] w-full">
          <h3 class="mb-3 text-xl font-medium">Tags</h3>
          <div class="flex flex-wrap gap-2">
            <p
              @click="state.handleFilter('')"
              :class="{ 'bg-green-500 text-white': state.filter === '' }"
              class="bg-gray-300 p-2 cursor-pointer rounded-full text-sm hover:bg-green-600 hover:text-white transition-all duration-200"
            >
              All
            </p>
            <p
              v-for="(tag, index) in state.tags"
              @click="state.handleFilter(tag)"
              :key="index"
              :class="{ 'bg-green-500 text-white': state.filter === tag }"
              class="bg-gray-300 p-2 cursor-pointer rounded-full text-sm hover:bg-green-600 hover:text-white transition-all duration-200"
            >
              {{ tag }}
            </p>
          </div>
        </div>
      </div>
      <Pagination :totalPages="state.totalPages" class="mt-3" />
    </div>
  </section>
</template>
<script setup>
// Components
import { PostCard, Pagination } from '../../components'
// Vue
import { onMounted } from 'vue'
// Stores
import { usePosts } from '../../stores/posts'
const state = usePosts()
// LifeCycle
onMounted(() => state.fetchPosts())
</script>