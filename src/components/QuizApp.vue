<template>
  <main class="main-box">
    <div class="main-box__question">{{ currentQuestion.question }}</div>
    <button @click="correct" class="main-box__answer">
      {{ currentQuestion.first }}
    </button>
    <button class="main-box__answer">
      {{ currentQuestion.second }}
    </button>
    <div class="nav__buttons">
      <button @click="previousQuestion">Forrigje spørsmål</button>
      <button @click="nextQuestion">Neste spørsmål</button>
    </div>
    <div>Scoren din er {{ score }}</div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      index: 0,
      questions: [
        {
          question: "Hovedstaden i Russland?",
          first: "Moskva",
          second: "St. Petersburg",
        },
        {
          question: "Hovedstaden i Kina?",
          first: "Beijing",
          second: "Changsa",
        },
        {
          question: "Hovedstaden i Brasil?",
          first: "Brasilia",
          second: "Sao Paulo",
        },
        {
          question: "quizzen er ferdig",
        },
      ],
    };
  },

  computed: {
    currentQuestion() {
      return this.questions[this.index];
    },
  },

  methods: {
    previousQuestion() {
      this.index =
        this.index === 0 ? this.questions.length - 1 : this.index - 1;
    },

    nextQuestion() {
      this.index =
        this.index === this.questions.length - 1 ? 0 : this.index + 1;
    },

    correct() {
      this.score += 1;
    },
  },
};
</script>


<style>
.main-box {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 50vw;
  height: 70vh;
  border: 5px solid pink;
}

.main-box__question {
  background: powderblue;
  width: 40vw;
  height: 40vh;
  padding-top: 15vh;
  text-align: center;
}

.main-box__answer:focus {
  background: blue;
}

.main-box__answer {
  border: 2px solid black;
  width: 35vw;
  height: 7vh;
  margin-top: 0.5em;
  text-align: center;
  background: none;
  font-size: 24px;
}

.nav__buttons {
  display: flex;
  flex-direction: row;
  column-gap: 1em;
  margin-top: 1em;
}

.nav__buttons button {
  width: 15vw;
  border: 2px solid black;
  background: none;
  font-size: 20px;
}
</style>