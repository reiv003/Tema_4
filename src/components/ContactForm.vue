<template>
  <div id="contact-view">
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
        v-model="form.name"
      />
      <label for="email">E-post:</label>
      <input
        class="contact-form__input"
        type="text"
        id="email"
        placeholder="E-post"
        name="email"
        v-model="form.email"
      />
      <div class="contact-form__title">
        Hvilken type melding vil du sende oss?
      </div>
      <div class="contact-form__radio">
        <input
          type="radio"
          id="message_type_feedback"
          name="message_type"
          value="feedback"
          v-model="form.type"
        />
        <label for="message_type_feedback">Ris/ros</label>
        <input
          type="radio"
          id="message_type_bug"
          name="message_type"
          value="bug"
          v-model="form.type"
        />
        <label for="message_type_bug">Feilrapportering</label>
        <input
          type="radio"
          id="message_type_suggestion"
          name="message_type"
          value="suggestion"
          v-model="form.type"
        />
        <label for="message_type_suggestion">Forslag til forbedring</label>
      </div>
      <label for="message">Melding:</label>
      <input
        class="contact-form__input"
        type="textarea"
        id="message"
        placeholder="Hva kan vi hjelpe deg med?"
        v-model="form.message"
      />

      <button @click="submit_form">Send inn</button>
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
  .contact-form {
    display: flex;
    flex-flow: column nowrap;
    max-width: 800px;
  }

  .contact-form button {
    background-color: var(--green-dark);
    color: white;
    border-radius: 23px;
  }

  .contact-form label,
  .contact-form__title {
    font-weight: bold;
  }

  .contact-form__radio label {
    font-weight: normal;
  }

  .contact-form input[type="text"],
  .contact-form input[type="textarea"] {
    border: 1px solid var(--component-green);
  }

  .contact-form input[type="radio"] {
    appearance: none;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 0.05em solid var(--component-green);
  }

  .contact-form__input {
    border: 1px solid black;
    padding: var(--padding);
    height: 50px;
  }

  .contact-form__input + .contact-form__input {
    margin-top: 0.5em;
  }

  #contact-view {
    background-color: var(--green-light-bg);
    font-size: 0.7em;
  }
</style>
