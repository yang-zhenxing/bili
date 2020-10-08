<template>
  <div class="main">
      <el-container>
        <el-container class="main-aside">
            <el-aside width="400px" class="aside">
                <div id="tree">
                    <el-tree
                        class="tree"
                        :data="data"
                        accordion
                    >
                </el-tree>
                </div>
                <div class="routerlink">
                    <ul>
                        <li>
                            <router-link to='/music'>音乐</router-link>
                        </li>
                        <li>
                            <router-link to='/weather'>天气</router-link>
                        </li>
                    </ul>
                </div>
            </el-aside>
            <div class="main-contain">
                <router-view></router-view>
            </div>
        </el-container>
    </el-container>
    
  </div>
</template>

<script>
export default {
    name:'main',
    data() {
        return {
           data: [{
                label: '一级',
                children: [{
                label: '音乐',
            }]
            }, {
                label: '二级',
                children: [{
            label: '天气',
          }]
        }] 
        }
    },
}
</script>

<style>
.main{
    height: 100%;
}
.el-container,.main-aside{
  height: 100%;
}
.main-aside{
    display: flex;
}
.main-aside .aside{
    padding-left: 80px;
    padding-top: 50px;
}
.main-aside .aside .tree{
    height: 100%;
    position: relative;
}
#tree .tree{
    height: 300px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
}
#tree .tree .el-tree-node:nth-child(1){
    padding-bottom: 20px;
}
.main-aside .aside .tree span{
    font-size: 24px;
}
.routerlink{
    width: 100%;
}
.routerlink ul{
    list-style: none;
    display: grid;
    grid-template-rows: repeat(2,1fr);
    align-content: center;
    padding-left: 30px;
    height: 60px;
}
.routerlink ul li a{
    font-size: 18px;
    text-decoration: none;
    color: #303133;
    line-height: 30px;
}
.main-contain{
    flex: 1;
}
.el-footer audio{
    width: 100%;
}
</style>