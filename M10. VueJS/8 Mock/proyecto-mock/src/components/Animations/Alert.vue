<template>
    <transition  
        name="alert" tag="div"
        enter-active-class="animate__animated animate__bounceInRight">
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        name: 'Appear'
    }
</script>