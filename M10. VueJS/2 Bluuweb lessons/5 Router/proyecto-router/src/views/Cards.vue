<template>
    <div class="mt-5">
        <h1>Cards</h1>
        <b-button variant="success">Hola</b-button>
        <b-button variant="warning">Hola</b-button>
        <b-button variant="info">Hola</b-button>
        <b-button variant="danger">Hola</b-button>
        <b-button variant="primary">Hola</b-button>
        <b-button variant="dark">Hola</b-button>

        <b-row class="my-5">
            <b-col cols="12" md="4">
                <b-card img-src="https://cdn.pixabay.com/photo/2020/12/08/19/12/woman-5815354_960_720.jpg" img-top>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente nesciunt, delectus?
                        Aliquid vel eius suscipit at dolor labore autem.</p>
                    <b-button variant="success">Hola</b-button>
                </b-card>
            </b-col>

            <b-col cols="12" md="4">
                <b-card img-src="https://cdn.pixabay.com/photo/2020/10/03/17/30/bridge-5624104__340.jpg" img-top>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente nesciunt,
                        delectus? Aliquid vel eius suscipit at dolor labore autem.</p>
                    <b-button variant="success">Hola</b-button>
                </b-card>
            </b-col>

            <b-col cols="12" md="4">
                <b-card img-src="https://cdn.pixabay.com/photo/2020/12/14/17/42/students-5831655__340.jpg" img-top>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sapiente nesciunt,
                        delectus? Aliquid vel eius suscipit at dolor labore autem.</p>
                    <b-button variant="success">Hola</b-button>
                </b-card>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    export default {
        name: 'Cards'
    }
</script>