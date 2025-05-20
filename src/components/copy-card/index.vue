<template>
  <div class="result">
    <div>
      <h6>{{ props.label }}</h6>
      <h4 class="mb-0">
        <strong>
          {{ props.value }}
        </strong>
      </h4>
    </div>

    <button
      class="btn btn-secondary p-2"
      @click="() => handleCopyToClipboard(props.value)"
    >
      <v-icon name="io-copy" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ToastModel } from "../../models/toast";
import { useToastStackStore } from "../../stores/toast-stack";

const toastStack = useToastStackStore();

const props = defineProps<{
  label: string;
  value: string;
}>();

function handleCopyToClipboard(value: string) {
  navigator.clipboard.writeText(value);
  toastStack.push(
    new ToastModel("Copiado para área de transferência!", "secondary")
  );
}
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
