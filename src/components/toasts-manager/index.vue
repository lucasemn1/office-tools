<template>
  <section class="toasts-manager">
    <ul>
      <li v-for="toast of toastStack.toastStack">
        <div :class="`alert alert-${toast.type}`" :key="toast.id" role="alert">
          <span>
            {{ toast.content }}
          </span>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            @click="() => toastStack.close(toast.id)"
          />
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { useToastStackStore } from "../../stores/toast-stack";

const toastStack = useToastStackStore();
</script>

<style lang="scss" scoped>
.toasts-manager {
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  width: 80%;
  max-width: 20rem;
}

ul {
  padding: 0;
  list-style: none;
}

.alert {
  display: flex;
  align-items: center;
  gap: 1rem;

  & > span {
    flex: 1;
  }
}

@media (max-width: 576px) {
  .toasts-manager {
    width: 80%;
    max-width: 80%;
    right: 10%;
  }

  .alert {
    flex: 1;
    width: 100%;
  }
}
</style>
