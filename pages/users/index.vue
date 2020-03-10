<template>
  <section>
    <h1>{{pageTitle}}</h1>
    <ul>
      <li v-for="(user, i) in users" :key="i">
        <a href="#" @click.prevent="openUser(user.id)">USER {{user.name}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "index",
    // async asyncData({$axios}){
    //   const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
    //   return {users}
    // },
    async fetch({store}){
      if(store.getters['users/users'].length === 0){
        await store.dispatch('users/fetch')
      }
    },
    data: ()=>({
      pageTitle: "Users Page",
      // users: []
    }),
    computed: {
      users(){
        return this.$store.getters['users/users']
      }
    }
    // ,
    // async mounted(){
    //   this.users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    // }
    ,
    methods: {
      openUser(id){
        this.$router.push('/users/' + id)
      }
    },
  }
</script>
