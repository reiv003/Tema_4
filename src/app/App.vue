<template>
  <div>Hei 2</div>
  <!-- <RouterView /> -->
  <Dashboard />
  <Quiz />
</template>

<script>
import Dashboard from "../views/Dashboard.vue";
export default {
  components: { Dashboard },
};
</script>

<style>
@import "../styles/reset.css";
@import "../styles/variables.css";
@import "../styles/style.css";
</style>