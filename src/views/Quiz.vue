<template>
  <Header title="Quiz" color="var(--component-yellow)" />
  <QuizApp />
  <Footer color="var(--component-yellow" />
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
</style>