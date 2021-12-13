
<template>
  <Header title="To-do" color="var(--component-yellow)" />
  <TodoList />
  <Footer color="var(--component-yellow)" />
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