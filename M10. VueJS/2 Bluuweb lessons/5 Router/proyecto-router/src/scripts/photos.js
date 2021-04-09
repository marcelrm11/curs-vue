import Photo from './../components/Photo'

export default {
    name: 'Photos',
    components: {
        Photo
    },
    data() {
        return {
            photosArray: [1,2,3]
        }
    },
    methods: {
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1)
        },
        siguiente(){
            this.$router.go(1)
        }
    },
}