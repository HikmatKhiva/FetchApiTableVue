import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
const url = 'https://dummyjson.com/posts'
export const usePosts = defineStore('posts', () => {
  const posts = ref(null)
  const loading = ref(false)
  const filter = ref('')
  const totalPages = ref(0)
  const limit = ref(10)
  const skip = ref(0)
  const toast = useToast()
  // Fetch Products
  const fetchPosts = async () => {
    try {
      loading.value = true
      const res = await axios.get(url, {
        params: {
          limit: limit.value,
          skip: skip.value
        }
      })
      posts.value = await res.data.posts
      totalPages.value = Math.floor(res.data.total / limit.value)
      loading.value = false
    } catch (err) {
      loading.value = false
      toast.error(err.message)
    }
  }
  // Pagination Posts
  const handleClickPageNumber = (number) => {
    skip.value = number * 10 - 10
    fetchPosts()
  }
  // Delete Posts
  const handlePostDelete = async (id) => {
    try {
      const { status } = await axios.delete(`${url}/${id}`, {
        method: 'DELETE'
      })
      if (status === 200) {
        posts.value = posts.value?.filter((p) => p.id !== id)
        toast.success('Deleted Post successfully')
      }
    } catch (err) {
      toast.error(err.message)
    }
  }
  // Computed Values
  const computedPosts = computed(() => posts.value)
  const computedPage = computed(() => skip.value)
  // Get Tags
  const tags = computed(() => [...new Set(posts.value?.flatMap((post) => post.tags))])
  const handleFilter = (value) => (filter.value = value)
  return {
    fetchPosts,
    loading,
    filter,
    totalPages,
    handleClickPageNumber,
    handlePostDelete,
    computedPosts,
    tags,
    handleFilter,
    computedPage
  }
})