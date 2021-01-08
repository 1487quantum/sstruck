<template>
  <div
    class="stcard card p-2"
    :class="{ isCurrent: isCurrent }"
    style="width: 30rem;"
  >
  <img :src="getPath(this.c_img)" class="card-img-top p-2" alt="st-img">
  <div class="card-body ">
    <h5 class="card-title">{{stcard.c_ticker}}: {{stcard.c_title}}</h5>
    <h6 class="card-subtitle text-muted mb-2">${{stcard.c_price}} (<i class="fas fa-arrow-down" style="color:#E74C3C" v-if="stcard.c_sym===0"></i><i class="fas fa-grip-lines" v-if="stcard.c_sym===1"></i><i class="fas fa-arrow-up" style="color:#2ECC71" v-if="stcard.c_sym===2"></i> {{stcard.c_pct}}%)</h6>
    <p class="card-text text-justify">{{stcard.c_desc}}</p>
  </div>
  </div>
</template>
<script>
export default {
  /*
  data() {
    return{
      c_img: 'elon',
      c_title: 'Tesla Inc',
      c_ticker: 'TSLA',
      c_price: 816.04,
      c_pct: 3,
      c_sym: 0,
      c_desc:"Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services. ",
    };
  },*/
  props: {
    stcard: {
      type: Object,
      required: true
    },
    isCurrent: {
      type: Boolean,
      required: true
    }
  },
  methods:{
    getPath(image) {
            return require('@/assets/' + image + '.png');
        }
  }
}
</script>
