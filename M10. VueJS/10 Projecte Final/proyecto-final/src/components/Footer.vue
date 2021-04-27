<template>
    <div class="footer d-flex align-items-center justify-content-between px-4">
        <p class="m-0">© Marcel Roig Medina, 2021</p>
        <p class="m-0">Barcelona Activa IT Academy</p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">
@import "@/styles/_variables";

    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: $secondary-background;
        color: $secondary-content;
        height: 4.5rem; //footer-height
    }
</style>