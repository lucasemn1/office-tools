<template>
  <section class="page-content">
    <phone-parser />
  </section>
</template>

<script lang="ts" setup>
import PhoneParser from "../../components/phone-parser/index.vue";

defineOptions({
  name: "PhoneParserPage",
});
</script>

<style lang="scss" scoped>
.page-content {
  align-items: center;
}
</style>
