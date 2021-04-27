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
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search" id="search-input"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit" id="search-btn">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss">
    @import "@/styles/_variables";

    #header {
        font-weight: bold;
        a.nav-link {
            color: $primary-content;
            &:hover{
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

    #search-btn {
        background-color: $primary-content;
        border-color: $primary-content;
        &:hover{
            background-color: $secondary-content;
            border-color: $secondary-content;
        }
    }
</style>