<template>
  <Stopwatch />
  <QuizApp />
</template>

<script>
  import QuizApp from "../components/QuizApp.vue";
  import Stopwatch from "../components/Stopwatch.vue";

  export default {
    components: {
      QuizApp,
      Stopwatch,
    },
  };
</script>

<style>
</style>