<template>
  <div id="pictures-page" class="p-3">
    <h1>Albums</h1>
    <div id="albums-list" class="d-flex flex-wrap justify-content-center my-3">
      <AlbumCard v-for="(album,index) in albums" :key="index" :albumId="index+1">
        <h4>Album #{{index+1}}</h4>
      </AlbumCard>
    </div>
  </div>
</template>

<script>
  import AlbumCard from '@/components/AlbumCard'
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'Pictures',
    components: {
      AlbumCard
    },
    computed: {
      ...mapState(['pictures', 'albums'])
    },
    created() {
      this.getPictures();
    }
  }
</script>