<template>
  <h1>{{title}}</h1>
  <p>{{slogan}}</p>
  <hr class="col-lg-4"/>
  <login/>
</template>

<script>
import login from "@/components/login";

export default {
  components: {
    login
  },
  data() {
    return{
      title: 'StockStruck',
      slogan: 'Find the stocks you love!',
      followers:0,
      user:{
        id:1,
        username: 'hello_world'
      }
    }
  }
}
</script>
