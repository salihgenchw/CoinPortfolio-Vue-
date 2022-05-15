<template>
  <fieldset class="form">
    <legend>AddCoin</legend>
    <label for="coinname">CoinName : </label>
    <input type="text" id="coinname" v-model="coinName" />
    <label for="quantity">Quantity : </label>
    <input type="number" id="quantity" v-model="quantity" />
    <label for="coinPrice">CoinPrice : </label>
    <input type="number" id="coinPrice" v-model="coinPrice" />
    <label for="date">Date : </label>
    <input type="date" id="date" v-model="date" />
    <button class="saveBtn" @click="save">Save</button>
  </fieldset>
</template>

<script>
import { eventBus } from "../main";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      id: "",
      coinName: "",
      quantity: null,
      coinPrice: null,
      date: "",
      tradeList: [],
    };
  },
  created() {
    localStorage.getItem("tradeList")
      ? (this.tradeList = JSON.parse(localStorage.getItem("tradeList")))
      : (this.tradeList = []);
    eventBus.$on("tradeList", (trade) => {
      this.tradeList = trade;
    });
  },
  methods: {
    save() {
      this.id = uuidv4();
      this.settoLS();
      eventBus.$emit("tradeList", this.tradeList);
      this.coinName = "";
      this.quantity = null;
      this.coinPrice = null;
      this.date = "";
    },
    gettoLS() {
      if (localStorage.getItem("tradeList")) {
        this.tradeList = JSON.parse(localStorage.getItem("tradeList"));
      } else {
        this.tradeList = [];
      }
      return this.tradeList;
    },

    settoLS() {
      this.tradeList = this.gettoLS();
      this.tradeList.push({
        id: this.id,
        coinName: this.coinName,
        quantity: this.quantity,
        coinPrice: this.coinPrice,
        date: this.date,
      });
      localStorage.setItem("tradeList", JSON.stringify(this.tradeList));
    },
  },
};
</script>

<style>
label {
  cursor: pointer;
}
input:not(:first-child) {
  margin-bottom: 10px;
  width: 100%;
  border: 0;
  border-bottom: 1px solid rgb(124, 16, 16);
  padding: 5px;
  font-size: 1.2em;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid whitesmoke;
  padding: 20px;
  border-radius: 5px;
  width: 70%;
  margin: 0 auto;
}

.saveBtn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: rgb(195, 7, 249);
  background: linear-gradient(
    22deg,
    rgba(195, 7, 249, 0.8393732492997199) 0%,
    rgba(240, 1, 152, 1) 98%
  );
  color: whitesmoke;
  width: 100%;
}
.saveBtn:hover {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: rgb(195, 7, 249);
  background: linear-gradient(
    22deg,
    rgba(240, 1, 152, 1) 0%,
    rgba(195, 7, 152, 0.8393732492997199) 98%
  );
  color: whitesmoke;
  width: 100%;
  /* transition: 1300ms all ease; */ /* Not Working mk */
}

@media only screen and (max-width: 600px) {
  .form {
    width: 75%;
  }
}
</style>
