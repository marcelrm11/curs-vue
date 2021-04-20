<template>
    <div id="engloba" class="container mt-4 mx-0">
        <div class="card text-white bg-success">
            <div class="card-header">
                <h5 class="card-title m-0 font-weight-bold">
                    <slot name="title"></slot>
                </h5>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <slot name="body"></slot>
                </p>
            </div>
            <div class="card-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pelicula'
    }
</script>

<style scoped>
    #engloba {
        width: 100% !important;
    }

    .card, .card-body {
        height: 100% !important;
    }

    @media only screen and (min-width: 768px) {
        #engloba {
            width: 50% !important;
        }
    }

    @media only screen and (min-width: 1200px) {
        #engloba {
            width: 25% !important;
        }
    }

    .bg-success {
        background-color: #41B883 !important;
    }
</style>