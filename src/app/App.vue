<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
  import Header from "../components/Header.vue";
  import Dashboard from "../views/Dashboard.vue";
  import Footer from "../components/Footer.vue";

  export default {
    components: {
      Header,
      Dashboard,
      Footer,
    },
  };
</script>

<style>
  @import "../styles/reset.css";
  @import "../styles/variables.css";
  @import "../styles/style.css";
</style>