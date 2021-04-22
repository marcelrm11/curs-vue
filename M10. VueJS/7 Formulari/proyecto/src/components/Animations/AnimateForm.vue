<template>
    <transition-group appear
        name="animate-form" tag="div"
        appear-active-class="animate__animated animate__lightSpeedInRight">
        <slot></slot>
    </transition-group>
</template>

<script>
export default {
    name: 'AnimateForm'
}
</script>