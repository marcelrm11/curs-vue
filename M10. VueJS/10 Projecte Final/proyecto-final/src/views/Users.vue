<template>
  <div id="users-page" class="p-3">
    <h1>Users</h1>
    <div id="users-list" 
    class="d-flex flex-wrap justify-content-center my-3">
      <UserCard v-for="user in users" :key="user.id"
      :user="user"></UserCard>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'Users',
  components: {
    UserCard
  },
  computed: {
    ...mapState(['users'])
  },
  methods: {
    ...mapActions(['getUsers']),
    ...mapMutations(['fillUsers'])
  },
  mounted() {
    this.getUsers();
  }
}
</script>