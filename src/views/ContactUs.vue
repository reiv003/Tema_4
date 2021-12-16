<template>
  <div id="contact-view">
    <Header title="Kontakt oss" headerColor="var(--component-green)"/> 
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

  #contact-view h1 {
      color: var(--green-dark);
  }

 #contact-view .logo {
    fill: var(--green-dark);
 }

</style>