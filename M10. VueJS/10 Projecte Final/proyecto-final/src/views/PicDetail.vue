<template>
    <div class="py-3">
        <b-button id="back-btn" @click="back()">Go Back</b-button>
        <div class="d-flex justify-content-center">
            <div v-for="(picture,index) in pictures" :key="index" class="my-2">
                <b-card overlay v-if="picId == picture.id" :img-src="picture.url" img-bottom class="m-2" id="pic-detail">
                    <b-card-body class="p-0">{{picture.title}}</b-card-body>
                </b-card>
            </div>
        </div>

    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'PicDetail',
        props: ['picId'],
        computed: {
            ...mapState(['pictures'])
        },
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss">
    #pic-detail {
        width: 600px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; //#27
    }
</style>