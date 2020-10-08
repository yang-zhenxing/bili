<template>
  <div id="search">
      <el-input
        placeholder="请输入搜索的城市"
        prefix-icon="el-icon-search"
        @keyup.enter="begin(input)"
        v-model="input">
      </el-input>
      <el-button plain @click="search">开始</el-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            input:'',
        }
    },
    methods: {
        begin(input){
            this.$emit('begin',input)
        },
        search(){
            if(this.input==''){
                this.$message.warning("请输入一些内容");
                return false
            }else{
                this.$router.push('/weathercontain?q='+this.input)
            }
        }
    },
}
</script>

<style>
#search{
    display: flex;
    justify-content: center;
}
</style>