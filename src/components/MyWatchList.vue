<template>
  <div class="mlist">
  <h4 style="padding: 8px 2px;" >My Watchlist</h4>
  <p> {{mwatchlist}}</p>
</div>

</template>

<script>

export default {
props: {
  mwatchlist: {
    type: Array,
    required: true
  }
},
}
</script>

<style>
.mlist{
  width: 250px;
  padding: 5px 50px;
  margin: 5px 50px;
  box-shadow: 0 1px 3px rgba(0,0,0, 0.15);
}
</style>
