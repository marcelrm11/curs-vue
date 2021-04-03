<template>
    <div>
        <h3>Component Pare</h3>
        <Fill
        v-for="item in items"
        :key="item.index">
        {{item}}
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
                'item 1',
                'item 2',
                'item 3'
            ]
        }
    },
}
</script>