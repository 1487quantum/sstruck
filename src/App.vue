<template>
  <div id="app">
    <sbar/>
    <router-view />
  </div>
</template>

<script>
import sbar from "@/components/sbar";

export default {
  name: 'App',
  components: {
    sbar,
  },
  setup() {
      // Get toast interface
      const toast = useToast();
      return { toast }
    },
  data() {
    return{
      title: 'StockStruck',
      slogan: 'Find the stocks you love!',
    };
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
