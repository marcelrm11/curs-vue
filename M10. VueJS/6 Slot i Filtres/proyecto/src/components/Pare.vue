<template>
    <div class="container">
        <transition 
        enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <div class="gris" v-if="active"></div>
        </transition>
        <div id="imgdiv">
            <img alt="Vue logo" src="@/assets/logo.png">
        </div>
        <AnimateModal>
            <ModalBootstrap v-if="active" :numero="euros">
                <template v-slot:header>
                    <div class="modal-header">
                        <h5 class="modal-title">Euros (€) a Dólares ($)</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                            @click="deactivate()">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </template>

                <template #body>
                    <div class="modal-body text-center">
                        <h3>Cambio de Moneda</h3>
                        <input type="text" v-model="euros" placeholder="Introduce un valor en Euros"
                            class="rounded border border-secondary my-2 text-center">
                    </div>
                </template>

                <template #footer>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"
                            @click="deactivate()">Close</button>
                        <button type="button" class="btn btn-primary" @click="deactivate()">Send </button>
                    </div>
                </template>
            </ModalBootstrap>
            <div v-if="!active" class="text-center mt-5">
                <h2>Has cerrado el modal</h2>
                <button class="btn btn-info mt-5" @click="deactivate">Abrir Modal</button>
            </div>
        </AnimateModal>

    </div>
</template>

<script>
    import ModalBootstrap from './ModalBootstrap'
    import AnimateModal from './Animations/AnimateModal'

    export default {
        name: 'Pare',
        components: {
            ModalBootstrap,
            AnimateModal
        },
        data() {
            return {
                euros: '',
                active: true
            }
        },
        methods: {
            deactivate() {
                this.active = !this.active
            }
        }
    }
</script>

<style>
    ::placeholder {
        font-size: smaller;
        text-align: center;
    }

    .modal-body {
        padding-bottom: 0 !important;
    }

    .gris {
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 20;
    }

    #imgdiv {
        text-align: center;
        z-index: 10;
        position: relative;
    }
</style>