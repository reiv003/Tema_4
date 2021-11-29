<template>
  <main class="main-box">
    <div>{{ title }}</div>
    <div class="main-box__question">hva er?</div>
    <button @click="wrong" v-on:click="score += 1" class="main-box__answer">
      svar 1
    </button>
    <button @click="correct" v-on:click="score -= 1" class="main-box__answer">
      svar 2
    </button>
    <div>Din score er {{ score }}</div>
  </main>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Min quiz",
    },
    data: {
      score: 0,
    },
  },

  data() {
    return {
      questions: [
        {
          question: "Is math related to science?",
          first: "No",
          second: "Yes",
        },
        {
          question: "Are you dumb?",
          first: "Yes",
          second: "No",
        },
      ],
    };
  },

  methods: {
    wrong() {
      console.log("wrong");
    },
    correct() {
      console.log("correct");
    },
  },
};
</script>


<style>
.main-box {
  display: flex;
  flex-flow: column;
  width: 50vw;
  height: 70vh;
  align-items: center;
  border: 5px solid pink;
}

.main-box__question {
  background: powderblue;
  width: 40vw;
  height: 40vh;
  padding-top: 15vh;
  text-align: center;
}

.main-box__answer {
  border: 2px solid black;
  width: 35vw;
  height: 7vh;
  margin-top: 2em;
  text-align: center;
  background: none;
  font-size: 24px;
}
/*
                .nav {
                  display: flex;
                  flex-flow: row;
                  justify-content: space-between;
                  width: 40vw;
                  height: 2.5vw;
                  margin-top: 0.5em;
                }

                .nav__next {
                  width: 10vw;
                  background: grey;
                  border-radius: 15px;
                  border: none;
                }

                .nav__back {
                  width: 10vw;
                  background: grey;
                  border-radius: 15px;
                  border: none;
                }
                */
</style>