<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    props: ["title"],
    data: () => {
      return {

      }
    }
  }
</script>