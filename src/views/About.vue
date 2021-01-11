<template>
  <h1>About Page</h1>
  <div class="cdiv">
  <h4>All cards - Categories</h4>
  <ul>
    <li class="all_lst " v-for="(item,index) in stkLst" :key="item">
    {{ index }}
        <ul>
          <li v-for="i in item" :key="i">
         {{ i  }}
       </li>
     </ul>
    </li>
  </ul>
</div>
</template>


<script>
import sList from "@/dat/stocklist.json";

export default {
  data() {
    return{
      stkLst: sList,
    }
  }

}
</script>


<style>
.cdiv{
  margin:0px auto;
        display: table;
}

.all_lst{
  text-align: left;
}
</style>
