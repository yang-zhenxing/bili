<template>
  <div class="music-con">
    <div class="banner-parent">
        <el-carousel :interval="4000" type="card" height="200px" class="banner">
        <el-carousel-item v-for="(item,index) in lunboImg" :key="index">
            <!-- <h3 class="medium">{{ item }}</h3> -->
            <img :src="item.imageUrl" alt="">
        </el-carousel-item>
    </el-carousel>
    </div>
    <el-main>
        <div class="search">
            <el-input
                placeholder="请输入歌曲名称"
                v-model="input"
                clearable
                @keyup.enter="chooseMusic()">
            </el-input>
            <el-button type="primary" icon='el-icon-search' @click="chooseMusic">查询</el-button>
        </div>
        <router-view></router-view>
    </el-main>
    <div class="el-footer" v-if="audioShow">
        <audio :src="musicUrl" controls autoplay></audio>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {   
    data() {
        return {
            audioShow:true,
            musicUrl:'',
            input:'',
            lunboImg:[]
        }
    },
    methods:{
        chooseMusic(){
            if(this.input==''){
                this.$message.warning("请输入一些内容");
            }else{
                console.log(this.input);
                // console.log(this.$router);
                this.$router.push('/music/'+this.input)
            }
        }
    },
    mounted() {
        axios({
            url:'https://autumnfish.cn/banner',
            methods:'get'
        }).then(res=>{
            // console.log(res.data.banners);
            this.lunboImg=res.data.banners;
        });
        },
}
</script>

<style>
    .music-con{
        height: 100%;
    }
    .search{
        display: flex;
    }
    .banner-parent{
        display: flex;
        justify-content: center;
    }
    .banner{
        width: 75%;
        min-width: 1000px;
        /* flex: 1; */
    }
    .banner img{
        height: 200px;
        width: 577px;
    }
    .el-footer{
        position: fixed;
        bottom: 0;
        width: 100vw;
        left: 0;
    }
    .el-footer audio{
        width: 100%;
        outline: none;
    }
    /* 卡片 */
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>