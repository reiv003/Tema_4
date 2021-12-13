<template>
<Header title="S-App" color="var(--header-background)"/> 
  <div class="dashboard-container">
    <div class="dashboard-components dash-todo">
      <h2>
        <RouterLink :to="{ name: 'to_do' }">To-do list</RouterLink>
        <img src="/images/side_arrow.svg" />
      </h2>
      <TodoList />
    </div>
    <div class="dashboard-components dash-quiz">
      <h2>
        <RouterLink :to="{ name: 'quiz' }">Quiz</RouterLink>
        <img src="/images/side_arrow.svg" />
      </h2>
      <QuizApp />
    </div>
    <div class="dashboard-components dash-slide">
      <h2>
        <RouterLink :to="{ name: 'slideshow' }">Mine bilder</RouterLink>
        <img src="/images/side_arrow.svg" />
      </h2>
      <SlideShowApp />
    </div>
    <div class="dashboard-components dash-table">
      <h2>
        <RouterLink :to="{ name: 'time_table' }">Timeplan</RouterLink>
        <img src="/images/side_arrow.svg" />
      </h2>
      <Table />
    </div>
    <div class="dashboard-components dash-contact">
      <button @click="active = !active">
        <img src="/images/arrow_down.svg" />
      </button>
      <h2>
        <RouterLink :to="{ name: 'contact_us' }">Kontakt oss</RouterLink>
        <img src="/images/side_arrow.svg" />
      </h2>

      <div v-if="active" class="contact__content"><ContactForm /></div>
    </div>
  </div>
  <Footer color="var(--footer-background"/>
</template>


<script>
  import Header from "../components/Header.vue";
  import Table from "../components/Table.vue";
  import QuizApp from "../components/QuizApp.vue";
  import ContactForm from "../components/ContactForm.vue";
  import TodoList from "../components/TodoList.vue";
  import SlideShowApp from "../components/SlideShowApp.vue";
  import Footer from "../components/Footer.vue";

  export default {
    components: {
      Header,
      QuizApp,
      Table,
      ContactForm,
      TodoList,
      SlideShowApp,
      Footer,
    },

    data() {
      return {
        active: false,
      };
    },
  };
</script>

<style>
h2 {
  display: inline-block;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
}

.dashboard-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 150px;
}

.dashboard-components {
  margin: var(--margin);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 0.4em;
  border: 5px white solid;
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

.dash-slide .image_nav,
.dash-slide .image_buttons,
.dash-slide figcaption {
  display: none;
}

.dash-slide .slideshow-container {
  margin-top: var(--margin);
  width: 90%;
  height: 90%;
}

.dash-todo .todo-box {
  width: 50%;
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

.dash-contact button {
  display: inline;
}
</style>