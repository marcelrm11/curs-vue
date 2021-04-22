<template>
    <transition-group appear
        name="appear" tag="div" class="container d-flex flex-wrap px-0"
        appear-active-class="animate__animated animate__bounceInUp"
        leave-active-class="animate__animated animate__flipOutY">
        <slot></slot>
    </transition-group>
</template>

<script>
    export default {
        name: 'Appear'
    }
</script>