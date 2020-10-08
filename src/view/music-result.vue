<template>
  <div class="card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{key}}</span>
          <el-button style="float: right; padding: 3px 0" type="text">播放全部</el-button>
        </div>
        <div v-for="(item,index) in musicList" :key="index" class="text item" @dblclick="playMusic(item.id)">
          <div>
            <el-row>
              <el-col :span="20"><div class="grid-content bg-purple">
                <span>{{index+1}}</span>
                <ul class="cardul">
                  <li><img src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg" alt=""></li>
                  <li class="songname">{{item.name}}</li>
                  <li>{{item.artists[0].name}}</li>
                  <li>播放次数:{{item.duration | dura}}</li>
                </ul>
              </div></el-col>
              <el-col :span="4"><div class="grid-content icon bg-purple-light">
                <i class="el-icon-share"></i></div></el-col>
            </el-row>
          </div>
        </div>
      </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // props:['key'],
  filters:{
    dura(val){
      if(val>100000){
        return parseInt(val/10000)+'万次'
      }else{
        return val+'次'
      }
    }
  },
  methods:{
    playMusic(id){
      console.log(this.$parent);
      axios({
        url: "https://autumnfish.cn/song/url",
        methods: "get",
        params: {
          id
        }
      }).then(res => {
        let url = res.data.data[0].url;
        // console.log(this.$parent.musicUrl)
        // 设置给父组件的 播放地址
        this.$parent.$parent.musicUrl = url;
      });
    }
  },
  data() {
    return {
      key:'',
      musicList:{}
    }
  },
  created() {
    // console.log(this.$router);
    console.log(this.$router.app._route.params.key);
    this.key = this.$router.app._route.params.key;
    axios({
        url: "https://autumnfish.cn/search",
        methods: "get",
        params: {
          keywords:this.key,
          limit: 15,
          type: 1
        }
      }).then(res=>{
        // console.log();
        this.musicList = res.data.result.songs;
        console.log(this.musicList);
      })
  },
}
</script>

<style>
  .card .el-card{
    width: 100%;
    margin-top: 40px;
    max-height: 500px;
    overflow-y: scroll;
  }
  .card .el-card .cardul{
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .songname{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 142px;
    margin-right: 50px;
  }
  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  /* card */
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .bg-purple span{
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-image:linear-gradient(to right,#95afc0,#c7ecee);
    text-align: center;
    display:block;
    border-top-left-radius: 4px;
  }
  .bg-purple ul{
    padding-left: 50px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bg-purple ul li{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bg-purple ul li img{
    height: 100%;
    width: 60px;
  }
  .bg-purple ul li:last-child{
    font-size: 12px;
    font-weight: 900;
  }
  /*  */
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
    display: flex;
    
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 40px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>