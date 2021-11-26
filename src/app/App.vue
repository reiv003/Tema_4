<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
  import ContactForm from "../components/ContactForm.vue";
  import Dashboard from "../views/Dashboard.vue";
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";

  export default {
    components: {
      Dashboard,
      ContactForm,
      Header,
      Footer,
    },
  };
</script>

<style>
  @import "../styles/reset.css";
  @import "../styles/variables.css";
  @import "../styles/style.css";
</style>