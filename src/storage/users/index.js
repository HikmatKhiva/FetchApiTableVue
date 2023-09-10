import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
const url = 'https://dummyjson.com/users'
export const useUsers = defineStore('users', () => {
  const users = ref(null)
  const loading = ref(false)
  const search = ref('')
  const totalPages = ref(0)
  const limit = ref(10)
  const skip = ref(0)
  const toast = useToast()
  // Fetch Users
  const fetchUsers = async () => {
    try {
      loading.value = true
      const res = await axios.get(url, {
        params: {
          limit: limit.value,
          skip: skip.value
        }
      })
      users.value = await res.data.users
      totalPages.value = Math.floor(res.data.total / limit.value)
      loading.value = false
    } catch (err) {
      loading.value = false
      toast.error(err.message)
    }
  }
  // Handle Pagination
  const handleClickPageNumber = (number) => {
    skip.value = number * 10 - 10
    fetchUsers()
  }
  // Handle Delete user
  const handleUserDelete = async (id) => {
    try {
      const { status } = await axios.delete(`${url}/${id}`, {
        method: 'DELETE'
      })
      if (status === 200) {
        users.value = users.value?.filter((user) => user.id !== id)
        toast.success('Deleted User successfully')
      }
    } catch (err) {
      toast.error(err.message)
    }
  }
  // Computed Properties
  const computedUsers = computed(() =>
    users.value?.filter((user) =>
      user.firstName.toLowerCase().includes(search.value.toLowerCase().trim())
    )
  )
  const computedPage = computed(() => skip.value)
  return {
    computedUsers,
    fetchUsers,
    loading,
    totalPages,
    handleClickPageNumber,
    search,
    handleUserDelete,
    computedPage
  }
})