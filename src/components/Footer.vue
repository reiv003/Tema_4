<template>
  <footer :style="{backgroundColor: color}">
    <div>© S-app 2021</div>
  </footer>
</template>

<script>
  export default {
    props: {
      color: String
    },

    data() {
      return {};
    },
  };
</script>

<style>
  footer {
    position: absolute;
    background-color: backgroundColor;
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