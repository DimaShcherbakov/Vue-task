<template>
  <div class="page-wrap d-flex flex-row align-items-center error">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center">
          <span class="display-1 d-block">404</span>
          <div class="mb-4 lead">The page you are looking for was not found.</div>
          <router-link to="/">Back to Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .error{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30%;
    width: 50%;
    margin: -15% 0 0 -25%;
  }
</style>
