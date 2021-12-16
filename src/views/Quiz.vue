<template>
  <div id="quiz-view">
    <Header title="Quiz" headerColor="var(--component-blue)" />
    <QuizApp />
    <Footer color="var(--component-blue)" />
  </div>
</template>

<script>
  import Header from "../components/Header.vue";
  import QuizApp from "../components/QuizApp.vue";
  import Footer from "../components/Footer.vue";

  export default {
    components: {
      Header,
      QuizApp,
      Footer,
    },
  };
</script>

<style>
  #quiz-view {
    background-color: var(--blue-light);
  }

  #quiz-view h1 {
      color: var(--blue-dark);
  }

  #quiz-view .logo {
    fill: var(--blue-dark);
  }
</style>