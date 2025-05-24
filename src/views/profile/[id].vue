<template>
    <UserCard name="John Doe" :age="22" :id="id" />
</template>

<script setup>
import UserCard from '../../components/UserCard.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>
