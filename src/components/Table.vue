<template>
  <div class="table-container">
    <div>Timeplan</div>

    <table>
      <thead>
        <tr>
          <th class="table-container__tr" @click="sort_table_by_subject">
            Emne
          </th>
          <th class="table-container__tr" @click="sort_table_by_date">Dato</th>
          <th class="table-container__tr">Kl.</th>
          <th class="table-container__tr">Rom</th>
          <th class="table-container__tr">Bygg</th>
          <th class="table-container__tr">Lærer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="schoolClass in schoolClasses">
          <td>{{ schoolClass.subject }}</td>
          <td>{{ schoolClass.date }}</td>
          <td>{{ schoolClass.time }}</td>
          <td>{{ schoolClass.room }}</td>
          <td>{{ schoolClass.building }}</td>
          <td>{{ schoolClass.teacher }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="sort_table_by_subject">Sorter</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        schoolClasses: [
          {
            subject: "Matte 1",
            date: "2021-12-01",
            time: "10.00 - 12.00",
            room: "U45",
            building: "Hovedbygget",
            teacher: "Petter Petterson",
          },
          {
            subject: "Norsk skriftlig",
            date: "2021-12-02",
            time: "12.00 - 14.00",
            room: "201",
            building: "Nybygget",
            teacher: "Oline Jonsen",
          },
          {
            subject: "Naturfag",
            date: "2021-12-01",
            time: "10.00 - 12.00",
            room: "U45",
            building: "Hovedbygget",
            teacher: "Petter Petterson",
          },
          {
            subject: "Historie",
            date: "2021-12-03",
            time: "09.00 - 14.00",
            room: "231",
            building: "Sidebygget",
            teacher: "Gary Smith",
          },
          {
            subject: "Engelsk",
            date: "2021-12-04",
            time: "08.00 - 11.00",
            room: "132",
            building: "Nybygget",
            teacher: "Trym Dalen",
          },
          {
            subject: "Nynorsk",
            date: "2021-12-03",
            time: "08.00 - 11.00",
            room: "303",
            building: "Sidebygget",
            teacher: "Skjalg Dalen",
          },
          {
            subject: "Algebra",
            date: "2021-11-31",
            time: "16.00 - 22.00",
            room: "135",
            building: "Nybygget",
            teacher: "Gøril Zachariassen",
          },
        ],
      };
    },

    methods: {
      sort_table_by_date() {
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

      sort_table_by_subject() {
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
    },
  };
</script>

<style>
  .table-container {
    font-size: 0.8em;
    display: inline-block;
    background-color: white;
  }

  .table-container__tr {
    background: cadetblue;
    padding: var(--padding);
  }

  .table-container__tr:hover {
    background-color: teal;
  }

  /* @media only screen and (max-width: 600px) {
      .table-container {
        font-size: 0.3em;
      }
    } */
</style>