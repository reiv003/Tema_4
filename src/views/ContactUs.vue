<template>
  <div id="contact-view">
    <Header title="Kontakt oss" color="var(--component-green)"/> 
    <ContactForm />
    <Footer color="var(--component-green"/>
  </div>
</template>

<script>
  import Header from "../components/Header.vue";
  import ContactForm from "../components/ContactForm.vue";
  import Footer from "../components/Footer.vue";
  export default {
    components: {
      Header,
      ContactForm,
      Footer,
    },

    data() {
      return {};
    },
  };
</script>

<style>
  #contact-view {
    background-color: var(--green-light);
  }
</style>