<template>
  <div class="card p-2">
    <div class="card-body">
      <div class="input-group">
        <span class="input-group-text"> 🇧🇷 </span>
        <input
          type="text"
          class="form-control"
          placeholder="Digite o conteúdo para formatar o número"
          aria-label="phone"
          v-model="rawContent"
        />
      </div>

      <template v-if="onlyNumbers !== ''">
        <hr />

        <div class="result">
          <div>
            <h6>Telefone formatado 💬</h6>
            <h4 class="mb-0">
              <strong>
                {{ formattedValue }}
              </strong>
            </h4>
          </div>

          <button
            class="btn btn-primary p-2"
            @click="() => handleCopyToClipboard(formattedValue)"
          >
            <v-icon name="io-copy" />
          </button>
        </div>

        <hr />

        <div class="result">
          <div>
            <h6>Somente os números 🔢</h6>
            <h4 class="mb-0">
              <strong>{{ onlyNumbers }} </strong>
            </h4>
          </div>

          <button
            class="btn btn-primary p-2"
            @click="() => handleCopyToClipboard(onlyNumbers)"
          >
            <v-icon name="io-copy" />
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { PhoneUtils } from "../../utils/phone";
import { useToastStackStore } from "../../stores/toast-stack";
import { ToastModel } from "../../models/toast";

const toastStack = useToastStackStore();

const rawContent = ref("");
const onlyNumbers = computed(() => {
  return rawContent.value.replace(/\D/g, "").slice(0, 11);
});
const formattedValue = computed(() => {
  return PhoneUtils.parse(onlyNumbers.value);
});

function handleCopyToClipboard(value: string) {
  navigator.clipboard.writeText(value);
  toastStack.push(
    new ToastModel("Copiado para área de transferência!", "secondary")
  );
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 30rem;

  background: var(--bs-secondary-bg);
  background: linear-gradient(
    20deg,
    var(--bs-secondary-bg) 0%,
    rgb(var(--bs-secondary-bg-rgb), 0.5) 50%,
    var(--bs-secondary-bg) 100%
  );
}

.result {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
</style>
