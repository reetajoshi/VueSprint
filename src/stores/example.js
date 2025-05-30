import { defineStore } from 'pinia'
import { fetchServices } from '@/services/example'

export const useServiceStore = defineStore('service', {
  state: () => ({
    services: [],
    isLoading: false,
    error: null,
    count: 0,
    searchQuery: ""
  }),
  actions: {
    searchData(data) {
      this.searchQuery = data
    },
    incrementCount() {
      this.count += 1
    },
    async getServices() {
      this.isLoading = true
      this.error = null
      try {
        this.services = await fetchServices()
      } catch (err) {
        this.error = err.message
      } finally {
        this.isLoading = false
      }
    }
  },
  getters: {
    IncrementCount: (state) => {
      return state.count * 2;
    }
  }
})
