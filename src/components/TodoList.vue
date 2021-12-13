<template>
  <div class="todo">
    <div class="todo__header">
      <input
        v-model="task"
        class="header__input"
        type="text"
        placeholder="Legg til oppgave"
      />
      <button @click="submitTask" class="header__submit">Send inn</button>
    </div>
    <table class="todo__table">
      <thead>
        <th class="table__header table__header__task-status">Oppgave</th>
        <th class="table__header table__header__task-status">Status</th>
        <th class="table__header table__header__svg">Rediger</th>
        <th class="table__header table__header__svg">Slett</th>
      </thead>

      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td class="table__data">
            <span :class="{ finishedLineThrough: task.status === 'Ferdig' }">{{
              task.name
            }}</span>
          </td>
          <td class="table__data">
            <button
              @click="changeStatus(index)"
              :class="{
                redDone: task.status === 'Må gjøre',
                greenTodo: task.status === 'Ferdig',
              }"
            >
              {{ task.status }}
            </button>
          </td>
          <td class="table__data">
            <button @click="editTask(index)">
              <span class="table-body__edit-svg">
                <img src="/images/edit.svg" alt="" />
              </span>
            </button>
          </td>
          <td class="table__data">
            <button @click="deleteTask(index)">
              <span class="table-delete-svg">
                <img src="/images/trash.svg" alt=""
              /></span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: "",
      editedTask: null,
      availableStatuses: ["Må gjøre", "Ferdig"],

      tasks: [
        {
          name: "Gjøre lekser",
          status: "Må gjøre",
        },
      ],
    };
  },

  /* If localState exists make tasks = localSate wich triggers the returnTaskLocally method */
  created() {
    const localState = this.returnTasksLocally();

    if (localState) {
      this.tasks = localState;
    }
  },

  methods: {
    /* If the submit button is clicked, but nothing is written in the input, return nothing.
       If the edit button has been clicked, the task that is written in the input with status 'må gjøre' is pushed.
       editedTask's name (the task) gets put into the input, here you can edit it and the edited version gets pushed when the submit task is clicked. 
       Makes the input emty after the task has been pushed, so that you can write a new task without deleting the previos tasks text. */
    submitTask() {
      if (this.task.length === 0) {
        return;
      }

      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: "Må gjøre",
        });
      } else {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }

      this.task = "";
      this.storeTasksLocally();
    },

    /* When the delete button has been clicked the task that has been clicked gets spliced. */
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.storeTasksLocally();
    },

    /* When the edit button is clicked, the task name gets put intp the input
       editedTask is null, but gets changed to an index, so that the old task gets uptated, and a new task with the updated task gets pushed */
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
      this.storeTasksLocally();
    },

    /* Finner indexen til current status i availibleStatuses. 
       Finds the index of the current status in availibleStatuses.
       Hvis newIndex blir trykka på blir indexen 1, hvis man trykker igjen blir indexen 0 slik at arrayet blir loopa. Denne måten funka bare med 2 statuser i arayet og ikke 3.
       If newIndex is clicked, the index changes to 1, if you click it again the index gets changed back to 0, this makes the array loop. (This worked with 2 indexes in the array and not 3).
       Changes status in tasks with what is beeing decided in the variabel over */
    changeStatus(index) {
      let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      if (newIndex++) {
        newIndex = 0;
      }
      this.tasks[index].status = this.availableStatuses[newIndex];
      this.storeTasksLocally();
    },

    /* Makes a key in localStorage called 'todo-list-items'
       Stringifies all the tasks in 'tasks' so they show in localStorage */
    storeTasksLocally() {
      window.localStorage.setItem(
        "todo-list-items",
        JSON.stringify(this.tasks)
      );
    },

    /* retrives data from the key in localStorage called 'todo-list-items' and returns a parsed version */
    returnTasksLocally() {
      return JSON.parse(window.localStorage.getItem("todo-list-items"));
    },
  },
};
</script>

<style>
.todo {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
}

.todo__header {
  margin-bottom: 1em;
  margin-top: 1em;
}

.header__input {
  padding: 0.2em;
  width: 45%;
  margin-left: 17%;
}

.header__submit {
  background: var(--component-green);
  padding: 0.2em;
  width: 20%;
}

.todo__table {
  background: white;
}

.table__header {
  padding: 0.2em;
  background: var(--component-yellow);
}

.table__data {
  padding: 0.2em;
  padding-left: 1.5em;
}

.table__header__task-status {
  width: 22%;
}

.table__header__svg {
  width: 8%;
}

/********** :class **********/
.finishedLineThrough {
  text-decoration: line-through;
}

.redDone {
  color: var(--score-wrong);
}

.greenTodo {
  color: var(--score-correct);
}
</style>