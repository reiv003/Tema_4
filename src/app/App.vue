<template>
  <div>Hei 2</div>

  <RouterView />
</template>

<script>
  import ContactForm from "../components/ContactForm.vue";

  export default {
    components: {
      ContactForm,
    },
  };
</script>

<style>
  @import "../styles/reset.css";
  @import "../styles/variables.css";
  @import "../styles/style.css";
</style>