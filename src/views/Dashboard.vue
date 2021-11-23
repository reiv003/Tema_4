<template>
  <div>Her er dashboardet</div>
  <div class="dashboard-components"><Header /></div>
  <div class="dashboard-components"><ContactForm /></div>
  <div class="dashboard-components"><QuizApp /></div>
</template>


<script>
import Header from "../components/Header.vue";

import ContactForm from "../components/ContactForm.vue";
import QuizApp from "../components/QuisApp.vue";

export default {
  components: {
    Header,
    ContactForm,
    QuizApp,
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

.dashboard-components .quiz-form {
  max-width: 300px;
}
</style>