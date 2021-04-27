<template>
  <div id="home-page" class="p-3">
    <h1>Welcome Home</h1>
    <div id="cards-box" class="d-flex justify-content-center p-3">
      <b-card title="Users consulted" tag="article"
        style="max-width: 20rem;" class="mb-2 mx-2">
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
      </b-card>

      <b-card title="Pictures consulted" tag="article"
        style="max-width: 20rem;" class="mb-2 mx-2">
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>