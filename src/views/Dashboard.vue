<template>
  <div class="dashboard-components"><Header /></div>
  <div class="dashboard-components"><QuizApp /></div>
  <div class="dashboard-components"><Table /></div>
  <div class="dashboard-components"><ContactForm /></div>
  <div class="dashboard-components"><TodoList /></div>
  <div class="dashboard-components"><Slide-show /></div>
</template>


<script>
import Table from "../components/Table.vue";
import QuizApp from "../components/QuizApp.vue";
import ContactForm from "../components/ContactForm.vue";
import TodoList from "../components/TodoList.vue";
import SlideShow from "../components/Slide-show.vue";

export default {
  components: {
    QuizApp,
    Table,
    ContactForm,
    TodoList,
    SlideShow,
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