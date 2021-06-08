<template>
  <div id="home-page" class="p-3">
    <h1>Welcome Home</h1>
    <div id="cards-box" class="d-flex justify-content-center p-3">
      <b-card title="Users consulted" tag="article" style="max-width: 20rem;" class="mb-2 mx-2 w-50">
        <div v-if="usersCount.length" class="stats d-flex flex-column">
          <b-card-text v-for="user in usersCount" :key="user.index">
            <div v-if="user.count!=0" class="d-flex justify-content-between">
              <p class="mr-4">{{user.name}}</p>
              <p>{{user.count}}</p>
            </div>
          </b-card-text>
        </div>
        <div>
          <b-card-text v-if="!usersCount.length">
            No users consulted yet.
          </b-card-text>
        </div>

      </b-card>

      <b-card title="Pictures consulted" tag="article" style="max-width: 20rem;" class="mb-2 mx-2 w-50">
        <div v-if="picturesCount.length" class="stats d-flex flex-column">
          <b-card-text v-for="picture in picturesCount" :key="picture.index">
            <div v-if="picture.count!=0" class="d-flex justify-content-between">
              <p id="pic-title">{{picture.title}}</p>
              <p>{{picture.count}}</p>
            </div>
          </b-card-text>
        </div>
        <div>
          <b-card-text v-if="!picturesCount.length">
            No pictures consulted yet.
          </b-card-text>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: 'Home',
    computed: {
      ...mapState(['usersCount', 'picturesCount'])
    },
    methods: {
      ...mapMutations(['setUsersCount', 'setPicturesCount'])
    },
    created() {
      this.setUsersCount();
      this.setPicturesCount();
    }
  }
</script>

<style lang="scss">
  .stats {
    p {
      margin-bottom: 0;
    }
  }

  #pic-title {
    text-align: left;
    font-size: smaller;
    margin-right: 1rem;
    margin-bottom: 0.75rem;
  }

  // .card-body {
  //   justify-content: flex-start !important;
  // }
</style>