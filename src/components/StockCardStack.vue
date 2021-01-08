<template>
  <div class="stcards col-lg-4 mx-auto ">
    <StockCard
    v-for="(card, index) in stcards"
    :key="card"
    :stcard="card"
    :is-current="index === 0"
    @cardAccepted="$emit('cardAccepted');"
      @cardRejected="$emit('cardRejected');"
      @cardSkipped="$emit('cardSkipped');"
      @hideCard="$emit('hideCard');"
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

<style lang="scss" scoped>
.cards {
  position: relative;
  display: flex;
  margin: 50px;
  width: 500px;
}
</style>
