<template>
  <div id="cards_p">
  <StockCardStack
  :stcards="stockList"
  @cardAccepted="handleCardAccepted"
  @cardRejected="handleCardRejected"
  @cardSkipped="handleCardSkipped"
  @hideCard="removeCardFromDeck"
  />
</div>
</template>

<script>
import StockCardStack from "@/components/StockCardStack";
import { useToast } from "vue-toastification";

export default {
  components: {
    StockCardStack,
  },
  setup() {
      // Get toast interface
      const toast = useToast();
      return { toast }
    },
  data() {
    return{
      stockList: [
        {
          c_img: 'elon.png',
          c_title: 'Tesla Inc',
          c_ticker: 'TSLA',
          c_price: 816.04,
          c_pct: 1.0,
          c_sym: 1,
          c_desc: "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services. "
        },
        {
          c_img: 'goog.jpg',
          c_title: 'Google',
          c_ticker: 'GOOG',
          c_price: 231.47,
          c_pct: 0.5,
          c_sym: 0,
          c_desc: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the Big Five technology companies in the U.S."
        },
        {
          c_img: 'logo.png',
          c_title: 'Alibaba',
          c_ticker: 'BABA',
          c_price: 231.47,
          c_pct: 1.5,
          c_sym: 2,
          c_desc: "Alibaba Group Holding Limited, also known as Alibaba Group and as Alibaba.com, is a Chinese multinational technology company specializing in e-commerce, retail, Internet, and technology."
        },
      ]
    }
  },
  methods: {
    handleCardAccepted() {
      console.log("handleCardAccepted");
      this.toast.success("Added to Watchlist!", {
          timeout: 3000
        });
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
  }
}
</script>
