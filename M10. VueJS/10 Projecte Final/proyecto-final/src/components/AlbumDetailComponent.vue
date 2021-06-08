<template>
    <div class="mt-3">
        <h2>Album #{{albumId}}</h2>
        <div class="container d-flex flex-wrap my-2">
            <div v-for="(picture,index) in pictures" :key="index" class="my-2">
                <b-link id="pic-container" :to="{name: 'PicDetail', params:{picId: picture.id}}" @click="addPicture(picture.title)">
                    <b-card v-if="albumId == picture.albumId" :img-src="picture.thumbnailUrl" img-top class="m-2"
                        id="pic-card">
                        <b-card-body class="p-0">{{picture.title}}</b-card-body>
                    </b-card>
                </b-link>
            </div>
        </div>
    </div>

</template>

<script>
    import {
      mapMutations,
        mapState
    } from 'vuex'
    export default {
        name: 'AlbumDC',
        props: ['albumId'],
        computed: {
            ...mapState(['pictures'])
        },
        methods: {
        ...mapMutations(['addPicture'])
        },
    }
</script>

<style lang="scss">
    @import '@/styles/_variables.scss';

    #pic-card {
        width: 150px;
        height: 100%;
        font-size: 0.7rem;
        text-align: left;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; //#27
        border: none;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; //#28?
        }
    }
    #pic-container {
        text-decoration: none;
        color: $primary-content;
    }
</style>