import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toast-notification'
import axios from 'axios'
const url = 'https://dummyjson.com/products'
export const useProducts = defineStore('products', () => {
  const products = ref(null)
  const loading = ref(false)
  const search = ref('')
  const totalPages = ref(0)
  const limit = ref(10)
  const skip = ref(0)
  const page = ref(0)
  const toast = useToast()
  // Fetch Products
  const fetchProducts = async () => {
    try {
      loading.value = true
      const res = await axios.get(url, {
        params: {
          limit: limit.value,
          skip: skip.value
        }
      })
      products.value = await res.data.products
      totalPages.value = Math.floor(res.data.total / limit.value)
      loading.value = false
    } catch (err) {
      loading.value = false
      toast.error(err.message)
    }
  }
  // Pagination Products
  const handleClickPageNumber = (number) => {
    page.value = number * 10 - 10
    skip.value = page.value
    fetchProducts()
  }
  // Delete Products
  const handleProductDelete = async (id) => {
    try {
      const { status } = await axios.delete(`${url}/${id}`, {
        method: 'DELETE'
      })
      if (status === 200) {
        products.value = products.value?.filter((product) => product.id !== id)
        toast.success('Deleted Product successfully')
      }
    } catch (err) {
      toast.error(err.message)
    }
  }
  // computedProducts
  const computedProducts = computed(() =>
    products.value?.filter((product) =>
      product.title.toLowerCase().includes(search.value.toLowerCase().trim())
    )
  )
  const computedPage = computed(() => page.value)
  return {
    fetchProducts,
    loading,
    search,
    totalPages,
    handleClickPageNumber,
    handleProductDelete,
    computedProducts,
    computedPage,
    products,
    page,
    skip
  }
})
