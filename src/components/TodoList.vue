<template>
  <div class="todo-list">
    <div class="todo-list__add-task">
      <button class="todo-list__add-task__svg">
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
      <div class="todo-list__add-task__text">Legg til oppgave</div>
    </div>

    <div class="todo">
      <button>O</button>
      <div class="todo__tasks">Have to do this</div>
      <button>X</button>
    </div>

    <hr />

    <div class="compleded">
      <button>O</button>
      <div class="completed__tasks">Completed this</div>
      <button>X</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoTasks: [
        { text: "Støvsuge", done: false },
        { text: "Gjøre lekser", done: false },
      ],

      completedTasks: [
        { text: "Gå tur", done: true },
        { text: "Handle", done: true },
      ],
    };
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

.todo-list__add-task {
  background: violet;
  display: flex;
  flex-direction: row;
}

.todo-list__add-task__text {
  pointer-events: none;
}

button {
  background: none;
  border: none;
  font: inherit;
}
</style>