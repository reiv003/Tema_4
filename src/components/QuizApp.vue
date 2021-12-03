<template>
  <div>
    <button @click="startQuiz">start quiz</button>
  </div>
  <main id="toggle-quiz" class="quiz-app">
    <div class="quiz-app__question">{{ currentQuestion }}</div>

    <div class="lol">
      <button
        @click="nextQuestion"
        v-on:click="correct"
        class="quiz-app__answer"
      >
        {{ currentAlternative.a }}
      </button>

      <button @click="nextQuestion" class="quiz-app__answer">
        {{ currentAlternative.b }}
      </button>

      <button class="quiz-app__hidden-answer">
        {{ currentAlternative.c }}

        <!-- Skriv in "scoren din er ... her?" -->
      </button>
    </div>

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
        "Hvilket grunnstoff var det man tidligere kalte 'surstoff'?",
        "Hvilket berømt ektepar var de første til å oppdage 'radium' i 1898?",
        "Hvilket grunnstoff i periodesystemet har det kjemiske symbolet 'W'?",
        "Hvor mange 'perioder' består det periodiske system av?",
        "Hva kalles de vertikale kolonnene i det periodiske systemet?",
        "Quizzen er ferdig",
      ],

      alternatives: [
        { a: "Okysgen", b: "Karbondioksid" },
        { a: "Marie og Pierre Curie", b: "Albert og Elsa Einstein" },
        { a: "Wolfram", b: "Walterium" },
        { a: "7 perioder", b: "9 perioder" },
        { a: "Grupper", b: "Perioder" },
        { c: "se score" },
      ],

      /*
      questions: [
        {
          question:
            "Hvilket grunnstoff var det man tidligere kalte 'surstoff'?",
          alternatives: [
            { alternative: "Karbondioksid (0)", correct: false },
            { alternative: "Oksygen (+1)", correct: true },
          ],
        },

        {
          question:
            "Hvilket berømt ektepar var de første til å oppdage 'radium' i 1898?",
          alternatives: [
            { alternative: "Marie og Pierre Curie (+1)", correct: true },
            { alternative: "Albert og Elsa Einstein (0)", correct: false },
          ],
        },

        {
          question:
            "Hvilket grunnstoff i periodesystemet har det kjemiske symbolet 'W'?",
          alternatives: [
            { alternative: "Wolfram (+1)", correct: true },
            { alternative: "Walterium (0)", correct: false },
          ],
        },

        {
          question: "Hvor mange 'perioder' består det periodiske system av?",
          alternatives: [
            { alternative: "7 perioder (+1)", correct: true },
            { alternative: "9 perioder (0)", correct: false },
          ],
        },

        {
          question:
            "Hva kalles de vertikale kolonnene i det periodiske systemet?",
          alternatives: [
            { alternative: "Perioder (0)", correct: false },
            { alternative: "Grupper (+1)", correct: true },
          ],
        },
      ],*/
    };
  },

  computed: {
    currentQuestion() {
      return this.questions[this.index];
    },

    currentAlternative() {
      return this.alternatives[this.index];
    },
  },

  methods: {
    previousQuestion() {
      this.index =
        this.index === 0 ? this.questions.length - 1 : this.index - 1;
      //this.index === this.questions.slice(0, 2);  // Tried making a method that does not loop the array, but stops it after the last object
    },

    nextQuestion() {
      this.index =
        this.index === this.questions.length - 1 ? 0 : this.index + 1;
    },

    /*
    scoreCount() {
      if (this.correct === true) {
        this.score += 1;
      }
    },
    */

    correct() {
      this.score += 1;
    },

    /*
    vetIkke() {
      return Math.random() > 0.5 ? "correct" : "wrong";
    },
    */

    startquiz() {
      toggle - quiz;
    },
  },
};
</script>


<style>
.quiz-app {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 50%;
  height: 70%;
  margin-bottom: 2em;
}

.quiz-app__question {
  background: powderblue;
  width: 80%;
  height: 80%;
  padding: 10%;
  text-align: center;
}

.quiz-app__answer:hover {
  background: #ccc;
}

.lol {
  width: 60%;
  height: 40%;
  background: palegoldenrod;
}

.quiz-app__answer {
  border: 2px solid black;
  width: 100%;
  height: 40%;
  margin-top: 0.5em;
  text-align: center;
  background: none;
  font-size: 24px;
}

.quiz-app__hidden-answer {
  background: grey;
  width: 100%;
  height: 40%;
  margin-top: 0.5em;
  text-align: center;
  background: none;
  font-size: 24px;
}

.nav__buttons {
  display: flex;
  flex-direction: row;
  column-gap: 1em;
  margin-top: 3em;
}

.nav__buttons button {
  width: 70%;
  border: 2px solid black;
  background: none;
  font-size: 20px;
}
</style>