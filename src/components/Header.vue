<template>
  <header>
    <h1>Studerings-app</h1>
    <div class="item table">
      <RouterLink :to="{ name: 'time_table' }">Go to tabell</RouterLink>
    </div>
    <br />
    <div class="item quiz">
      <RouterLink :to="{ name: 'quiz' }">Go to quiz</RouterLink>
    </div>
    <br />
    <div class="item contact">
      <RouterLink :to="{ name: 'contact_us' }">Go to contact_us</RouterLink>
    </div>
    <br />
    <div class="item contact">
      <RouterLink :to="{ name: 'dashboard' }">Go to dashboard</RouterLink>
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
  }

  .item {
    background: cadetblue;
    padding: var(--padding);
    margin: var(--margin);
  }
</style>