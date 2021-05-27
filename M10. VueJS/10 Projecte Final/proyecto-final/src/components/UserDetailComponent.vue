<template>
    <div>
        <div class="container d-flex justify-content-center my-2" v-for="(user,index) in users" :key="index">
            <b-card v-if="username == user.username" border-variant="primary" header-bg-variant="primary"
                header-text-variant="white" class="w-50">
                <template #header>
                    <h4 id="user-dc-header" class="mb-0 p-3">{{user.name}}</h4>
                </template>
                
                <b-list-group flush id="user-dc-body" class="p-3">
                    <b-list-group-item>
                        <span class="card-category">Username: </span> {{user.username}}</b-list-group-item>
                    <b-list-group-item>
                        <span class="card-category">Email:</span> {{user.email}}</b-list-group-item>
                    <b-list-group-item v-b-toggle="'user-address'" @click="address=!address">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="card-category">Address:</span>
                            <b-icon-chevron-down v-if="!address"></b-icon-chevron-down>
                            <b-icon-chevron-up v-if="address"></b-icon-chevron-up>
                        </div>
                        <b-collapse id="user-address">
                            <span>{{user.address.street}} Street</span><br>
                            <span>{{user.address.suite}}</span><br>
                            <span>{{user.address.city}}</span><br>
                            <span>{{user.address.zipcode}}</span>
                        </b-collapse>
                    </b-list-group-item>
                    <b-list-group-item>
                        <span class="card-category">Phone:</span> {{user.phone}}</b-list-group-item>
                    <b-list-group-item>
                        <span class="card-category">Website:</span> {{user.website}}</b-list-group-item>
                    <b-list-group-item v-b-toggle="'user-company'" @click="company=!company">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="card-category">Company:</span>
                            <b-icon-chevron-down v-if="!company"></b-icon-chevron-down>
                            <b-icon-chevron-up v-if="company"></b-icon-chevron-up>
                        </div>
                        <b-collapse id="user-company">
                            <span>Name: {{user.company.name}}</span><br>
                            <span id="company-phrase">{{user.company.catchPhrase}}</span><br>
                            <span id="company-bs">{{user.company.bs}}</span><br>
                        </b-collapse>
                    </b-list-group-item>
                </b-list-group>
            </b-card>
        </div>
    </div>

</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'UserDC',
        data() {
            return {
                address: false,
                company: false
            }
        },
        props: ['username'],
        computed: {
            ...mapState(['users'])
        },
    }
</script>

<style lang="scss">
@import '@/styles/_variables.scss';

    #user-dc-header {
        text-align: center;
    }

    #user-dc-body {
        align-items: flex-start;
        text-align: left;
    }

    .list-group-item {
        width: 100%;
    }

    .card-category {
        font-weight: bold;
    }

    #company-{
        &phrase{
            font-style: italic;
            font-size: 0.9rem;
        }
        &bs{
            font-family: $handWritten;
        }
    }
</style>