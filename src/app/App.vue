<template>
  <div>App.vue</div>
  <RouterView />
  <header>
    <RouterLink :to="{ name: 'tabell' }">Go to /tabell</RouterLink>
    <br />
    <RouterLink :to="{ name: 'quiz' }">Go to /quiz</RouterLink>
    <br />
    <RouterLink :to="{ name: 'dashboard' }">Go to 3000 (dashboard)</RouterLink>
  </header>
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