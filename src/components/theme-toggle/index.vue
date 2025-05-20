<template>
  <button
    class="btn border rounded-circle shadow"
    type="submit"
    @click="() => toggleTheme()"
  >
    <v-icon name="bi-sun-fill" v-if="theme === Theme.LIGHT" />
    <v-icon name="bi-moon-stars-fill" v-else />
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useThemeStore } from "../../stores/theme";
import { Theme } from "../../constants/enums";

const themeStore = useThemeStore();
const theme = computed(() => themeStore.theme);

function toggleTheme() {
  if (theme.value === Theme.DARK) {
    themeStore.changeTheme(Theme.LIGHT);
  } else {
    themeStore.changeTheme(Theme.DARK);
  }
}
</script>

<style lang="scss" scoped>
button {
  height: 3rem;
  width: 3rem;
  background-color: var(--bs-tertiary-bg);
}
</style>
