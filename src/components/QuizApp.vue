<template>
  <body class="quiz-body">
    <div class="quiz-body__box">
      <!-- spørsmålene vises når indxen til quizen er mindre en count(lengden på quizzen -> 3) -->
      <div v-if="index < count">
        <p class="quiz-body__question">{{ questions[index]["question"] }}</p>
        <label
          :for="key"
          class="quiz-body__alternatives"
          v-for="(alternative, key) in questions[index]['alternatives']"
          :class="
            ({ selector: selectedAlternative == '' },
            {
              selector_wrong: selectedAlternative == key,
            },
            {
              selector_correct:
                key == questions[index]['correctAlternative'] &&
                selectedAlternative != '',
            })
          "
        >
          <!--  @click -> når man trykker på et av alternativene skal 'answered methoden' skje
                :disabled -> gjør at man bare kan velge bare et av alternativene -->
          <input
            class="hide-radio"
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
            v-show="selectedAlternative != '' && index == count - 1"
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
        <div>
          <p>
            Riktige svar:
            <span class="quiz-body__correct-scores">{{ correctScores }}</span>
          </p>
          <p>
            Gale svar:
            <span class="quiz-body__wrong-scores">{{ wrongScores }}</span>
          </p>
        </div>
        <button @click="resetQuiz" class="quiz-body__reset-button">
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
      count: 3,
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
      ],
    };
  },

  methods: {
    /* når man trykker på et alternativ finner den keyen til hvilken man trykker på a,b,c,d
       
       kalkulerer scoren:
       hvis man trykker på riktig knapp går 'correctAlternative' ++
       hvis man trykker på feil knapp går 'wrongScores' ++
    */

    answered(e) {
      this.selectedAlternative = e.target.value;
      if (
        this.selectedAlternative ==
        this.questions[this.index]["correctAlternative"]
      )
        this.correctScores++;
      else this.wrongScores++;
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
.quiz-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 70%;
}

.quiz-body__box {
  display: flex;
  justify-content: center;
  width: 50%;
  height: 60vh;
  padding: 1em;
  margin-top: 2em;
  background: var(--component-blue);
}

.quiz-body__question {
  margin-bottom: 2em;
  margin-top: 1em;
}

.quiz-body__alternatives {
  display: block;
  background: white;
  margin: 0.5em;
  border-radius: 20px;
  padding: 0.06em;
}

.hide-radio {
  visibility: hidden;
}

.selector:hover {
  background: #ccc;
}

.selector_wrong {
  background: var(--component-pink);
}

.selector_correct {
  background: var(--component-green);
}

.quiz-body__button {
  background: var(--component-pink);
  float: right;
  border-radius: 20px;
  padding: 0.4em;
  margin-top: 0.6em;
}

.quiz-body__result {
  margin-bottom: 1em;
}

.quiz-body__correct-scores {
  color: green;
  display: inline;
}

.quiz-body__wrong-scores {
  color: red;
  display: inline;
}

.quiz-body__reset-button {
  background: var(--component-pink);
  border-radius: 20px;
  padding: 0.6em;
  margin-top: 2em;
  margin-left: 10vw;
}
</style>