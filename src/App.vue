<template>
  <div id="app">
    <sbar/>
    <router-view />
  </div>
</template>

<script>
import sbar from "@/components/sbar";
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

export default {
  name: 'App',
  components: {
    sbar,
  },
  data() {
    return{
      title: 'StockStruck',
      slogan: 'Find the stocks you love!',
    };
<<<<<<< Updated upstream
  },
  methods: {
    handleCardAccepted() {
      console.log("handleCardAccepted");
    },
    handleCardRejected() {
      console.log("handleCardRejected");
    },
    handleCardSkipped() {
      console.log("handleCardSkipped");
    },
    removeCardFromDeck() {
      this.stockList.shift();
    }
=======
>>>>>>> Stashed changes
  }
}
</script>

<style lang="scss">
@import "./styles/mixins.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;

}
</style>
