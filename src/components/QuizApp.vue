<template>
  <body class="quiz">
    <div class="quiz-body">
      <!-- spørsmålene vises når indxen til quizen er mindre en count(lengden på quizzen -> 3) -->
      <div v-if="index < count">
        <p class="quiz-body__question">{{ questions[index]["question"] }}</p>
        <label
          :for="key"
          class="quiz-body__alternatives"
          v-for="(alternative, key) in questions[index]['alternatives']"
          :class="{
            selector: selectedAlternative === '',
            selectorWrong: selectedAlternative === key,
            selectorCorrect:
              key === questions[index]['correctAlternative'] &&
              selectedAlternative != '',
          }"
        >
          <!--  @click -> når man trykker på et av alternativene skal 'answered methoden' skje
                :disabled -> gjør at man bare kan velge bare et av alternativene -->
          <input
            class="quiz-body__radio"
            type="radio"
            :id="key"
            :value="key"
            @click="answered($event)"
            :disabled="selectedAlternative != ''"
          />
          {{ alternative }}
        </label>

        <!-- Neste knappen vises bare når selectedAlternative har trykket på en knapp
             og index (0,1,2) er mindre en count(3) - 1 = 2
             Dette skjer bare på spørsmål 1 og 2 (når indexen er = 0,1) -->
        <div>
          <button
            v-show="selectedAlternative != '' && index < count - 1"
            @click="nextQuestion"
            class="quiz-body__button"
          >
            Neste &gt;
          </button>

          <!-- Avslutt knappen vises bare når selectedAlternative har trykket på en knapp 
               og index er lik count(3) - 1 = 2 
               Dette skjer bare på spørsmål 3 (når indexen er 2) -->
          <button
            v-show="selectedAlternative != '' && index === count - 1"
            @click="showResult"
            class="quiz-body__button"
          >
            Avslutt
          </button>
        </div>
      </div>

      <!-- Resultat siden viser når indexen til quizzen er større en lengden på quizzen (count -> 3) -->
      <div v-else>
        <h2 class="quiz-body__result">Resultat</h2>
        <div class="result__scores">
          <p>
            Riktige svar:
            <span class="result__scores__correct">{{ correctScores }}</span>
          </p>
          <p>
            Gale svar:
            <span class="result__scores__wrong">{{ wrongScores }}</span>
          </p>
        </div>
        <button @click="resetQuiz" class="result__reset-button">
          Spill igjen
        </button>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      selectedAlternative: "",
      correctScores: 0,
      wrongScores: 0,
      count: 5,
      questions: [
        {
          question:
            "Hvilket grunnstoff var det man tidligere kalte 'surstoff'?",
          alternatives: { a: "Klor", b: "Oksygen", c: "Hydrogen", d: "Litium" },
          correctAlternative: "b",
        },
        {
          question: "Hvor mange 'perioder' består det periodiske system av?",
          alternatives: { a: "7", b: "4", c: "11", d: "9" },
          correctAlternative: "a",
        },
        {
          question: "Hva er det vanligste grunnstoffet i universet?",
          alternatives: {
            a: "Oksygen",
            b: "Neon",
            c: "Hydrogen",
            d: "Natrium",
          },
          correctAlternative: "c",
        },
        {
          question: "Hva er det vanligste grunnstoffet i universet?",
          alternatives: {
            a: "Oksygen",
            b: "Neon",
            c: "Hydrogen",
            d: "Natrium",
          },
          correctAlternative: "c",
        },
        {
          question: "Hva er det vanligste grunnstoffet i universet?",
          alternatives: {
            a: "Oksygen",
            b: "Neon",
            c: "Hydrogen",
            d: "Natrium",
          },
          correctAlternative: "c",
        },
        {
          question: "Hva er det vanligste grunnstoffet i universet?",
          alternatives: {
            a: "Oksygen",
            b: "Neon",
            c: "Hydrogen",
            d: "Natrium",
          },
          correctAlternative: "c",
        },
      ],
    };
  },

  methods: {
    /* når man trykker på et alternativ finner den keyen til hvilken man trykker på a,b,c eller d
         
         kalkulerer scoren:
         hvis man trykker på riktig knapp går 'correctAlternative' ++
         hvis man trykker på feil knapp går 'wrongScores' ++
      */

    answered(key) {
      this.selectedAlternative = key.target.value;
      if (
        this.selectedAlternative ===
        this.questions[this.index]["correctAlternative"]
      ) {
        this.correctScores++;
      } else {
        this.wrongScores++;
      }
    },

    nextQuestion() {
      this.index++;
      this.selectedAlternative = "";
    },

    showResult() {
      this.index++;
    },

    resetQuiz() {
      this.index = 0;
      this.selectedAlternative = "";
      this.correctScores = 0;
      this.wrongScores = 0;
    },
  },
};
</script>

<style>
.quiz {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 70%;
}

.quiz-body {
  display: flex;
  justify-content: center;
  width: 50%;
  height: 55vh;
  padding: 1em;
  background: var(--component-blue);
}

.quiz-body__question {
  margin-top: 1em;
  margin-bottom: 2em;
}

.quiz-body__alternatives {
  display: block;
  padding: 0.06em;
  border-radius: 20px;
  margin: 0.5em;
  background: white;
}

.quiz-body__radio {
  visibility: hidden;
}

.quiz-body__button {
  float: right;
  padding: 0.4em;
  border-radius: 20px;
  margin-top: 0.6em;
  background: var(--component-pink);
}

.quiz-body__result {
  padding-top: 1em;
  padding-left: 1vw;
}

.result__scores {
  padding-left: 1vw;
}

.result__scores__correct {
  display: inline;
  font-size: 150%;
  color: var(--score-correct);
}

.result__scores__wrong {
  display: inline;
  font-size: 150%;
  color: var(--score-wrong);
}

.result__reset-button {
  padding: 0.6em;
  border-radius: 20px;
  margin-top: 2em;
  margin-left: 3vw;
  background: var(--component-pink);
}

/********** :class **********/
.selector:hover {
  background: #ccc;
}

.selectorWrong {
  background: var(--score-wrong);
}

.selectorCorrect {
  background: var(--score-correct);
}
</style>