<template>
    <div id="user-card" class="m-2">
        <b-card id="actual-card" :title="user.name" :sub-title="user.username" tag="article" class="mb-2">
            <b-button variant="primary"
            :to="{name:'UserDetail', params:{username: user.username}}"
            >See detail</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props: ['user']
}
</script>

<style lang="scss">

#user-card {
    width: 75%;
}

@media only screen and (min-width: 501px) {
    #user-card {
        width: 44%;
    }
}

@media only screen and (min-width: 768px) {
    #user-card {
        width: 31%;
    }
}

@media only screen and (min-width: 1200px) {
    #user-card {
        width: 22%;
    }
}

#actual-card {
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; //#27
    border: none;
    &:hover {
        box-shadow:   rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>