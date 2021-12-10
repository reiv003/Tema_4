<template>
  <div class="dashboard-container">
    <div class="dashboard-components dash-todo"><TodoList /></div>
    <div class="dashboard-components dash-quiz"><QuizApp /></div>
    <div class="dashboard-components dash-slide"><SlideShowApp /></div>
    <div class="dashboard-components dash-table">
      <Table />
    </div>
    <div class="dashboard-components dash-contact">
      <button @click="active = !active">Kontakt oss</button>
      <div v-if="active" class="contact__content"><ContactForm /></div>
    </div>
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
    return {
      active: false,
    };
  },
};
</script>

<style>
.dashboard-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-auto-columns: 200px;
}

.dashboard-components {
  margin-top: 0.2em;
  max-width: 500px;
  margin: 0.2em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 0.4em;
  /* overflow: scroll; */
  border: 5px white solid;
}

.dash-todo {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 5;
  background: var(--component-blue);
}

.dash-quiz {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  background: var(--component-yellow);
}

.dash-quiz .quiz-body__box {
  height: 100%;
}

.dash-slide {
  grid-row-start: 3;
  grid-row-end: 5;
  grid-column-start: 2;
  grid-column-end: 3;
  background: var(--component-orange);
}

.dash-todo .todo-box {
  /* background-color: aqua; */
  width: 50%;
}

.dash-slide .slideshow-container {
  width: 100%;
  height: 100%;
}

.dash-slide img {
  max-height: 200px;
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
  background: var(--component-green);
}
</style>