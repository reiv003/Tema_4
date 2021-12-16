<template>
  <footer :style="{ backgroundColor: color }">
    <div>© S-app 2021</div>
  </footer>
</template>

<script>
  export default {
    props: {
      color: String,
    },

    data() {
      return {};
    },
  };
</script>

<style>
  /* The footer does not stay at the bottom unless there is enough content to fill the page. This is unintentional, but we were unable to solve it. */
  footer {
    background-color: backgroundColor;
    height: 3em;
    text-align: center;
    font-size: 0.5em;
  }

  footer div {
    padding-top: 1em;
    opacity: 0.4;
  }
</style>