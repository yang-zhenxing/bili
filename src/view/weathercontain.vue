<template>
  <div>
      <search-inp></search-inp>
      <ul class="resultul">
          <li v-for="(item, index) in weather" :key="index">
              <h2>{{item.type}}</h2>
              <h4>{{item.low}}~{{item.high}}</h4>
              <p>{{item.date}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import searchInp from './search'
import axios from 'axios'    
export default {
    data(){
        return {
            city:'',
            weather:[]
        }
    },
    created() {
        console.log(this.$route.query.q);
        axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.$route.query.q).then(res=> {
            console.log(res.data.data.forecast);
            this.weather = res.data.data.forecast
        })
    },
    components:{
        searchInp:searchInp
    }}
</script>

<style>
.resultul{
    display: flex;
    margin-top: 150px;
}
ul.resultul li{
    list-style: none;
    flex: 1;
    height: 250px;
    display: grid;
    grid-template-rows: 60px 1fr 40px;
    justify-items: center;
    align-items: center;
}
ul.resultul li h2{
    color: #f60;
    font-size: 26px;
}
ul.resultul li h2,
ul.resultul li h4{
    
}
</style>