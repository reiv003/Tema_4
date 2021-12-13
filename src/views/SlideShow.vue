<template>
  <div id="slideshow-view">
    <Header title="Mine bilder" color="var(--component-orange)"/>
    <SlideShowApp />
    <Footer color="var(--component-orange"/>
  </div>
</template>

<script>
  import Header from "../components/Header.vue";
  import SlideShowApp from "../components/SlideShowApp.vue";
  import Footer from "../components/Footer.vue";
  
  export default {
    components: {
      Header,
      SlideShowApp,
      Footer,
    },
  };
</script>

<style>

#slideshow-view {
  background-color: var(--orange-light)
}

</style>