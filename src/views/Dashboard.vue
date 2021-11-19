<template>
  <div>Her er dashboardet</div>
  <div class="dashboard-components"><ContactForm /></div>
</template>


<script>
  import ContactForm from "../components/ContactForm.vue";

  export default {
    components: {
      ContactForm,
    },

    data() {
      return {};
    },
  };
</script>

<style>
  .dashboard-components .contact-form {
    max-width: 300px;
  }

  header .router-link-active {
    background: yellow;
  }
</style>