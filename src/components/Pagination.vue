<template>
  <div class="text-center">
    <paginate
      v-model="page"
      :page-count="countResults"
      :click-handler="nextPage(page)"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-link-class="'page-link'"
      :next-link-class="'page-link'">
    </paginate>
  </div>
</template>

<script>
  export default {
    props: ['countResults'],
    data() {
      return {
        page: 1,
      }
    },
    methods: {
      nextPage: (pageNum) => {
        const indexes = {
          lastRowInd: pageNum * 20,
          firstRowInd: (pageNum - 1) * 20,
        }
        console.log(indexes);
      }
    }
  }
</script>
