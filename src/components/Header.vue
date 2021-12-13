<template>
<!-- Header needs to be imported on every view in order to change title and color with this solution.
We tried solving this in other ways, but were not able to make anything else work. The main problem is that the views
contain only the routed content and header is not a child/parent of the view, but a sibling.-->
  <header :style="{backgroundColor: color}">
    <div><img src="/images/logo.svg" /></div>
    <h1>{{ title }}</h1>
    <div class="item">
      <RouterLink :to="{ name: 'time_table' }">Timeplan</RouterLink>
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
  export default {
    props: {
      title: String,
      color: String
    },

  };
</script>

<style>
  header {
    font-size: 0.7em;
    display: flex;
    background-color: backgroundColor;
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
    background: var(--footer-background);
  }
</style>