<template>
    <transition
        name="animate-modal" mode="out-in"
        enter-active-class="animate__animated animate__jackInTheBox"
        leave-active-class="animate__animated animate__slideOutRight">
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'AnimateModal'
}
</script>