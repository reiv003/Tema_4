<template>
  <div class="dashboard-container">
    <div class="dashboard-components dash-todo"><TodoList /></div>
    <div class="dashboard-components dash-quiz"><QuizApp /></div>
    <div class="dashboard-components dash-slide"><SlideShowApp /></div>
    <div class="dashboard-components dash-table"><Table /></div>
    <div class="dashboard-components dash-contact"><ContactForm /></div>
  </div>
</template>


<script>
import Table from "../components/Table.vue";
import QuizApp from "../components/QuizApp.vue";
import ContactForm from "../components/ContactForm.vue";
import TodoList from "../components/TodoList.vue";
import SlideShowApp from "../components/SlideShowApp.vue";

export default {
  components: {
    QuizApp,
    Table,
    ContactForm,
    TodoList,
    SlideShowApp,
  },

  data() {
    return {};
  },
};
</script>

<style>
.dashboard-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  background: var(--body-background);
}

.dashboard-components {
  margin-top: 0.2em;
  overflow: hidden;
  margin: 0.2em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.dash-todo {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 5;
  background: var(--component-yellow);
}

.dash-quiz {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  background: var(--component-blue);
}

.dash-slide {
  grid-row-start: 3;
  grid-row-end: 5;
  grid-column-start: 2;
  grid-column-end: 3;
  background: var(--component-green);
}

.dash-table {
  grid-row-start: 5;
  grid-row-end: 7;
  grid-column-start: 1;
  grid-column-end: 3;
  background: var(--component-pink);
}

.dash-contact {
  grid-row-start: 7;
  grid-column-start: 1;
  grid-column-end: 3;
  background: var(--component-orange);
}
</style>