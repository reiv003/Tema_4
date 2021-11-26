<template>
  <header>
    <h1>Studerings-app</h1>
    <div class="item table">
      <RouterLink :to="{ name: 'time_table' }">Timeplan</RouterLink>
    </div>
    <br />
    <div class="item quiz">
      <RouterLink :to="{ name: 'quiz' }">Quiz</RouterLink>
    </div>
    <br />
    <div class="item contact">
      <RouterLink :to="{ name: 'contact_us' }">Kontakt oss</RouterLink>
    </div>
    <br />
    <div class="item contact">
      <RouterLink :to="{ name: 'dashboard' }">Dashboard</RouterLink>
    </div>
    <br />
    <div class="item contact">
      <RouterLink :to="{ name: 'to_do' }">To-do</RouterLink>
    </div>
  </header>
</template>

<script>
  export default {};
</script>

<style>
  header {
    font-size: 0.7em;
    display: flex;
    background-color: var(--header-footer-bg-color);
  }

  .item {
    padding: var(--padding);
    margin: var(--margin);
  }

  .item a {
    text-decoration: none;
    color: white;
  }

  .item a:hover {
    background: cadetblue;
  }
</style>