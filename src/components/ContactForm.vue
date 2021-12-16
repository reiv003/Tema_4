<template>
  <div class="contact-container">
    <div>
      Har du en tilbakemelding til oss eller har oppdaget feil i appen? Kontakt
      oss via skjemaet under.
    </div>
    <div class="contact-form">
      <label for="name">Navn:</label>
      <input
        class="contact-form__input"
        type="text"
        id="name"
        placeholder="Navn"
        name="name"
        v-model="form.name"/>
      <label for="email">E-post:</label>
      <input
        class="contact-form__input"
        type="text"
        id="email"
        placeholder="E-post"
        name="email"
        v-model="form.email"/>
      <div class="contact-form__title">
        Hvilken type melding vil du sende oss?
      </div>
      <div class="contact-form__radio">
        <input
          type="radio"
          id="message-type-feedback"
          name="message-type"
          value="feedback"
          v-model="form.type"/>
        <label for="message-type-feedback">Ris/ros</label>
        <input
          type="radio"
          id="message-type-bug"
          name="message-type"
          value="bug"
          v-model="form.type"/>
        <label for="message-type-bug">Feilrapportering</label>
        <input
          type="radio"
          id="message-type-suggestion"
          name="message-type"
          value="suggestion"
          v-model="form.type"/>
        <label for="message-type-suggestion">Forslag til forbedring</label>
      </div>
      <label for="message">Melding:</label>
      <input
        class="contact-form__input"
        type="textarea"
        id="message"
        placeholder="Hva kan vi hjelpe deg med?"
        v-model="form.message"/>
      <div class="submit-button-container"><button @click="submit_form">Send inn</button></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: null,
          email: null,
          type: null,
          message: null,
        },
      };
    },

    methods: {
      submit_form() {
        alert(`Takk for din melding, ${this.form.name}!`);
      },
    },
  };
</script>

<style>
  .contact-container {
    padding: var(--padding);
    font-size: 0.7em;
  }

  .contact-form {
    display: flex;
    flex-flow: column nowrap;
    max-width: 55%;
  }

  .contact-form button {
    background-color: var(--green-dark);
    color: white;
    border-radius: 23px;
    width: 20%;
  }

  .submit-button-container {
    display: flex;
    justify-content: right;
  }

  .contact-form label,
  .contact-form__title {
    font-weight: bold;
  }

  .contact-form__radio label {
    font-weight: normal;
  }

  .contact-form__input {
    padding: var(--padding);
    height: 1.5em;
  }

  .contact-form input[type="text"],
  .contact-form input[type="textarea"] {
    border: 1px solid var(--component-green);
  }

  .contact-form input[type="textarea"] {
    height: 5em;
  }

  /*Styles for radio buttons are based on code from this guide
    https://moderncss.dev/pure-css-custom-styled-radio-buttons/ 
    This visually hides the default style of a radio button, but does not remove it. 
    The functionality of the button is kept. These styles simply overlay
    two circles to mimic the look of a radio button. */

  .contact-form input[type="radio"] {
    appearance: none;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 0.05em solid var(--component-green);
    display: grid;
    place-content: center;
  }

  .contact-form input[type="radio"]::before {
    content: "";
    width: 0.25em;
    height: 0.25em;
    border-radius: 50%;
    transform: scale(0);
    background-color: var(--component-green);
  }

  .contact-form input[type="radio"]:checked::before {
    transform: scale(1);
  }   

  .contact-form input[type="radio"]:focus {
    outline: max(0.10em) solid var(--green-dark);
    opacity: 0.7;
  }
</style>
