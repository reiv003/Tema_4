<template>
  <section id="stopwatch">
    <p>{{ stopwatch }}</p>
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
    <button @click="reset">Reset</button>
  </section>
</template>

<script>
export default {
  name: "stopwatch",
  data() {
    return {
      timeGone: 0,
      timer: null,
    };
  },
  computed: {
    stopwatch() {
      const date = new Date(null);
      date.setSeconds(this.timeGone / 1000);
      const utc = date.toUTCString(); // makes a string like this; Www, dd Mmm yyyy hh:mm:ss GMT
      return utc.substr(utc.indexOf(":") - 2, 8); // -2, 8 choses this format -> hh:mm:ss  Link to substr: (it says its no longer recomended, but i can only make it work with it) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
    },
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.timeGone += 1000;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.timeGone = 0;
    },
  },
};
</script>

<style>
</style>