<template>
    <div class="p-3">
        <b-button id="back-btn" @click="back()">Go Back</b-button>
        <div class="container mt-4">
            <UserDC :username="username"></UserDC>
        </div>
    </div>
</template>

<script>
    import UserDC from '@/components/UserDetailComponent'
    
    export default {
        name: 'UserDetail',
        props: ['username'],
        components: {
            UserDC
        },
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>