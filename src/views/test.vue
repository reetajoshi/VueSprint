<template></template>
<script>
export default {
    name: 'TestView',
    data() {
        return {
            message: 'This is a test view!'
        };
    },
    methods: {
        logMessage() {

            console.log(this.message, "api");
        }
    },
    mounted() {
        this.logMessage();
    }
};
</script>