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
  width: 100%;
  max-width: 1008px;
}
</style>
