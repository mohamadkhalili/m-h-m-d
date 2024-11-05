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
  border: 2px rgb(93, 101, 107) solid;
  color: rgb(48, 48, 48);
}
.bg-purple {

  border: 2px rgb(191, 58, 196) solid;
  color: rgb(114, 0, 95);
}
.bg-green {


  border: 2px rgb(0, 207, 145) solid;
  color: rgb(0, 116, 58);
}

.bg-red {

  border: 2px rgba(228, 46, 0, 0.829) solid;
  color: rgb(204, 0, 0);
}

.bg-amber {

  border: 2px rgb(221, 221, 26) solid;
  color: rgb(85, 85, 0);
}

.bg-transparent {
  border: 2px solid blue; 
}

.bg-transparent:focus {
  border: 2px solid  transparent; 
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
  box-shadow:  0px 0px 1px 1px rgba(247, 215, 75, 0.801);
}
</style>