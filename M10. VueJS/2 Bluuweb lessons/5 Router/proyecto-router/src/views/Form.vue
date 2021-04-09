<template>
    <div class="mt-5">
        <h1>Formularios</h1>

        <form action="">
            <b-row>
                <b-col md="3">
                    <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
                    <small v-if="!comprobar">Minimo 3 caracteres</small>
                </b-col>

                <b-col md="3">
                    <b-form-select v-model="select" :options="animales"></b-form-select>
                    <small v-if="select">Seleccion: {{select}}</small>
                </b-col>

                <b-col md="3">
                    <small>Selecciona un animal</small>
                    <b-form-radio-group v-model="radio" :options="animales2"></b-form-radio-group>
                    <small v-if="radio">Seleccion: {{radio}}</small>
                </b-col>

                <b-col md="3">
                    <small>Selecciona uno o más animales</small>
                    <b-form-checkbox-group v-model="checkbox" :options="animales2"></b-form-checkbox-group>
                    <small>Seleccion: {{checkbox}}</small> 
                </b-col>
            </b-row>

        </form>
    </div>
</template>

<script type="text/javascript" src="./../scripts/form.js"></script>