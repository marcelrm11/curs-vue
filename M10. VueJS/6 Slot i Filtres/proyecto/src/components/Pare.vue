<template>
    <div class="container">
        <ModalBootstrap v-show="active">
            <template v-slot:header>
                <div class="modal-header">
                    <h5 class="modal-title">Euros (€) a Dólares ($)</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="deactivate()">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </template>

            <template #body>
                <div class="modal-body text-center">
                    <h3>Cambio de Moneda</h3>
                    <input type="text" v-model="euros" placeholder="Introduce un valor en Euros" class="rounded border border-secondary my-2 text-center">
                    <div class="conversion">
                        <p v-show="euros">El cambio de {{euros}}€ en dólares son {{euros|convert}}$.</p>
                    </div>
                </div>
            </template>

            <template #footer>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="deactivate()">Close</button>
                    <button type="button" class="btn btn-primary" @click="deactivate()">Send </button>
                </div>
            </template>
        </ModalBootstrap>
        <h2 v-show="!active" class="text-center">Has cerrado el modal</h2>
    </div>
</template>

<script>
    import ModalBootstrap from './ModalBootstrap'

    export default {
        name: 'Pare',
        components: {
            ModalBootstrap
        },
        data() {
            return {
                euros: '',
                active: true
            }
        },
        methods: {
            deactivate(){
                this.active = false
            }
        },
        filters: {
            convert(value){
                const exp = /^[0-9]+\.?\d{0,2}$/
                if (!exp.test(value)) {
                    return "ERROR"
                }
                return (parseFloat(value) * 1.23).toFixed(2)
            }
        }
    }
</script>

<style scoped>
    ::placeholder{
        font-size: smaller;
        text-align: center;}
    .conversion{
        min-height: 40px;}
</style>