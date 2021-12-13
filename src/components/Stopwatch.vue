<template>
  <section id="stopwatch">
    <p class="stopwatch__watch">{{ stopwatch }}</p>
    <button class="stopwatch__start" @click="start">Start</button>
    <button class="stopwatch__stop" @click="stop">Stop</button>
    <button class="stopwatch__reset" @click="reset">Reset</button>
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
.stopwatch__watch {
  padding-left: 8%;
}

.stopwatch__start {
  margin-right: 2%;
}

.stopwatch__stop {
  margin-right: 2%;
}
</style>