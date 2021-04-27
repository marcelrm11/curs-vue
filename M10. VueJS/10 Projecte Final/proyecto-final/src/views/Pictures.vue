<template>
  <div id="pictures-page" class="p-3">
    <h1>This is a pictures page</h1>
        <div id="albums-list"
        class="d-flex flex-wrap justify-content-center">
        <button @click="createAlbums">Pics</button>
      <!-- <AlbumCard v-for="album in albums" :key="album.id"></AlbumCard> -->
    </div>
  </div>
</template>

<script>
import AlbumCard from '@/components/AlbumCard'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'Pictures',
  components: {
    AlbumCard
  },
  computed: {
    ...mapState(['pictures'])
  },
  methods: {
    ...mapMutations(['fillPictures','createAlbums']),
    ...mapActions(['getPictures'])
  },
  mounted() {
    this.getPictures();
  }
}
</script>