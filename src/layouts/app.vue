<template>
  <div class="page">
    <div class="page-content">
      <header>
        <h1 class="display-4">Office Tools</h1>
        <h5 class="light">{{ title }}</h5>
      </header>

      <main>
        <router-view />
      </main>

      <contact-footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import ContactFooter from "../components/contact-footer/index.vue";

const route = useRoute();
const title = computed(() =>
  route.meta.title ? String(route.meta.title) : undefined
);

defineOptions({
  name: "AppLayout",
});
</script>

<style lang="scss" scoped>
.page {
  padding: 4rem;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  flex: 1;
  height: 100%;
}

@media (max-width: 576px) {
  .page {
    padding: 2rem;
  }
}
</style>
