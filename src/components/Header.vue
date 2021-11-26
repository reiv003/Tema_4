<template>
  <header>
    <h1>Studerings-app</h1>
    <div class="item">
      <RouterLink :to="{ name: 'time_table' }">Tabell</RouterLink>
    </div>
    <div class="item">
      <RouterLink :to="{ name: 'quiz' }">Quiz</RouterLink>
    </div>
    <div class="item">
      <RouterLink :to="{ name: 'contact_us' }">Kontakt oss</RouterLink>
    </div>
    <div class="item">
      <RouterLink :to="{ name: 'dashboard' }">Dashboard</RouterLink>
    </div>
    <div class="item">
      <RouterLink :to="{ name: 'to_do' }">To-do list</RouterLink>
    </div>
    <div class="item">
      <RouterLink :to="{ name: 'slideshow' }">Slideshow</RouterLink>
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
  align-items: center;
}

.item {
  background: cadetblue;
  padding: var(--padding);
  margin: var(--margin);
  width: 12vw;
}
</style>