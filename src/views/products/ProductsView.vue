<template>
  <section class="products flex flex-col flex-grow py-5">
    <div class="container flex flex-col flex-grow mx-auto">
      <form class="mb-5 flex justify-center">
        <input
          type="text"
          v-model="state.search"
          :disabled="state.loading"
          class="border rounded outline-none focus:border-blue-300 py-2 px-5 w-full md:w-[50%]"
          placeholder="Search Products Using Title"
        />
      </form>
      <!-- Products FlexBox -->
      <div class="relative flex flex-col flex-grow">
        <PageLoading v-if="state.loading" />
        <div class="flex flex-col justify-between flex-grow gap-2" v-else>
          <div class="flex flex-wrap flex-grow gap-6">
            <ProductCard
              v-for="(product, index) in state.computedProducts"
              :product="product"
              :key="product.id"
              :index="index"
            />
          </div>
          <Pagination
            :totalPages="state.totalPages"
            :handleClickPageNumber="state.handleClickPageNumber"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// Components
import { ProductCard, PageLoading, Pagination } from '../../components'
// Vue
import { onMounted } from 'vue'
// Storage
import { useProducts } from '../../stores/products'
const state = useProducts()
// LifeCycles
onMounted(() => state.fetchProducts())
</script>