<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handleModelValue"
    v-bind="$attrs"
  >
    <template #input>
      <slot name="input"></slot>
      <div v-if="showInput" class="input-container">
        <label
          :class="{ active: isFocused || modelValue }"
          @click="focusInput"
          >{{ title }}</label>
        <input
          ref="inputRef"
          v-model="modelValue"
          :disabled="isDisabled"
          :readonly="readonly"
          :class="[
            colorClass,
            {
              disabled: isDisabled,
              readonly: readonly,
              rtl: rtl,
            },
          ]"
          @focus="isFocused = true"
          @blur="handleBlur"
        />
      </div>
    </template>
  </Core>
</template>

<script setup lang="ts">
import { computed, defineProps, ref, defineOptions, useSlots } from "vue";
import { InputColor, inputProps } from "./props";
import { inputEmits } from "./Emits";
import { InputSlots } from '../input/Slots';
import Core from "./Core.vue";
const uiSlots = defineSlots<InputSlots>();
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);
defineOptions({
  inheritAttrs: false,
});
const slots = useSlots();
const showInput = computed(() => !slots.input);
const inputRef = ref<HTMLInputElement | null>(null);
const isFocused = ref(false);
const handleModelValue = (newValue: String) => {
  emit("update:modelValue", newValue);
};
const colorClass = computed(
  () => InputColor[props.color] || InputColor.default
);

const handleBlur = () => {
  isFocused.value = !!props.modelValue;
};

const focusInput = () => {
  inputRef.value?.focus();
};
</script>

<style>
#MainInput:hover,
#MainInput:focus {
  box-shadow: inset 0 0 2px rgba(156, 156, 156, 0.1),
    0 0 0 2px rgba(255, 255, 255, 0.39), 0 0 0 3px rgba(158, 203, 255, 0.795),
    0 0 0 5px rgba(14, 155, 190, 0.034);
  border-color: rgba(161, 161, 161, 0.719);
}
.custom-input {
  padding: 8px;
  border-radius: 10px;
  transition: all 200ms;
  border: 1px solid gray;
}
.rtl {
  text-align: right;
  direction: rtl;
}
.bg-default {
  background: rgb(255, 255, 255);
  border: 1px rgb(139, 166, 184) solid;
  color: rgb(48, 48, 48);
}
.bg-purple {
  background: rgb(254, 234, 255);

  border: 1px rgb(144, 45, 148) solid;
  color: rgb(114, 0, 95);
}
.bg-green {
  background: rgb(239, 255, 244);

  border: 1px rgb(0, 179, 104) solid;
  color: rgb(0, 116, 58);
}

.bg-red {
  background: rgb(255, 246, 246);

  border: 1px rgba(211, 0, 0, 0.829) solid;
  color: rgb(204, 0, 0);
}

.bg-amber {
  background: rgb(255, 252, 237);

  border: 1px rgb(207, 207, 115) solid;
  color: rgb(85, 85, 0);
}

.bg-gradient {
  background: linear-gradient(
    100deg,
    rgb(209, 255, 249) 0%,
    rgb(255, 235, 235) 20%,
    rgb(241, 255, 230) 40%,
    rgb(235, 235, 255) 60%,
    rgb(207, 255, 235) 80%,
    rgb(255, 230, 241) 100%
  );
  color: rgb(55, 41, 117);
  border: 1px rgb(186, 220, 233) solid;
  transition: background 1s;
}

.disabled {
  pointer-events: none;
  opacity: 60%;
  border: none;
}

.Readonly {
  border: 10px black solid;
}
.input-container {
  position: relative;
  margin: 20px 0;
}

label {
  position: absolute;
  left: 10px;
  top: 12px;
  transition: 0.2s ease all;
  color: gray;
}

label.active {
  left: 10px;
  top: 0px;
  font-size: 11px;
  color: #8b8b8b;
}

input {
  padding: 12px 10px;
  border-radius: 10px;
  border: 1px solid gray;
  width: 100%;
  text-align: left;
}

input.rtl {
  text-align: right;
  direction: rtl;
}

input:focus {
  outline: none;
  box-shadow:  0px 0px 1px 1px rgba(209, 143, 0, 0.322);
}
</style>