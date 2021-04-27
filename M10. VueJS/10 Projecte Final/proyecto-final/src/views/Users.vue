<template>
  <div id="users-page" class="p-3 d-flex justify-content-center flex-column">
    <h1>This is a users page</h1>
    <div id="users-list" 
    class="d-flex flex-wrap justify-content-center">
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

<style lang="scss">

/*   #users-list::after {
    content: "";
    flex-grow: 1;
} */

</style>