<template>
  <section>
    <div class="container">
      <h1>Error 404</h1>

      <nuxt-link to="/">Go back Home</nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: "error"
  }
</script>

<style scoped>
  h1{
    color: #ff0000;
  }
  section{
    width: 600px;
    margin-top: 6rem;
  }
</style>
