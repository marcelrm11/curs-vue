<template>
    <form>
        <AnimateForm>
            <slot name="name"></slot>
            <slot name="phone"></slot>
            <slot name="postal"></slot>
            <slot name="email"></slot>
            <slot name="password"></slot>
            <slot name="submit"></slot>
        </AnimateForm>
    </form>
</template>

<script>
    import AnimateForm from './Animations/AnimateForm'

    export default {
        name: 'FormValidation',
        components: {
            AnimateForm
        }
    }
</script>