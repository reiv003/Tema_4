<template>
  <div>Her er dashboardet</div>
  <div class="dashboard-components"><ContactForm /></div>
  <div class="dashboard-components"><Header /></div>
</template>


<script>
import ContactForm from "../components/ContactForm.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    ContactForm,
    Header,
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
</style>