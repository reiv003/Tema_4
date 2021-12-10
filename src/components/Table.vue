<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th class="table-container__tr"><button @click="sortTableBySubject">Emne</button>
          </th>
          <th class="table-container__tr"><button @click="sortTableByDate">Dato</button></th>
          <th class="table-container__tr"><button @click="sortTableByTime">Kl.</button></th>
          <th class="table-container__tr"><button @click="sortTableByRoom">Rom</button></th>
          <th class="table-container__tr"><button @click="sortTableByTeacher">Lærer</button></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="schoolClass in schoolClasses">
          <td>{{ schoolClass.subject }}</td>
          <td>{{ schoolClass.date }}</td>
          <td>{{ schoolClass.time }}</td>
          <td>{{ schoolClass.room }}</td>
          <td>{{ schoolClass.teacher }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //data is based on classes from UiO: https://tp.uio.no/uio/timeplan/emner.php?fak=185150000&inst=185151200&semester=22v
        schoolClasses: [
          {
            subject: "KJM9250: Organisk NMR spektroskopi",
            date: "2022-02-01",
            time: "12.15 - 14.00",
            room: "KJM Sem Curie",
            teacher: "F. Rise",
          },
          {
            subject: "KJM4050: Kjemididaktikk",
            date: "2022-01-17",
            time: "10.15 - 12.00",
            room: "VU40",
            teacher: "K. Fægri",
          },
          {
            subject: "KJM5951: Radiofarmasøytisk kjemi",
            date: "2022-01-26",
            time: "14.15 - 16.00",
            room: "Sem Avogadro",
            teacher: "P. Riss",
          },
          {
            subject: "KJM5320: BIOCAT - Strukturbiologiske teknikker",
            date: "2022-03-21",
            time: "14.00 - 18.00",
            room: "KB Hox 3205",
            teacher: "N. Sekulic",
          },
          {
            subject: "KJM9250: Organisk NMR spektroskopi",
            date: "2022-02-28",
            time: "10.00 - 15.00",
            room: "KJM Sem Curie",
            teacher: "F. Rise",
          },
          {
            subject: "KJM4050: Kjemididaktikk",
            date: "2022-01-24",
            time: "10.05 - 12.00",
            room: "VU27",
            teacher: "S. Tveit",
          },
          {
            subject: "MENA3300: Nanoteknologi",
            date: "2022-01-18",
            time: "12.15 - 16.00",
            room: "KJM Aud 3",
            teacher: "A. Koposov",
          },
        ],
      };
    },

    methods: {

      /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      The compare function argument is necessary to sort objects in an array. 
      The way we've implemented sort requires a new method for each data value/table column, and for this method to be applied to the th in question. 
      This does not scale well, and should be changed to take in an arbitrary value from the array's objects*/
      sortTableByDate() {
        this.schoolClasses.sort(function (a, b) {
          if (a.date < b.date) {
            return -1;
          }
          if (a.date > b.date) {
            return 1;
          }
          return 0;
        });
      },

      sortTableByTime() {
        this.schoolClasses.sort(function (a, b) {
          if (a.time < b.time) {
            return -1;
          }
          if (a.time > b.time) {
            return 1;
          }
          return 0;
        });
       },

      sortTableBySubject() {
        this.schoolClasses.sort(function (a, b) {
          let subject_a = a.subject.toLowerCase();
          let subject_b = b.subject.toLowerCase();

          if (subject_a < subject_b) {
            return -1;
          }
          if (subject_a > subject_b) {
            return 1;
          }
          return 0;
        });
      },

      sortTableByRoom() {
        this.schoolClasses.sort(function (a, b) {
          let room_a = a.room.toLowerCase();
          let room_b = b.room.toLowerCase();

          if (room_a < room_b) {
            return -1;
          }
          if (room_a > room_b) {
            return 1;
          }
          return 0;
        });
      },

      sortTableByTeacher() {
        this.schoolClasses.sort(function (a, b) {
          let teacher_a = a.teacher.toLowerCase();
          let teacher_b = b.teacher.toLowerCase();

          if (teacher_a < teacher_b) {
            return -1;
          }
          if (teacher_a > teacher_b) {
            return 1;
          }
          return 0;
        });
      },
    },
  };
</script>

<style>
  .table-container {
    font-size: 0.8em;
    display: inline-block;
    background-color: #ffe6f1;
  }

  .table-container__tr {
    background: var(--component-pink);
    padding: var(--padding);
  }

  .table-container__tr:hover {
    background-color: #d3709e;
  }

  /*makes a wider area of the th clickable, but not all */
  th button {
    width: 100%;
    height: 100%;
  }
</style>