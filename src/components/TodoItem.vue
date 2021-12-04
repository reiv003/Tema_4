<!-- 
	TASK MODEL:
	{ id: '(random)', text: 'A new task', done: false }
-->

<!-- når man trykker på knappene skal "emitDone" og "emitRemove" skje-->

<template>
  <div :class="`todo-item ${task.done ? 'todo-item--done' : ''}`">
    <button @click="emitDone" class="todo-item__button" aria-label="Done">
      <Icons :icon="'done'" />
    </button>

    <div class="todo-item__task">
      <input
        :ref="task.id"
        type="text"
        v-model="task.text"
        placeholder="New task"
      />
    </div>

    <button @click="emitRemove" class="todo-item__button" aria-label="Remove">
      <Icons :icon="'remove'" />
    </button>
  </div>
</template>

<script>
/* 
		EVENTS 
		emit -> event
	*/

import Icons from "../components/Icons.vue";

export default {
  components: {
    Icons,
  },

  props: {
    task: { type: Object },
  },
  /* spør alejandro om dette 

  mounted() {
    this.$refs[this.task.id].focus();
  },
  */

  /* når dette evente skjer blit tasken man skriver inn*/
  updated() {
    this.$emit("updated-task", this.task);
  },

  /* this (event)  gjør at "done-task" og "remove-task" skal skje som er i TodoList.vue*/
  methods: {
    emitDone() {
      this.$emit("done-task", this.task);
    },

    emitRemove() {
      this.$emit("remove-task", this.task);
    },
  },
};
</script>

<style>
.todo-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25em;
  padding: 0.5em 0.8em;
}

.todo-item--done {
  color: yellow;
}

.todo-item--done circle {
  fill: black;
  stroke: black;
}

.todo-item__button {
  --size: 0.8em;

  min-width: var(--size);
  min-height: var(--size);
  width: var(--size);
  height: var(--size);
}

.todo-item__button:hover line {
  stroke: green;
}

.todo-item__button:hover circle {
  fill: purple;
  stroke: purple;
}

.todo-item__task {
  flex-grow: 2;
  padding: 0.1em 0.5em 0;
}

.todo-item__task input {
  width: 100%;
  padding: 0.5em;
  outline: 0;
}
</style>
