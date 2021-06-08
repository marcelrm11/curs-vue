<template>
    <div id="header">
        <b-navbar toggleable="md" class="p-3 d-flex" sticky id="nav-bar">
            <b-navbar-brand id="brand" :to="{name: 'Home'}">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav id="nav-menu">
                    <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
                    <b-nav-item :to="{name: 'Pictures'}">Pictures</b-nav-item>
                    <b-nav-item :to="{name: 'Users'}">Users</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form id="search-form">
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Type a user name" id="search-input"
                            type="search" v-model="search" autocomplete="off"></b-form-input>
                    </b-nav-form>
                    <b-list-group id="search-results" v-show="search.length >0">
                        <b-list-group-item button id="name-result" v-for="(user,index) in FilteredUsers" :key="index">
                            <b-link :to="{name: 'UserDetail', params:{username: user.username}}" @click="addUser(user.name)">
                            {{user.name}}</b-link>
                        </b-list-group-item>
                    </b-list-group>
                    <!-- <p>{{search}}</p> -->
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import store from '@/store/index.js'
    export default {
        name: 'Header',
        computed: {
            ...mapGetters(['FilteredUsers']),
            search: {
                    get(){
                        return store.state.search
                    },
                    set(value){
                        store.commit('SetSearch', value)
                    }
                } 
        },
        methods: {
            ...mapMutations(['addUser'])
        },
    }
</script>

<style lang="scss">
    @import "@/styles/_variables";

    #header {
        font-weight: bold;

        a.nav-link {
            color: $primary-content;

            &:hover {
                color: $key-color;
            }
        }
    }

    #brand {
        flex-grow: 5;
        text-align: left;
    }

    #nav-bar {
        display: flex;
        justify-content: space-between;
        background-color: $secondary-background;
    }

    #nav-collapse {
        display: flex;
        justify-content: space-between;
        flex-grow: 4;
    }

    #nav-menu {
        a.router-link-exact-active {
            color: $key-color;
        }
    }

    #search-form {
        display: flex;
        flex-direction: row;

        input {
            margin-right: 0.5rem;
        }
    }

    #search-input {
        background-color: $primary-background;
        color: $tertiary-content;
        border-color: $tertiary-content;
    }

    #search-results {
        position: absolute;
        top: 50px;
        right: 25px;
    }

    #name-result {
        text-align: left;
        a{
            text-decoration: none;
            color: $primary-content
        }
        
    }
</style>