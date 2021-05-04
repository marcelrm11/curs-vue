<template>
    <div class="p-3">
        <div class="container mt-5">
            <UserDC :username="username" ></UserDC>
            <b-button variant="warning" @click="back()">Go Back</b-button>
        </div>
    </div>
</template>

<script>
    import UserDC from '@/components/UserDetailComponent'
 ''
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