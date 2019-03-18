<template>
    <div class="container">
      <router-view>  
        <MainPage />
      </router-view>
    </div>
</template>

<script>
  import MainPage from './components/MainPage.vue';

  export default {
    components: {
      MainPage
    }
  }
</script>


