<template>
    <div class="container mt-5">
        <h1>Hi, I am {{$route.params.name}}!</h1>
        <b-button variant="warning" @click="back()">Go Back</b-button>
    </div>
</template>

<script>
    export default {
        name: 'Client',
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>