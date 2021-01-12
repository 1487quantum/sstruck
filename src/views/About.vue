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
  <br/>

  <div class="container-fluid">
    <h3>All ETP</h3>
    <!--ul>
    <li v-for="i in ss" :key="i">
    <span v-if="i.type=='ETP'"> {{ i }}</span>
  </li>
</ul-->
<div class="card-deck all_etp" >
  <div class="row">
   <div class="col-md-2"  v-for="i in etpList" :key="i">
  <div class="card mt-4">
    <!--img class="card-img-top" src="@/assets/logo.png" alt="Card image cap"-->
    <div class="card-body">
      <h4 class="card-title">{{i.symbol}}</h4>
      <p class="card-text">{{i.description}}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">{{i.type}}</small>
    </div>
  </div>
  </div>
</div>


</div>
</div>
<!--loading spinner-->
<div v-if="loadingList" class="d-flex justify-content-center load-dialog">
  <div class="spinner-border load-dialog-spinner " role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <br/>
</div>

</template>


<script>
import sList from "@/dat/stocklist.json";

export default {
  created() {
    const tokenid='';
    this.loadingList = true;
    // GET request using fetch with error handling
    fetch("https://finnhub.io/api/v1/stock/symbol?exchange=US&token="+tokenid)
    .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      this.loadingList = false;
      //console.log(data);
      this.etpList = data.filter(function (item) {
        return item.type.match("ETP")
      })
    })
    .catch(error => {
      console.error("There was an error!", error);
    });

  },
  data() {
    return{
      stkLst: sList,
      etpList: [],
      loadingList: true,
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

.all_etp{
  padding: 15px 5px;
}

.load-dialog{
  margin:60px auto;
  display: table;
  width: 100px;
  align: center;
  box-shadow: 0 1px 3px rgba(0,0,0, 0.15);
}

.load-dialog-spinner{
  margin: 20px;
}
</style>
