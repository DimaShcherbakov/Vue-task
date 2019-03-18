<template>
  <div class="row justify-content-center align-items-center">
    <div class="col-sm-1">
      <img :src="logo" alt="" width="80px" height="80px">
    </div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
  import Logo from '../assets/logo.png'
  export default {
    name: 'Table',
    props: ["title"],
    data() {
      return {
        logo: Logo
      }
    }
  }
</script>

<style scoped>
  h1{
    font-family: 'UnifrakturMaguntia', cursive;
    font-size:75px;
    margin: 0 0;
  }
  .row{
    margin: 10px 0;;
  }
</style>
