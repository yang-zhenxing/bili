<template>
  <div id="app">
    <top-com class="header"></top-com>
    <main-com></main-com>
  </div>
</template>

<script>
  import topCom from './components/top.vue'
  import mainCom from './components/main.vue'
  export default {
    name: 'App',
    components: {
      topCom,
      mainCom
  } 
}
</script>

<style>
*{
  padding: 0;margin: 0;box-sizing: border-box;
}
body{
  width: 100vw;
  height: 100vh;
  min-width: 1228px;
}
.header{
  height: 80px;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
