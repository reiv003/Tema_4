
<template>
  <div id="todo-view">
    <Header title="To-do" headerColor="var(--component-yellow)" />
    <TodoList />
    <Footer color="var(--component-yellow)" />
  </div>
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
  #todo-view {
    background-color: var(--yellow-light);
  }

  #todo-view h1 {
    color: var(--yellow-dark);
  }

  #todo-view .logo {
    fill: var(--yellow-dark);
  }
</style>