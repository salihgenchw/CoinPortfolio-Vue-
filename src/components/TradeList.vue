<template>
  <table v-if="tradelist.length > 0">
    <thead>
      <tr>
        <th>CoinName</th>
        <th>Quantity</th>
        <th>CoinPrice</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="trade in tradelist" :key="trade.id">
        <td>{{ trade.coinName }}</td>
        <td>{{ trade.quantity }}</td>
        <td>${{ trade.coinPrice }}</td>
        <td>{{ trade.date | moment("ll") }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      tradelist: [],
    };
  },
  created() {
    localStorage.getItem("tradeList")
      ? (this.tradelist = JSON.parse(localStorage.getItem("tradeList")))
      : (this.tradelist = []);
    eventBus.$on("tradeList", (trade) => {
      this.tradelist = trade;
    });
  },
};
</script>

<style>
table {
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  border: 3px solid whitesmoke;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
table thead tr {
  background: rgb(195, 7, 249);
  background: linear-gradient(
    22deg,
    rgba(195, 7, 249, 0.8393732492997199) 0%,
    rgba(240, 1, 152, 1) 98%
  );
}
table thead tr th {
  padding: 8px;
  font-size: 1.2em;
  border-bottom: 1px solid whitesmoke;
}
table tbody tr:hover {
  background-color: rgb(62, 62, 62);
}

tbody tr td {
  padding: 7px;
  border-bottom: 1px solid whitesmoke;
}

tbody tr:nth-child(even) {
  background-color: rgb(52, 52, 52);
}
</style>
