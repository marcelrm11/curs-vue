<template>
    <div>
        <keep-alive>
            <component :is="currentComponent"></component>
        </keep-alive>

        <button class="btn btn-outline-info mx-2" @click="currentComponent = 'CD1'">CD1</button>
        <button class="btn btn-outline-info mx-2" @click="currentComponent = 'CD2'">CD2</button>
    </div>
</template>

<script>
import CD1 from '@/components/CD1'
import CD2 from '@/components/CD2'

export default {
    name: 'Components',
    data() {
        return {
            currentComponent: "CD1"
        }
    },
    components: {
        CD1,
        CD2
    }
}
</script>