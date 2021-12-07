<template>
  <div class="todo-box">
    <div class="todo-box__header">
      <input
        v-model="task"
        class="header__input"
        type="text"
        placeholder="Legg til oppgave her"
      />
      <button @click="submitTask" class="header__submit">Send inn</button>
    </div>
    <table class="todo-box__table">
      <thead>
        <th class="table__task">Oppgave</th>
        <th class="table__status">Status</th>
        <th class="table__edit">#</th>
        <th class="table__delete">#</th>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span :class="{ finished: task.status === 'Ferdig' }">{{
              task.name
            }}</span>
          </td>
          <td>
            <span
              @click="changeStatus(index)"
              class="table-body__status"
              :class="{
                red: task.status === 'Må gjøre',
                yellow: task.status === 'Holder på',
                green: task.status === 'Ferdig',
              }"
              >{{ task.status }}</span
            >
          </td>
          <td>
            <div @click="editTask(index)">
              <span>edit</span>
            </div>
          </td>
          <td>
            <div @click="deleteTask(index)">
              <span>delete</span>
            </div>
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
      availableStatuses: ["Må gjøre", "Holder på", "Ferdig"],

      tasks: [
        {
          name: "Gjøre lekser",
          status: "Må gjøre",
        },
      ],
    };
  },

  methods: {
    submitTask() {
      if (this.task.length === 0) return;

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
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

    changeStatus(index) {
      let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.availableStatuses[newIndex];
    },
  },
};
</script>

<style>
.todo-box {
  background: palegoldenrod;
  width: 80vw;
  height: 20vw;
}

.todo-box__header {
  margin-bottom: 1em;
}

.header__submit {
  background: paleturquoise;
}

.table__task {
  width: 30vw;
  background: cadetblue;
}

.table__status {
  width: 15vw;
  background: coral;
}

.table__edit {
  width: 8vw;
  background: palevioletred;
}

.table__delete {
  width: 8vw;
  background: plum;
}

.table-body__status {
  cursor: pointer;
}

.finished {
  text-decoration: line-through;
}

.red {
  color: red;
}

.yellow {
  color: orange;
}

.green {
  color: green;
}
</style>