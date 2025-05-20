import { onBeforeMount, ref } from "vue";
import { defineStore } from "pinia";
import { ThemeService } from "../services/theme";
import { ThemeRepository } from "../repositories/theme";
import type { Theme } from "../constants/enums";

export const useThemeStore = defineStore("theme-store", () => {
  const themeService = new ThemeService(new ThemeRepository());
  const currentTheme = ref(themeService.getSelected());

  onBeforeMount(() => {
    applyTheme();
  });

  function applyTheme() {
    const theme = themeService.getSelected();
    const htmlElement = document.querySelector("html")!;
    htmlElement.setAttribute("data-bs-theme", theme);
  }

  function changeTheme(theme: Theme) {
    currentTheme.value = theme;
    themeService.setSelected(theme);
    applyTheme();
  }

  return {
    theme: currentTheme,
    changeTheme,
  };
});
