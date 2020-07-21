<template>
  <div class="page-container">
    <page-sidebar></page-sidebar>
    <div class="main-content">
      <main-header></main-header>
      <page-title :page_title="changePageTitle"></page-title>
      <page-content></page-content>
    </div>
    <page-footer></page-footer>
  </div>
</template>
<script>
export default {
  data() {
    dynamic_page_title;
  },
  methods: {
    changePageTitle(value) {
      this.dynamic_page_title = value;
    }
  }
};
</script>