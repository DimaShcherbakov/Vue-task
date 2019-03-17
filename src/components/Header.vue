<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="container">
    <div class="row">    
        <div class="col-xs-8 col-xs-offset-2">
            <div class="input-group">
                <input type="text" class="form-control" name="x" v-model="search" placeholder="Search term...">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button"><i class="fas fa-search"></i></button>
                </span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    props: ["title"],
    data: () => {
      return {
        search: '',
      }
    }
  }
</script>