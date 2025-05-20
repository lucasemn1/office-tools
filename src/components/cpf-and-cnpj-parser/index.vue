<template>
  <div class="card p-2">
    <div class="card-body">
      <form @submit.prevent="() => {}">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Digite o conteúdo"
            aria-label="phone"
            v-model="rawContent"
          />
        </div>

        <template v-if="toBeValidated">
          <div v-if="parsedValue.isValid">{{ type }} válido ✅</div>
          <div v-else>{{ type }} inválido ❌</div>
        </template>
      </form>

      <template v-if="toBeValidated">
        <hr />
        <copy-card
          :value="parsedValue.formmated"
          :label="`${type} ${type === DocumentType.CPF ? '👤' : '🏢'}`"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

import CopyCard from "../copy-card/index.vue";
import { NumberUtils } from "../../utils/number";
import { DocumentUtils } from "../../utils/document";
import { DocumentType } from "../../constants/enums";

const rawContent = ref("");
const onlyNumbers = computed(() =>
  NumberUtils.getOnlyNumbers(rawContent.value, 14)
);
const type = computed(() =>
  onlyNumbers.value.length < 14 ? DocumentType.CPF : DocumentType.CNPJ
);
const toBeValidated = computed(
  () => onlyNumbers.value.length === 11 || onlyNumbers.value.length === 14
);
const parsedValue = computed(() => {
  if (type.value === DocumentType.CPF) {
    return {
      formmated: DocumentUtils.parseToCpf(onlyNumbers.value),
      isValid:
        onlyNumbers.value.length === 11
          ? DocumentUtils.validateCpf(onlyNumbers.value)
          : false,
    };
  } else {
    return {
      formmated: DocumentUtils.parseToCnpj(onlyNumbers.value),
      isValid:
        onlyNumbers.value.length === 14
          ? DocumentUtils.validateCnpj(onlyNumbers.value)
          : false,
    };
  }
});
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

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
</style>
