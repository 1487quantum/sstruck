<template>
  <div
    class="card p-2"
    style="width: 25rem;"
  >
  <img :src="getPath(this.c_img)" class="card-img-top p-2" alt="st-img">
  <div class="card-body ">
    <h5 class="card-title">{{c_ticker}}: {{c_title}}</h5>
    <h6 class="card-subtitle text-muted mb-2">${{c_price}} (<i class="fas fa-arrow-down" style="color:#FF0000" v-if="c_sym===0"></i><i class="fas fa-grip-lines" v-if="c_sym===1"></i><i class="fas fa-arrow-up" style="color:#00FF00" v-if="c_sym===2"></i> {{c_pct}}%)</h6>
    <p class="card-text text-justify">Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services. </p>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      c_img: 'elon',
      c_title: 'Tesla Inc',
      c_ticker: 'TSLA',
      c_price: 816.04,
      c_pct: 3,
      c_sym: 0,
    };
  },
  methods:{
    getPath(image) {
            return require('@/assets/' + image + '.png');
        }
  }
}
</script>
