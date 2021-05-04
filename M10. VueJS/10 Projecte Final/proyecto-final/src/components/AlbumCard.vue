<template>
    <div id="album-card"> 
        <div>

            <b-card id="card-element" class="m-2 py-2 px-1" body-class="centered">
                <slot></slot>
                <b-button variant="primary" :to="{name:'AlbumDetail', params:{albumId: albumId}}">See detail</b-button>
            </b-card>
                </div>

    </div>
</template>

<script>
export default {
    name: 'AlbumCard',
    props: ['albumId']
}
</script>

<style lang="scss">
.centered {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 150px;
}
#card-element {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; //#27
    border: none;
    &:hover {
        box-shadow:   rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
}
#album-card {
    width: 45%;
}

@media only screen and (min-width: 600px) {
    #album-card {
        width: 35%;
    }
}

@media only screen and (min-width: 768px) {
    #album-card {
        width: 30%;
    }
}

@media only screen and (min-width: 992px) {
    #album-card {
        width: 24%;
    }
}
@media only screen and (min-width: 1200px) {
    #album-card {
        width: 19%;
    }
}
</style>