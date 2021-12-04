<template>
  <div class="todo-list">
    <div class="todo-list__header">
      <div class="todo-list__title">
        Trykk for å legge til oppgave...
        <!--{{ title }}-->
      </div>

      <button @click="addTask" class="todo-list__add-new">
        <Icons :icon="'add'" />
      </button>
    </div>

    <!-- TODO TASKS: oppdaterer local storage om todoTasks blir gjort noe med,
          @-ene fra TodoItem refererer til sine egene methoder lenger ned -->
    <div class="todo-list__content">
      <template v-if="tasks.length > 0 && showSeparateLists">
        <div class="todo-list__items">
          <TodoItem
            @updated-task="storeTasksLocally"
            @done-task="doneTask"
            @remove-task="removeTask"
            v-for="task in todoTasks"
            :task="task"
          />
        </div>

        <!-- hr dukker bare opp når oppgaver som er gjort > 0, og forsvinner hvis oppgaver som må gjøres> 0 -->
        <hr
          class="todo-list__separator"
          v-if="completedTasks.length > 0 && todoTasks.length > 0"
        />

        <!-- COMPLETED TASKS: oppdaterer local storage om completedTasks blir gjort noe med
              @-ene fra TodoItem refererer til sine egene methoder lenger ned -->
        <div class="todo-list__items">
          <TodoItem
            @updated-task="storeTasksLocally"
            @done-task="doneTask"
            @remove-task="removeTask"
            v-for="task in completedTasks"
            :task="task"
          />
        </div>
      </template>

      <!-- REMOVE TASK: oppdaterer local storage om man sletter tasken
            @-ene fra TodoItem refererer til sine egene methoder lenger ned -->
      <template v-else>
        <div class="todo-list__items">
          <TodoItem
            @updated-task="storeTasksLocally"
            @done-task="doneTask"
            @remove-task="removeTask"
            v-for="task in tasks"
            :task="task"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Icons from "../components/Icons.vue";
import TodoItem from "../components/TodoItem.vue";

export default {
  props: {
    title: { type: String },
    layout: { type: String },
  },

  components: {
    Icons,
    TodoItem,
  },

  data() {
    return {
      tasks: [],
      showSeparateLists: true,
    };
  },

  /* Gjør at den husker, selvom man er ute fra siden.. Gjør at hvis localState finnes skal metoden;returnTasksLocally brukes, som returnerer alle objektene i "todo-list-items" som er i local storage til parse (tall)*/
  created() {
    const localState = this.returnTasksLocally();

    if (localState) {
      this.tasks = localState;
    }
  },

  computed: {
    todoTasks() {
      return this.tasks.filter((task) => task.done === false);
    },

    completedTasks() {
      return this.tasks.filter((task) => task.done === true);
    },
  },

  methods: {
    /* pusher et objekt til arrayet 'tasks' med en random id, ingen tekst og done false */
    addTask() {
      this.tasks.push({ id: this.createID(), text: "", done: false });
      this.storeTasksLocally();
    },

    /* splicer  */
    removeTask(task) {
      const taskIndex = this.tasks.findIndex(
        (task_in_tasks) => task_in_tasks.id === task.id
      );
      this.tasks.splice(taskIndex, 1);
      this.storeTasksLocally();
    },

    doneTask(task) {
      const taskIndex = this.tasks.findIndex(
        (task_in_tasks) => task_in_tasks.id === task.id
      );
      this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
      this.storeTasksLocally();
    },

    createID() {
      return Math.random().toString(36).slice(2);
    },

    /* Lager  en key i local storage som heter "todo-list-items"*/
    storeTasksLocally() {
      window.localStorage.setItem(
        "todo-list-items",
        JSON.stringify(this.tasks)
      );
    },

    /* returnerer "todo-lidt-items" fra localStorage fra string til til parse */
    returnTasksLocally() {
      return JSON.parse(window.localStorage.getItem("todo-list-items"));
    },
  },
};
</script>

<style>
.todo-list {
  /* 
			variabler fra figma 
		*/

  --background: #f0ebad;
  --foreground: #000000;
  --inactive: #b0b0b0;
  --highlight: #ff2e00;
  --border-radius: 0.5em;

  position: relative;
  width: 40vw;
  height: 80vh;
  background: palegoldenrod;
  padding: 1em;
  display: flex;
  flex-flow: column nowrap;
}

.todo-list__header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  margin-bottom: 0.5em;
}

.todo-list__title {
  font-size: 0.7em;
}

.todo-list__add-new {
  --size: 1em;

  min-width: var(--size);
  min-height: var(--size);
  width: var(--size);
  height: var(--size);
}

.todo-list__add-new line {
  stroke: black;
}

.todo-list__add-new:hover line {
  stroke: red;
}

.todo-list__separator {
  border: 1px solid rgb(87, 68, 39);
  margin: 1em 0;
  opacity: 0.5;
}

.todo-list__content {
  overflow: scroll;
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 2;
  color: palegreen;
  z-index: 0;
}
</style>




