<template>
  <section class="users flex flex-col flex-grow py-5">
    <div class="container flex flex-col flex-grow mx-auto">
      <form class="mb-5 flex justify-center">
        <input
          type="text"
          :disabled="state.loading"
          v-model="state.search"
          class="border rounded outline-none focus:border-blue-300 py-2 px-5 w-full md:w-[50%]"
          placeholder="Search Users Using FirstName"
        />
      </form>
      <!-- Users FlexBox -->
      <div class="relative flex flex-col flex-grow">
        <PageLoading v-if="state.loading" />
        <div v-else class="flex flex-col flex-grow justify-between gap-2">
          <div class="flex flex-wrap gap-6">
            <UserCard
              v-for="(user, index) in state.computedUsers"
              :key="user.id"
              :user="user"
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
import { UserCard, PageLoading, Pagination } from '../../components'
// Vue
import { onMounted } from 'vue'
// Storage
import { useUsers } from '../../stores/users'
const state = useUsers()
// LifeCycles
onMounted(() => state.fetchUsers())
</script>
