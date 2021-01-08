<template>
  <div id="app">
    <h1>{{title}}</h1>
    <p>{{slogan}}</p>
    <hr class="col-lg-4"/>
  <StockCardStack
  :stcards="stockList"
  />
  </div>
</template>

<script>
import StockCardStack from "@/components/StockCardStack";

export default {
  name: 'App',
  components: {
    StockCardStack,
  },
  data() {
    return{
      title: 'StockStruck',
      slogan: 'Find the stocks you love!',
      stockList: [
        {
          c_img: 'elon',
          c_title: 'Tesla Inc',
          c_ticker: 'TSLA',
          c_price: 816.04,
          c_pct: 1.0,
          c_sym: 1,
          c_desc: "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services. "
        },
        {
          c_img: 'elon',
          c_title: 'Google',
          c_ticker: 'GOOG',
          c_price: 231.47,
          c_pct: 0.5,
          c_sym: 0,
          c_desc: "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services. "
        },
        {
          c_img: 'elon',
          c_title: 'Alibaba',
          c_ticker: 'BABA',
          c_price: 231.47,
          c_pct: 1.5,
          c_sym: 2,
          c_desc: "Alibaba Group Holding Limited, also known as Alibaba Group and as Alibaba.com, is a Chinese multinational technology company specializing in e-commerce, retail, Internet, and technology."
        },
      ],
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
