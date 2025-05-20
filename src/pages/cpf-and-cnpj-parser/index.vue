<template>
  <section class="page-content">
    <cpf-and-cnpj-parser />
  </section>
</template>

<script lang="ts" setup>
import CpfAndCnpjParser from "../../components/cpf-and-cnpj-parser/index.vue";

defineOptions({
  name: "CpfAndCnpjParser",
});
</script>

<style lang="scss" scoped>
.page-content {
  align-items: center;
}
</style>
