<template>
    <div class="container-modal">
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <slot name="header"></slot>
                    <slot name="body" v-bind="ChangeInput(numero)"></slot>
                    <div class="conversion text-center">
                        <p v-show="euros">El cambio de {{euros}}€ en dólares son {{euros|convert}}$.</p>
                    </div>
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalBootstrap',
        data() {
            return {
                euros: ''
            }
        },
        props: ['numero'],
        filters: {
            convert(value) {
                const exp = /^[0-9]+\.?\d{0,2}$/
                if (!exp.test(value)) {
                    return "ERROR"
                }
                return (parseFloat(value) * 1.23).toFixed(2)
            }
        },
        methods: {
            ChangeInput(value) {
                this.euros = value
            }
        },
    }
</script>

<style>
    .modal {
        display: unset !important;
        position: unset !important;
    }
    .container-modal{
        position: relative;
        z-index: 30;
    }
    .conversion{
        min-height: 40px;}
</style>