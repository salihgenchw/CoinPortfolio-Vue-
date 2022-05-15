<template>
  <div id="app" class="container">
    <FormComp />
    <TradeList />
    <!-- <CoinWallet /> -->
  </div>
</template>

<script>
import FormComp from "@/components/FormComp";
// import CoinWallet from "@/components/CoinWallet";
import TradeList from "@/components/TradeList";

export default {
  name: "App",
  components: { FormComp, TradeList },
};
</script>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: rgb(40, 40, 40);
  color: whitesmoke;
}

.container {
  margin: 0 auto;
  max-width: 90%;
}

@media only screen and (max-width: 600px) {
  .container {
    max-width: 100%;
  }
}
</style>
