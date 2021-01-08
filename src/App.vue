<template>
  <div id="app">
    <h1>{{title}}</h1>
    <p>{{slogan}}</p>
    <hr class="col-lg-4"/>
<StockCard/>
  </div>
</template>

<script>
import StockCard from "@/components/StockCard";

export default {
  name: 'App',
  components: {
    StockCard,
  },
  data() {
    return{
      title: 'StockStruck',
      slogan: 'Find the stocks you love!',
      followers:0,
      user:{
        id:1,
        username: 'hello_world'
      },
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
