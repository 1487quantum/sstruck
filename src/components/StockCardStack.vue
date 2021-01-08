<template>
<div class="stcards">
<StockCard
v-for="(card, index) in stcards"
:key="card"
:stcard="card"
:is-current="index === 0"
/>
</div>
</template>

<script>
import StockCard from "@/components/StockCard";
  export default {
    components: {
      StockCard,
    },
    props: {
      stcards: {
        type: Array,
        required: true
      }
    }
  };
</script>
