<script setup>
import { onMounted, ref } from 'vue'
import { useServiceStore } from '@/stores/example'

const serviceStore = useServiceStore();
const search = ref('')
const countDatahere = serviceStore.count;
const functionName = () => {
    const payload = {
        search: search.value
    }
    serviceStore.searchData(payload)
}
onMounted(() => {
    serviceStore.getServices()
})
</script>

<template>
    <div>
        <input v-model="search" placeholder="Search services..." class="mb-4 p-2 border rounded" />
        <!-- <p>{{ serviceStore.IncrementCount }}</p> -->
        <button @click="functionName">search </button>
        <h1 class="text-2xl font-bold mb-4">Service List</h1>

        <div v-if="serviceStore.isLoading">Loading services...</div>
        <div v-else-if="serviceStore.error">Error: {{ serviceStore.error }}</div>
        <ol v-else>
            <li v-for="service in serviceStore.services" :key="service.id" class="mb-2">
                <strong style="color:red">{{ service.title }}</strong>
                <p>{{ service.body }}</p>
            </li>
        </ol>
    </div>
</template>
