<template>
    <div class="p-3">
        <div class="container">
            <b-button id="back-btn" @click="back()">Go Back</b-button>
            <AlbumDC :albumId="albumId"></AlbumDC>
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