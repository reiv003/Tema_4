<template>
  <Header title="Quiz" color="var(--component-yellow)"/>
  <Stopwatch />
  <QuizApp />
  <Footer color="var(--component-yellow"/>
</template>

<script>
  import Header from "../components/Header.vue";
  import QuizApp from "../components/QuizApp.vue";
  import Stopwatch from "../components/Stopwatch.vue";
  import Footer from "../components/Footer.vue";
  
  export default {
    components: {
      Header,
      QuizApp,
      Stopwatch,
      Footer,
    },
  };
</script>

<style>
</style>