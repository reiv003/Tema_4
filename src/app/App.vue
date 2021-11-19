<template>
  <div>Hei 2</div>
  <header>
    <RouterLink :to="{ name: 'tabell' }">Go to /tabell</RouterLink>
    <br />
    <RouterLink :to="{ name: 'quiz' }">Go to /quiz</RouterLink>
    <br />
    <RouterLink :to="{ name: 'dashboard' }">Go to 3000 (dashboard)</RouterLink>
  </header>
  <div>App.vue</div>

  <RouterView />
</template>

<script>
  import ContactForm from "../components/ContactForm.vue";
  import Dashboard from "../views/Dashboard.vue";

  export default {
    components: {
      Dashboard,
      ContactForm,
    },
  };
</script>

<style>
  @import "../styles/reset.css";
  @import "../styles/variables.css";
  @import "../styles/style.css";
</style>