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
    position: absolute;
    background-color: var(--footer-background);
    height: 3em;
    text-align: center;
    font-size: 0.5em;
    top: 120vh;
    width: 100%;
  }

  footer div {
    opacity: 0.4;
  }
</style>