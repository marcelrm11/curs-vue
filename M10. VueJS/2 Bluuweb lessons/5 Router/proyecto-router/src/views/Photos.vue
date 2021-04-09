<template>
    <div>
        <h1>Photo Galery</h1>

        <router-link :to="{name: 'Photos', params: {id: photo}}" 
        v-for="(photo,index) in photosArray" :key="index">
            <b-button variant="outline-primary">Photo {{photo}}</b-button>
        </router-link>
        <Photo/>
        <b-button @click="home()" variant="outline-primary">Home</b-button>
        <b-button @click="anterior()" variant="outline-primary">Anterior</b-button>
        <b-button @click="siguiente()" variant="outline-primary">Siguiente</b-button>

    </div>
</template>

<script type="text/javascript" src="./../scripts/photos.js"></script>