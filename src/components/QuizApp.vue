<template>
  <main class="main-box">
    <div>{{ title }}</div>
    <div class="main-box__question">{{ question }}</div>
    <button v-on:click="score -= 1" class="main-box__answer">
      {{ answer_1 }}
    </button>
    <button v-on:click="score += 1" class="main-box__answer">
      {{ answer_2 }}
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
    },
    data() {
      return {
        question: "Er dette en bra quiz?",
        answer_1: "ja",
        answer_2: "nei",
        score: 0,
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