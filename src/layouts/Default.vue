<template>
  <div class="layout-container">
    <header class="header">
      Vue Sprint
    </header>

    <main class="main-content">
      <slot />
    </main>

    <footer class="footer">
      © 2025 Demo Project Inc.
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1a202c;
  color: white;
  margin: 0;
}

.header {
  background-color: #2d3748;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.main-content {
  flex: 1;
  padding: 1.5rem;
}

.footer {
  background-color: #2d3748;
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
}
</style>
