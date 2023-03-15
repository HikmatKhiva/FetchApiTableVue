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
        search: ''
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
            if (name === 'prev') { this.page -= 10 };
            if (name === 'next') { this.page += 10 };
            this.options.skip = this.page
            this.fetchTodo()
        },
        searchProduct(products, name) {
            return products.filter(product => product.title.toLocaleLowerCase().includes(name.trim().toLocaleLowerCase()))
        }
    }
})