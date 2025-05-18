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
            class="btn btn-secondary p-2"
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
            class="btn btn-secondary p-2"
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

const autoInitWithZero = ref(false);

const rawContent = ref("");
const onlyNumbers = computed(() => {
  const onlyNumbers = PhoneUtils.getOnlyNumbers(rawContent.value);

  if (autoInitWithZero.value && !onlyNumbers.startsWith("0")) {
    return `0${onlyNumbers}`;
  }

  return onlyNumbers;
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

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
