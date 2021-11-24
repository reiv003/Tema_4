<template>
  <div>Timeplan</div>

  <table>
    <thead>
      <tr>
        <th>Emne</th>
        <th>Dato</th>
        <th>Kl.</th>
        <th>Rom</th>
        <th>Bygg</th>
        <th>Lærer</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Matte 1</td>
        <td>Man 01.12.21</td>
        <td>10.00 - 12.00</td>
        <td>U45</td>
        <td>Hovedbygget</td>
        <td>Petter Petterson</td>
      </tr>
      <tr>
        <td>Norsk skriftlig</td>
        <td>Man 01.12.21</td>
        <td>12.00 - 14.00</td>
        <td>201</td>
        <td>Nybygget</td>
        <td>Oline Jonsen</td>
      </tr>
      <tr>
        <td>Naturfag</td>
        <td>Tir 02.12.21</td>
        <td>10.00 - 12.00</td>
        <td>U45</td>
        <td>Hovedbygget</td>
        <td>Petter Petterson</td>
      </tr>
      <tr>
        <td>Historie</td>
        <td>Ons 03.12.21</td>
        <td>09.00 - 14.00</td>
        <td>231</td>
        <td>Sidebygget</td>
        <td>Gary Smith</td>
      </tr>
    </tbody>
  </table>
  <button @click="sort_table">Sorter</button>
</template>

<script>
  export default {
    data() {
      return {
        schoolClasses: [
          {
            subject: "Matte 1",
            date: "Man" + "01.12.21",
            time: "10.00 - 12.00",
            room: "U45",
            building: "Hovedbygget",
            teacher: "Petter Petterson",
          },
          {
            subject: "Norsk skriftlig",
            date: "Tir" + "02.12.21",
            time: "12.00 + 14.00",
            room: "201",
            building: "Nybygget",
            teacher: "Oline Jonsen",
          },
          {
            subject: "Naturfag",
            date: "Man" + "01.12.21",
            time: "10.00 + 12.00",
            room: "U45",
            building: "Hovedbygget",
            teacher: "Petter Petterson",
          },
          {
            subject: "Historie",
            date: "Ons" + "03.12.21",
            time: "09.00 + 14.00",
            room: "231",
            building: "Sidebygget",
            teacher: "Gary Smith",
          },
          {
            subject: "Engelsk",
            date: "Tor" + "04.12.21",
            time: "08.00 + 11.00",
            room: "132",
            building: "Nybygget",
            teacher: "Trym Dalen",
          },
        ],
      };
    },

    methods: {
      sort_table() {
        console.log("table sorted");
      },
    },
  };
</script>

<style></style>