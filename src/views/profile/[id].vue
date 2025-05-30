<template>
    <UserCard name="John Doe" :age="22" :id="id" />
    <pre>{{ serviceStore.services }}</pre>
</template>

<script setup>
import UserCard from '../../components/UserCard.vue'
import { useRoute } from 'vue-router'
import { useServiceStore } from '@/stores/example'

const serviceStore = useServiceStore()

const route = useRoute()
const id = route.params.id
</script>
