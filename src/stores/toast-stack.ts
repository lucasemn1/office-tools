import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import type { ToastModel } from "../models/toast";

export const useToastStackStore = defineStore("toast-stack-store", () => {
  let toastStack = reactive<ToastModel[]>([]);
  const toastIds = computed(() => toastStack.map(({ id }) => id));

  function push(toast: ToastModel) {
    toastStack.push(toast);

    setTimeout(() => {
      close(toast.id);
    }, 7000);
  }

  function close(toastId: string) {
    const index = toastIds.value.indexOf(toastId);

    if (index >= 0) {
      toastStack.splice(index);
    }
  }

  return {
    toastStack,
    push,
    close,
  };
});
