<template>
  <div class="card p-2">
    <div class="card-body">
      <form @submit.prevent="() => {}">
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

        <div class="form-check">
          <input
            class="form-check-input p-1"
            type="checkbox"
            id="init-with-zero"
            :checked="autoInitWithZero"
            @click="() => (autoInitWithZero = !autoInitWithZero)"
          />

          <label class="form-check-label user-select-none" for="init-with-zero">
            Incluir zero no DDD
          </label>
        </div>
      </form>

      <template v-if="onlyNumbers !== ''">
        <hr />
        <copy-card :value="formattedValue" label="Telefone formatado 💬" />

        <hr />
        <copy-card :value="onlyNumbers" label="Somente os números 🔢" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { PhoneUtils } from "../../utils/phone";

import CopyCard from "../copy-card/index.vue";
import { NumberUtils } from "../../utils/number";

const autoInitWithZero = ref(false);

const rawContent = ref("");
const onlyNumbers = computed(() => {
  const onlyNumbers = NumberUtils.getOnlyNumbers(rawContent.value, 12);

  if (autoInitWithZero.value && !onlyNumbers.startsWith("0")) {
    return `0${onlyNumbers}`;
  }

  return onlyNumbers;
});
const formattedValue = computed(() => {
  return PhoneUtils.parse(onlyNumbers.value);
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
