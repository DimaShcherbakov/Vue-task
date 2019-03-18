<template>
  <div class="text-center">
    <paginate
      v-model="page"
      :page-count="countPages"
      :click-handler="nextPage(page)"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-link-class="'page-link'"
      :next-link-class="'page-link'"
      :hide-prev-next="true"
    >
    </paginate>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        page: 1,
        disable: false
      }
    },
    computed: {
      countPages() {
        return this.$store.state.countPages;
      },
    },
    methods: {
      ...mapActions(['getDataToTableAction']),
      nextPage(pageNum) {
        this.$store.dispatch('getDataToTableAction', {
          lastRowInd: pageNum * 20,
          firstRowInd: (pageNum - 1) * 20,
        });
      }
    }
  }
</script>
