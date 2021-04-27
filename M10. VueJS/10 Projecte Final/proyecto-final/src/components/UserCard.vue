<template>
    <div id="user-card" class="m-2">
        <b-card id="actual-card" :title="user.name" :sub-title="user.username" tag="article" class="mb-2">
            <b-button variant="primary" :to="{name: 'UserDetail', params:{username: username}}" >See detail</b-button>
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
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>