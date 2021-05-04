<template>
    <div>
        <p>Album {{albumId}}</p>
        <div class="container d-flex flex-wrap my-2">
            <div v-for="(picture,index) in pictures" :key="index">
                <div v-if="albumId == picture.albumId" class="d-flex flex-column justify-content-between flex-wrap m-2" id="pic-container">
                    <img :src="picture.thumbnailUrl" class="img-fluid" width="150" height="150">
                    <span>{{picture.title}}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'AlbumDC',
        props: ['albumId'],
        computed: {
            ...mapState(['pictures'])
        },
    }
</script>

<style lang="scss">
    @import '@/styles/_variables.scss';

    #pic-container {
        width: 150px;
        height: 100%;
    }
</style>