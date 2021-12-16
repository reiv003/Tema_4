<template>
  <!-- Header needs to be imported on every view in order to change title and color with this solution.
  We tried solving this in other ways, but were not able to make anything else work. The main problem is that the views
  contain only the routed content and header is not a child/parent of the view, but a sibling.-->
  <header :style="{ backgroundColor: headerColor}" class="header">
    <RouterLink :to="{ name: 'dashboard' }">
      <button class="header__logo" aria-label="Hjem">
        <!-- In order change the color of the svg per view, it must be embedded directly.  -->
        <svg width="40" height="50" viewBox="0 0 147 118" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="logo" d="M27.8005 55.5294H60.443V118H27.8005V55.5294Z" fill="#5C4942"/>
          <path class="logo" d="M86.557 55.5294H119.199V118H86.557V55.5294Z" fill="#5C4942"/>
          <path class="logo" d="M73.5 0L147 67.6765H0L73.5 0Z" fill="#5C4942"/>
          <path class="logo" d="M53.9145 62.4706H93.0855V97.1765H53.9145V62.4706Z" fill="#5C4942"/>
        </svg>
      </button>
    </RouterLink>
    <img src="/images/logo.svg" alt="Logo" />
    <h1 class="header__title">{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    props: {
      title: String,
      headerColor: String,
    },

    data() {
      return {};
    },
  };
</script>

<style>
  .header {
    display: flex;
    justify-content: center;
    font-size: 0.7em;
    background-color: backgroundColor;
    padding: 0.5em;
  }

  .header__logo {
    position: absolute;
    left: 0;
    padding-left: 1em;
  }
</style>