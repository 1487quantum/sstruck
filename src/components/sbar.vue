<template>
  <div class="sbar col-4 flex-column">
    <h1>{{title}}</h1>
    <p>{{slogan}}</p>
    <hr class="col-8"/>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link" href="#">Home</a>
      <a class="nav-link active" href="#">My Cards</a>
      <a class="nav-link" href="#">Watchlist</a>
      <a class="nav-link " href="#">Settings</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'sbar',
  data() {
    return{
      title: 'StockStruck',
      slogan: 'Find the stocks you love!',
    }
  }
}
</script>

<style>
.sbar {
  position: absolute;
  display: flex;
  margin: 50px;
  width: 300px;
}
</style>
