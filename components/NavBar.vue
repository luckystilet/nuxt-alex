<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="#" class="navbar-brand">Nuxt SSR</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link" active-class="active" exact>Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" class="nav-link" active-class="active" no-prefetch>About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/users" class="nav-link" active-class="active" no-prefetch>Users</nuxt-link>
          </li>
          <li class="nav-item" v-if="!hasToken">
            <nuxt-link to="/login" class="nav-link" active-class="active" no-prefetch>Login</nuxt-link>
          </li>
          <li class="nav-item" v-else>
            <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    computed: {
    hasToken(){
      return this.$store.getters.hasToken
  }
    },
    methods: {
      logout(){
        this.$store.dispatch('logout')
        this.$router.push('/login')
      }
    },
  }
</script>

<style scoped>

</style>
