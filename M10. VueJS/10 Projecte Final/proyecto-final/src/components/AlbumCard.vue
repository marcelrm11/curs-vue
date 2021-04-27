<template>
    <div id="album-card"> 
        <div>
            <b-card title="Card Title" tag="article" style="max-width: 20rem;" class="mb-2"> <!-- aviam com fas el title dinamic -->

                <b-button href="#" variant="primary" :to="{name: 'AlbumDetail'}">See detail</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AlbumCard'
}
</script>