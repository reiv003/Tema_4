<template>
  <div class="todo">
    <div class="todo__header">
      <input
        v-model="task"
        class="header__input"
        type="text"
        placeholder="Legg til oppgave her"
      />
      <button @click="submitTask" class="header__submit">Send inn</button>
    </div>
    <table class="todo__table">
      <thead>
        <th class="todo__table-th table__task">Oppgave</th>
        <th class="todo__table-th table__status">Status</th>
        <th class="todo__table-th table__svg">Rediger</th>
        <th class="todo__table-th table__svg">Slett</th>
      </thead>

      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td class="todo__table-td">
            <span :class="{ finished: task.status === 'Ferdig' }">{{
              task.name
            }}</span>
          </td>
          <td class="todo__table-td">
            <button
              @click="changeStatus(index)"
              class="table-body__status"
              :class="{
                red: task.status === 'Må gjøre',
                yellow: task.status === 'Holder på',
                green: task.status === 'Ferdig',
              }"
            >
              {{ task.status }}
            </button>
          </td>
          <td class="todo__table-td">
            <button @click="editTask(index)">
              <span class="table-body__edit-svg">
                <img src="/images/edit.svg" alt="" />
              </span>
            </button>
          </td>
          <td class="todo__table-td">
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
    /* Hvis submit knappen blir trykket, men det er ikke skrevt noe tekst return ingenting
       Hvis edit knappen ikke har blitt trykket pushes en task med et navn og status 'må gjøre'
       Navnet til editedTask blir putta inn i input, og redigert på og pusha som en oppdatert task  
       Gjør at inputen blir tom etter slik at man slipper å slette den forrige tasken for så å sikrive den nye */
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
    },

    /* Når delete knappen blir trykket på splice som bare sletter den ene tasken */
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    /* Når man trykker på edit knappen blir task navnet flytta til inputen (task)
       editedTask er egentlig null, men blir endra til en index */
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

    /* Finner indexen til current status inni availebleStatuses
       Når newIndex er større en 2 som er mer lengden på arrayet, start på nytt på 0
       Bytter oppgave statusen med å bruke newIndex */
    changeStatus(index) {
      let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) {
        newIndex = 0;
      }
      this.tasks[index].status = this.availableStatuses[newIndex];
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

.todo__table-th {
  padding: 0.2em;
  background: var(--component-yellow);
}

.todo__table-td {
  padding: 0.2em;
  padding-left: 1.5em;
}

.todo__table {
  background: white;
}

.table__task {
  width: 20%;
}

.table__status {
  width: 20%;
}

.table__svg {
  width: 8%;
}

/* :class */
.finished {
  text-decoration: line-through;
}

.red {
  color: var(--score-wrong);
}

.yellow {
  color: var(--score-between);
}

.green {
  color: var(--score-correct);
}
</style>