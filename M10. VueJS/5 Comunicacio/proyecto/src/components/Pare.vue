<template>
    <div class="bg-secondary border border-success p-3">
        <h3>Component Pare</h3>
        <Fill
        v-for="item in items"
        :key="item.index"
        :counter="item">
        </Fill>
    </div>
</template>

<script>
import Fill from './Fill'

export default {
    name: 'Pare',
    components: {
        Fill
    },
    data() {
        return {
            items: [
                {name: 'item 1', counter: 0},
                {name: 'item 2', counter: 0},
                {name: 'item 3', counter: 0}
            ]
        }
    },
}
</script>