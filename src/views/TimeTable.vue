<template>
  <div id="table-view">
    <Header title="Timeplan" headerColor="var(--component-pink)"/> 
    <Table />
    <Footer color="var(--component-pink"/>
  </div>
</template>

<script>
  import Header from "../components/Header.vue";
  import Table from "../components/Table.vue";
  import Footer from "../components/Footer.vue";
  export default {
    components: {
      Header,
      Table,
      Footer,
    },

    data() {
      return {};
    },
  };
</script>

<style>
  #table-view {
    background-color: var(--pink-light);
  }

  #table-view h1 {
    color: var(--pink-dark);
  }

  #table-view .logo {
    fill: var(--pink-dark);
  }
</style>