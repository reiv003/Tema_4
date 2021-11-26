<template>
  <div class="dashboard-components"><Header /></div>
  <div class="dashboard-components"><QuizApp /></div>
  <div class="dashboard-components"><Table /></div>
  <div class="dashboard-components"><ContactForm /></div>
</template>


<script>
  import Header from "../components/Header.vue";
  import Table from "../components/Table.vue";
  import QuizApp from "../components/QuizApp.vue"; //  I dont know why this is an error
  import ContactForm from "../components/ContactForm.vue";

  export default {
    components: {
      Header,
      QuizApp,
      Table,
      ContactForm,
    },

    data() {
      return {};
    },
  };
</script>

<style>
  .dashboard-components {
    margin-top: 2em;
  }

  .dashboard-components .contact-form {
    max-width: 300px;
  }

  .dashboard-components .quiz-form {
    max-width: 300px;
  }
</style>