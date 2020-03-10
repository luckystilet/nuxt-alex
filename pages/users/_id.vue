<template>
  <section>
    <h1>{{user.name}}</h1>
    <hr>
    <h3>Email: {{user.email}}</h3>
    <br>
    <h3>Phone: {{user.phone}}</h3>
    <hr>
    <h3>ID: {{$route.params.id}}</h3>
  </section>
</template>

<script>
  export default {
    // async asyncData({$axios, params}){
    //   const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
    //   return {user}
    // },

    async fetch({store}){
      if(store.getters['users/users'].length === 0){
        await store.dispatch('users/fetch')
      }
    },
    computed: {
      user(){
        return this.$store.getters['users/userById'](+this.$route.params.id)
      }
    },
    validate({params}){
      return /^\d+$/.test(params.id)
    },
  }
</script>

<style scoped>

</style>
