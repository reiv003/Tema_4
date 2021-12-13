<template>
  <!-- Header needs to be imported on every view in order to change title and color with this solution.
We tried solving this in other ways, but were not able to make anything else work. The main problem is that the views
contain only the routed content and header is not a child/parent of the view, but a sibling.-->
  <header :style="{ backgroundColor: color }" class="header">
    <RouterLink :to="{ name: 'dashboard' }"
      ><button class="header__logo"><img src="/images/home.svg" /></button
    ></RouterLink>
    <img src="/images/logo.svg" alt="" />
    <h1 class="header__title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,
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

.item {
  padding: var(--padding);
  margin: var(--margin);
}

.item a {
  text-decoration: none;
  color: white;
}

.item a:hover {
  font-weight: bold;
  text-decoration: underline;
}
</style>