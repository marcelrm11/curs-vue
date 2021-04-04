<template>
    <div class="container">
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <slot name="header"></slot>
                    <slot name="body"></slot>
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalBootstrap'
    }
</script>

<style scoped>
    .modal {
        display:unset !important;
        position:unset !important;
    }
</style>