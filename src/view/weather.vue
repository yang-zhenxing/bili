<template>
  <div>
      <search-inp @begin="begin(input)"></search-inp>
  </div>
</template>

<script>
import searchInp from './search'
export default {
  data() {
    return {
      // input2:''
    }
  },
  methods: {
    begin(input){
      console.log(input);
    }
  },
  components:{searchInp}
}
</script>

<style>

</style>