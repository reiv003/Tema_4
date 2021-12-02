<template>
  <div class="todo-list">
    <div class="todo-list__header">
      <button @click="addTask" class="todo-list__add-task__svg">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="7.55945"
            x2="7.55945"
            y2="14.5765"
            stroke="black"
            stroke-width="2"
          />
          <line
            y1="7.01709"
            x2="14.5765"
            y2="7.01709"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      </button>
      <div class="todo-list__header__text">{{ title }}</div>
    </div>

    <div class="todo__items">
      <button @click="markTaskAsDone">O</button>
      <div v-for="task in tasks" class="completed__tasks">
        {{ task.text }}
      </div>
      <button @click="removeTask">X</button>
      <!--
      <TodoItem
        v-for="(task, index) in todoTasks"
        :text="task.text"
        :done="task.done"
        :key="task.id"
      />
      -->
    </div>

    <hr />
    <!--
    <div class="compleded">
      <button>O</button>
      <div class="completed__tasks">Completed this</div>
      <button>X</button>
    </div>
    -->

    <div class="compleded">
      <div class="todo-list__item" v-for="value in completedTasks">
        <button @click="markTaskAsUndone(index)">O</button>
        <div>completed</div>
        <button @click="removeDoneTask(index)">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Legg til oppgave",

      tasks: [{ text: "Støvsuge", done: false }],

      completedTasks: [{ tekst: "Gå tur", done: true }],
    };
  },

  computed: {
    todoTask() {
      return this.tasks.filter((task) => task.done === false);
    },

    completedTasks() {
      return this.tasks.filter((task) => task.done === true);
    },
  },

  methods: {
    addTask(text) {
      this.tasks.push({ id: this.id(), text: this.id(), done: false });
    },

    removeTask(id) {
      const taskIndex = this.tasks.findIndex((task) => task.id === id);
      this.tasks.splice(taskIndex, 1);
    },

    markTaskAsDone(id) {
      const taskIndex = this.tasks.findIndex((task) => task.id === id);
      this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
    },

    id() {
      return Math.random().toString(36).slice(2);
    },
  },
};
</script>

<style>
.todo-list {
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 80vw;
  padding: 1em;
  background: palegoldenrod;
}

.todo-list__header {
  background: violet;
  display: flex;
  flex-direction: row;
}

.todo-list__header__text {
  pointer-events: none;
}
</style>
