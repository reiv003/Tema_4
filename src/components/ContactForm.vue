<template>
  <div class="contact-form">
    <div>Kontakt oss</div>
    <input
      class="contact-form__input"
      type="text"
      placeholder="Navn"
      v-model="form.name"
    />
    <input
      class="contact-form__input"
      type="text"
      placeholder="E-post"
      v-model="form.email"
    />
    <input
      class="contact-form__input"
      type="textarea"
      placeholder="Hva kan vi hjelpe deg med?"
      v-model="form.message"
    />

    <button @click="submit_form">Send inn</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: null,
          email: null,
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

  .contact-form__input {
    border: 1px solid black;
    padding: var(--padding);
    height: 50px;
  }

  .contact-form__input + .contact-form__input {
    margin-top: 0.5em;
  }
</style>
