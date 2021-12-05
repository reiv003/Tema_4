<template>
  <body class="quiz-body">
    <div class="quiz-body__title">Kjemisk quiz</div>
    <div class="quiz-body__box">
      <div class="box__question">
        <p>{{ questions[0]["question"] }}</p>
        <label
          :for="key"
          class="box__question__option"
          v-for="(alternative, key) in questions[0]['alternatives']"
        >
          <!--  @change -> når man trykker på et av alternativene skal answered methoden skje
                :disabled -> gjør at man bare kan velge et av alternativene -->
          <input
            class="option-hidden"
            type="radio"
            :id="key"
            :value="key"
            @change="answered($event)"
            :disabled="selectedAlternative != ''"
            :class="{ kanin: selectedAlternative == '' }"
          />
          {{ alternative }}
        </label>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      selectedAlternative: "",
      questions: [
        {
          question: "Hvem er lederen av EXO?",
          alternatives: { a: "Onew", b: "Suho", c: "Xiumin", d: "Taeyong" },
          correctAlternative: "b",
        },
        {
          question: "Hvem er SHINees maknae?",
          alternatives: { a: "Taemin", b: "Onew", c: "Yang Yang", d: "Sehun" },
          correctAlternative: "a",
        },
        {
          question: "Hvem er Guros favoritt gruppe?",
          alternatives: { a: "SHINee", b: "NCT", c: "EXO", d: "Wayv" },
          correctAlternative: "c",
        },
      ],
    };
  },
  methods: {
    // når man trykker på et alternativ console logger den om man trykker på a,b,c eller d
    answered(e) {
      this.selectedAlternative = e.target.value;
      console.log(this.selectedAlternative);
    },
  },
};
</script>

<style>
.quiz-body {
  display: flex;
  flex-direction: column;
  background: burlywood;
  padding-left: 2em;
}

.quiz-body__title {
  width: 50vw;
  background: pink;
}

.quiz-body__box {
  width: 50vw;
  height: 50vh;
  background: aquamarine;
}

.box__question__option {
  display: block;
  background: white;
  margin: 0.5em;
  border-radius: 20px;
  padding: 0.06em;
}

.option-hidden {
  visibility: hidden;
}

.kanin {
  background: grey;
}
</style>