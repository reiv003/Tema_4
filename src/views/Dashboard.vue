<template>
  <Header title="S-App" headerColor="var(--header-background)" />
  <div class="dashboard-container">
    <div class="dashboard-components dash-todo">
      <h2>
        <RouterLink :to="{ name: 'to_do' }">To-do list<img src="/images/side_arrow.svg"/></RouterLink>
      </h2>
      <TodoList />
    </div>
    <div class="dashboard-components dash-quiz">
      <h2>
        <RouterLink :to="{ name: 'quiz' }">Quiz<img src="/images/side_arrow.svg"/></RouterLink>
      </h2>
      <QuizApp />
    </div>
    <div class="dashboard-components dash-slide">
      <h2>
        <RouterLink :to="{ name: 'slideshow' }">Mine bilder <img src="/images/side_arrow.svg"/></RouterLink>
      </h2>
      <SlideShowApp />
    </div>
    <div class="dashboard-components dash-table">
      <h2>
        <RouterLink :to="{ name: 'time_table' }">Timeplan <img src="/images/side_arrow.svg"/></RouterLink>
      </h2>
      <Table />
    </div>
    <div class="dashboard-components dash-contact">
      <!-- Shows the collapsed contact form based on value of 'active'. The component container does not expand to fit the new content, and it is partially hidden behind the footer. I was unable to fix this. -->
      <button @click="active = !active" aria-label="Vis eller skjul kontaktskjema">
        <img src="/images/arrow_down.svg" />
      </button>
      <h2>
        <RouterLink :to="{ name: 'contact_us' }"
          >Kontakt oss <img src="/images/side_arrow.svg"
        /></RouterLink>
      </h2>
      <div v-if="active" class="contact__content"><ContactForm /></div>
    </div>
  </div>
  <Footer color="var(--footer-background" />
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
    background-color: rgba(255, 255, 255, 0.4);
  }

  a {
    color: black;
    text-decoration: underline;
  }

  a:hover {
    font-weight: bold;
  }

  a:active {
    color: white;
  }

  .dashboard-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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

  .dash-slide {
    grid-row-start: 3;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;
    background: var(--component-orange);
  }

  .dash-slide .image-nav,
  .dash-slide .image-buttons,
  .dash-slide .image__date {
    display: none;
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