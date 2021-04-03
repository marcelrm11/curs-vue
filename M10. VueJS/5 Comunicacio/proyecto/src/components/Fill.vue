<template>
    <div class="container border border-success my-2 p-3 w-50 bg-light">
        <h5>{{counter.name}}</h5>
        <button class="btn btn-success" @click="counter.counter++">{{counter.counter}}</button>
    </div>
</template>

<script>
export default {
    name: 'Fill',
    props: ['counter']
}
</script>