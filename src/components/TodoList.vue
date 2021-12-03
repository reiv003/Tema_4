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

    <div class="todo-list__todo">
      <button @click="markTaskAsDone">O</button>
      <div v-for="task in todoTasks" class="todo-list__todo-tasks">
        {{ task.text }}
      </div>
      <button @click="removeTask">X</button>
    </div>

    <hr class="todo-list__seperator" />

    <div class="todo-list__compleded">
      <button>O</button>
      <div class="todo-list__completed-tasks">Completed this</div>
      <button>X</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Legg til oppgave",

      todoTasks: [{ text: "bla", done: false }],

      completedTasks: [{ text: "Gå tur", done: true }],
    };
  },

  computed: {
    todoTask() {
      return this.text.filter((task) => task.done === false);
    },
  },

  methods: {
    addTask(text) {
      this.todoTasks.push({ id: this.id(), text: this.id(), done: false });
    },

    removeTask(id) {
      const taskIndex = this.todoTasks.findIndex((task) => task.id === id);
      this.todoTasks.splice(taskIndex, 1);
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
