<template>
  <div>
    <h2>Count: {{ count }}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, onUnmounted, onBeforeUpdate } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

// Lifecycle Hooks
onMounted(() => {
  console.log('Component Mounted!');
})

onBeforeUpdate(() => {
  console.log('Component Before Update!')
})

onUpdated(() => {
  console.log('Component Updated!')
})

onUnmounted(() => {
  console.log('Component Unmounted!')
})
</script>
