
<template>
  <Header title="To-do" color="var(--component-blue)"/>
  <TodoList />
  <Footer color="var(--component-blue"/>
</template>

<script>
  import Header from "../components/Header.vue";
  import TodoList from "../components/TodoList.vue";
  import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    TodoList,
    Footer,
  },

  data() {
    return {};
  },
};
</script>

<style>
</style>