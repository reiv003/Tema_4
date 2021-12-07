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
        <th class="todo-box__table-th table__task">Oppgave</th>
        <th class="todo-box__table-th table__status">Status</th>
        <th class="todo-box__table-th table__svg">Rediger</th>
        <th class="todo-box__table-th table__svg">Slett</th>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td class="todo-box__table-td">
            <span :class="{ finished: task.status === 'Ferdig' }">{{
              task.name
            }}</span>
          </td>
          <td class="todo-box__table-td">
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
          <td class="todo-box__table-td">
            <div @click="editTask(index)">
              <span class="table-body__edit-svg"
                ><svg
                  width="33"
                  height="35"
                  viewBox="0 0 33 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.77983 23.2584L3.10522 29.4099L4.97745 31.4159L11.2628 28.6076"
                    stroke="black"
                  />
                  <path
                    d="M27.9763 10.6037L21.8731 4.81722L25.1869 1.23078L31.4227 7.14025L27.9763 10.6037Z"
                    fill="black"
                    stroke="black"
                  />
                  <path
                    d="M11.0896 28.85L5.60287 23.3971L20.166 7.18634L26.1887 12.881L11.0896 28.85Z"
                    fill="black"
                    stroke="black"
                  />
                  <path
                    d="M1 32.9949L3.10517 29.4424L4.9472 31.416L1.26315 33.3896L1 32.9949Z"
                    fill="black"
                    stroke="black"
                  />
                </svg>
              </span>
            </div>
          </td>
          <td class="todo-box__table-td">
            <div @click="deleteTask(index)">
              <span class="table-delete-svg"
                ><svg
                  width="29"
                  height="34"
                  viewBox="0 0 29 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.75659 4.36948V1H19.0972V4.36948M4.03784 9.4237V32.0911H24.6253V9.11738M8.80347 14.0184V28.8748M14.5222 15.2437V27.6495M20.241 13.559V28.8748"
                    stroke="black"
                    stroke-width="2"
                  />
                  <path
                    d="M28 4.55792H1V9.41561H28V4.55792Z"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </span>
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
    /* Hvis submit knappen blir trykket, men det er ikke skrevt noe tekst return ingenting
       Hvis edit knappen ikke har blitt trykket pushes en task med et navn og status 'må gjøre'
       Navnet til editedTask blir putta inn i input, og redigert på og pusha som en oppdatert task  
       Gjør at inputen blir tom etter slik at man slipper å slette den forrige tasken for så å sikrive den nye */
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
       Bytter oppgave statusen med å bruke newIndex
    */
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
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 20vw;
  margin-left: 10vw;
  margin-bottom: 23vw;
}

.todo-box__header {
  margin-bottom: 1em;
  margin-top: 1em;
  margin-left: 23vw;
}

.header__input {
  padding: 0.1em;
}

.header__submit {
  background: rgb(111, 178, 180);
  padding: 0.2em;
}

.todo-box__table-th {
  padding: 0.2em;
}

.todo-box__table-td {
  padding: 0.2em;
  padding-left: 1.5em;
}

.todo-box__table {
  background: palegoldenrod;
}

.table__task {
  width: 30vw;
  background: goldenrod;
}

.table__status {
  width: 15vw;
  background: goldenrod;
}

.table__svg {
  width: 8vw;
  background: goldenrod;
}

/* :class */
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