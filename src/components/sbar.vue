<template>
  <div class="sbar col-4 flex-column">
    <h1>{{title}}</h1>
    <p>{{slogan}}</p>
    <hr class="col-8"/>
    <nav class="nav nav-pills flex-column">
      <router-link class="nav-link " :to="{ name: 'Home' }">Home</router-link>
      <router-link class="nav-link " :to="{ name: 'Cards' }">Cards</router-link>
      <router-link class="nav-link " :to="{ name: 'Settings' }">Settings</router-link>
      <router-link class="nav-link " :to="{ name: 'About' }">About</router-link>


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
