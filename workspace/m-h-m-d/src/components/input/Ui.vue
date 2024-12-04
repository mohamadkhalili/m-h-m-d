<template>
  <Core
    :modelValue="modelValue"
    :="$attrs"
  >
    <template #input>
      <div class="relative my-5">
        <div :class="[{ 'relative': props.variant === 'bordered' }]">
          <input
            id="input-id"
            ref="inputRef"
            v-model="localValue"
            :class="[
              mergeClasses(UiInputClass, InputClass).value || InputVariant,
            ]"
            @focus="isFocused = true"
            @blur="handleBlur"
          />
          <label
            for="input-id"
            :class="[
              mergeClasses(UiLabelInputClass, LabelInputClass).value || InputVariant
            ]"
          >
          {{ label }}
            <slot name="label"></slot>
          </label>
        </div>
      </div>
    </template>
  </Core>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { InputProps, InputVariant } from "./props";
import { inputEmits } from "./Emits";
import { useMergeClasses } from "../../composables/useMergeClasses";
import Core from "./Core.vue";

const mergeClasses = useMergeClasses();
const props = defineProps(InputProps);
const emit = defineEmits(inputEmits);

defineOptions({
  inheritAttrs: false,
});

const inputRef = ref<HTMLInputElement | null>(null);
const isFocused = ref(false);
const localValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    localValue.value = newValue;
  }
);

const handleBlur = () => {
  isFocused.value = !!localValue.value; // Keep focused state if value exists
};

// Label stays at the top if input has value or is focused
const UiLabelInputClass = computed(() => {
  const hasValue = !!localValue.value; // Check if input has value
  return `absolute left-2 text-blue-500 top-2 transition-all duration-200 ease-in-out bg-transparent ${
    isFocused.value || hasValue
      ? "scale-95 absolute top-[-30px] text-gray-500"
      : ""
  }`;
});

const UiInputClass = ref(
  "ring-2 ring-blue-400 rounded-lg p-2 focus:ring-green-400 transition-all duration-300"
);
</script>
