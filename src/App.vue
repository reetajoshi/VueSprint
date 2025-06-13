<template>
        <props 
        msg="This is a message passed by props"
        :arr="itemsArr"
        @greet="handleGreet"></props>
</template>

<script setup>
    import props from './components/propsAndEmits(3).vue';
    import {ref} from 'vue'
    const itemsArr=ref([
        {id:1,word:'Each '},
        {id:2,word:'word '},
        {id:3,word:'in '},
        {id:4,word:'this '},
        {id:5,word:'para '},
        {id:6,word:'is '},
        {id:7,word:'from '},
        {id:8,word:'an '},
        {id:9,word:'array '},
        {id:10,word:'passed '},
        {id:11,word:'through'},
        {id:12,word:'props'}])

    const handleGreet=(msg)=>{
        alert(msg)
    }
</script>

<style scoped>

</style>