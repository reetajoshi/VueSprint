<template>
    <div class="card">
        <h2>{{ name }}</h2>
        <p>Age: {{ age }}</p>
        <p>ID: {{ id }}</p>
    </div>
</template>

<script setup>
defineProps(['name', 'age', 'id'])
</script>

<style scoped>
.card {
    padding: 10px;
    border: 1px solid #ccc;
    margin: 5px;
}
</style>
