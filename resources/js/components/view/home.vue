<template>
  <h1>This is home page</h1>
</template>
<script>
export default {
  methods: {
    sendData() {
      this.$emit("page_titile", "employee");
    }
  }
};
</script>