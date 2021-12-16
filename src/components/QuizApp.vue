<template>
  <div class="quiz">
    <div class="quiz__stopwatch">
      <Stopwatch />
    </div>
    <div class="quiz-body">
      <!-- The questions will only show when the index of the quiz is less than the count (8) -->
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
              selectedAlternative != '',}">
          <!--  :disabled -> Does so that you can only choose one alternative -->
          <input
            class="quiz-body__radio"
            type="radio"
            :id="key"
            :value="key"
            @click="answered($event)"
            :disabled="selectedAlternative != ''"/>
          {{ alternative }}
        </label>

        <!-- Neste knappen vises bare når selectedAlternative har trykket på en knapp
             The next button only showes when a selectedAlternative has been clicked.
             and index is less then the count(8) - 1 = 7
             This only happens on question 1-6 (when the index is between 0-7)-->
        <div>
          <button
            v-show="selectedAlternative != '' && index < count - 1"
            @click="nextQuestion"
            class="quiz-body__button">
              Neste &gt;
          </button>

          <!-- The finished button only shows when selectedAlternative has been clicked. 
               and index is the same as count(8) - 1 = 7 
               This only happens on question 8 (when the index is 7) -->
          <button
            v-show="selectedAlternative != '' && index === count - 1"
            @click="showResult"
            class="quiz-body__button">
              Avslutt
          </button>
        </div>
      </div>

      <!-- Results show when the index of the quiz is bigger then the length of the quiz(count = 8) -->
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
  </div>
</template>

<script>
  import Stopwatch from "./Stopwatch.vue";

  export default {
    components: { Stopwatch },

    data() {
      return {
        index: 0,
        selectedAlternative: "",
        correctScores: 0,
        wrongScores: 0,
        count: 8,
        questions: [
          {
            question: "Hvilket grunnstoff var det man tidligere kalte 'surstoff'?",
            alternatives: { 
              a: "Klor",
              b: "Oksygen", 
              c: "Hydrogen",
              d: "Litium" 
            },
            correctAlternative: "b",
          },
          {
            question: "Hvor mange 'perioder' består det periodiske system av?",
            alternatives: {
              a: "7",
              b: "4",
              c: "11",
              d: "9" 
            },
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
            question:
              "Hva het den russiske kjemikeren som regnes for å være 'periodesystemets' far?",
            alternatives: {
              a: "Vladimir Periodnikov",
              b: "Dmitrij Mendelejev",
              c: "Sergei Pushkin ",
            },
            correctAlternative: "b",
          },
          {
            question: "Hvilket grunnstoff har kjemisk symbol W?",
            alternatives: {
              a: "Walteruim",
              b: "Wallium",
              c: "Wolfram",
              d: "Willsonium",
            },
            correctAlternative: "c",
          },
          {
            question: "Hva kalles de vertikale kolonnene i periodesystemet?",
            alternatives: {
              a: "Grupper",
              b: "Kolonner",
            },
            correctAlternative: "a",
          },
          {
            question: "Hva er det kjemiske symbolet for Kalsium?",
            alternatives: {
              a: "C",
              b: "Ka",
              c: "Ca",
              d: "Cs",
            },
            correctAlternative: "c",
          },
          {
            question: "Hvilken gass dannes dersom du blander eddik og natron??",
            alternatives: {
              a: "Karbondioksid",
              b: "Neon",
              c: "Wolfram",
              d: "Gull",
            },
            correctAlternative: "a",
          },
        ],
      };
    },

    methods: {
      /*When you click on an alternative it finds the key to the button you clicked (a,b,c or d)
        Calculate score:
        if you click on the right alternative the 'correctScore' ++
        if you click on the wrong alternative the 'wronScore' ++ */
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

      startQuiz() {
        console.log("start");
      },
    },
  };
</script>

<style>
  .quiz {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 75%;
  }

  .quiz__stopwatch {
    width: 100%;
  }

  .quiz-body {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .quiz-body__question {
    margin-bottom: 1em;
  }

  .quiz-body__alternatives {
    display: block;
    padding: 0.5em;
    border-radius: 20px;
    margin: 1em;
    background: white;
  }

  .quiz-body__radio {
    visibility: hidden;
  }

  .quiz-body__button {
    float: right;
    padding: 0.5em;
    border-radius: 20px;
    background: var(--component-pink);
  }

  .quiz-body__result {
    padding-top: 1em;
    background: none;
  }

  .result__scores {
    padding-left: 0.5vw;
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
    margin-left: 1vw;
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