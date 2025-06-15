<template>
    <header class="text-center p-2">
        <slot name="header"></slot>
    </header>
    
    <main class="text-center">
        <slot></slot>
    </main>
    
    <footer class="text-center p-4">
        <slot name="footer"></slot>
    </footer>
</template>

<style scoped>
    header,footer{
        background-color: #35495e;
        color:white;
        height:90px;
    }
</style>