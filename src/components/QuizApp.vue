<template>
  <div>Play quiz here</div>

  <section id="stopwatch">
    <p>{{ stopwatch }}</p>
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
    <button @click="reset">Reset</button>
  </section>
  <main class="quiz-form">
    <div class="mainBox">
      <div class="question">Hva er ?</div>
      <button class="answer">svar 1</button>
      <button class="answer">svar 2</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "stopwatch",
  data() {
    return {
      timeGone: 0,
      timer: undefined,
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
.mainBox {
  display: flex;
  flex-flow: column;
  width: 40vw;
  height: 70vh;
  align-items: center;
}

.question {
  background: powderblue;
  width: 40vw;
  height: 40vh;
  padding-top: 15vh;
  text-align: center;
}

.answer {
  border: 2px solid black;
  width: 35vw;
  height: 7vh;
  margin-top: 2em;
  text-align: center;
  background: none;
  font-size: 24px;
}
</style>