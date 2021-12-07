<template>
  <footer>
    <div>(c) Studerings-app 2021</div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style>
  footer {
    background-color: var(--footer-background);
    height: 2em;
    text-align: center;
    font-size: 0.5em;
    bottom: 0;
    position: absolute;
    width: 100%;
  }

  footer div {
    opacity: 0.4;
  }
</style>