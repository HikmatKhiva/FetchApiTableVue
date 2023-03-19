import { defineStore } from 'pinia';
import axios from 'axios';
import { toast } from 'vue3-toastify'
export const useTodoStorage = defineStore('todo', {
    state: () => ({
        url: 'https://dummyjson.com/products',
        todo: [],
        loading: false,
        clicked: false,
        options: {
            limit: 10,
            skip: 0,
            totalCounts: 0,
        },
        page: 0,
        search: '',
        selectedItem: null,
        selectedItemIndex: null
    }),
    actions: {
        async fetchTodo() {
            try {
                this.loading = true
                const res = await axios.get(this.url, {
                    params: {
                        limit: this.options.limit,
                        skip: this.options.skip
                    }
                })
                this.todo = res.data.products
                this.options.totalCounts = res.data.total / this.options.limit
                this.loading = false
            } catch (error) { toast.error(error.message || 'something went wrong') }
        },
        async deleteTodo(id) {
            try {
                this.clicked = true
                await axios.delete(this.url + '/' + id)
                this.todo = this.todo.filter(item => item.id !== id)
                toast.success(`Todo deleted ${id}`)
                this.clicked = false
            } catch (error) { toast.error(error.message || 'something went wrong') }
        },
        handleSearch(newValue) { this.search = newValue },
        handlePage(number) {
            this.page = (number * 10) - 10
            this.options.skip = this.page
            this.fetchTodo()
        },
        handlePageBtn(name) {
            name === 'prev' ? this.page -= 10 : this.page += 10
            this.options.skip = this.page
            this.fetchTodo()
        },
        searchProduct(products, name) {
            return products.filter(product => product.title.toLocaleLowerCase().includes(name.trim().toLocaleLowerCase()))
        },
        handleSelectItem(item, index) {
            this.selectedItem = item
            this.selectedItemIndex = index
        },
        clearSelectItem() {
            this.selectedItem = null
            this.selectedItemIndex = null
        },
        async updateTodo(id, title, price) {
            if (!title.length) return toast.error("Title mustn't empty")
            if (!price) return toast.error("Price mustn't empty")
            if (!id) return toast.error("Id mustn't empty")

            try {
                this.clicked = true
                await fetch(this.url + '/' + id, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        title,
                        price
                    })
                })
                this.clearSelectItem()
                this.clicked = false
            } catch (error) { toast.error(error.message || 'Something went wrong') }
        }
    }
})