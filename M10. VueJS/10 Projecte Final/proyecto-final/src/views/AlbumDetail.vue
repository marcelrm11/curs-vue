<template>
    <div class="p-3">
        <div class="container mt-5">
            <AlbumDC :albumId="albumId"></AlbumDC>
            <b-button variant="warning" @click="back()">Go Back</b-button>
        </div>
    </div>
</template>

<script>
    import AlbumDC from '@/components/AlbumDetailComponent'

    export default {
        name: 'AlbumDetail',
        props: ['albumId'],
        components: {
            AlbumDC
        },
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>