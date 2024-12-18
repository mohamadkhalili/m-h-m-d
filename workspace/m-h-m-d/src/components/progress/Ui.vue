<template>
  <Core :modelValue="modelValue" @update:modelValue="handleItemChange">
    <template #progress>
      <slot name="progress"></slot>
      <div class="w-full h-2 bg-gray-200 rounded">
        <slot name="progressBar"></slot>
        <div
          class="h-full rounded bg-blue-500 transition-all duration-300"
          :style="{ width: `${modelValue}%` }"
        ></div>
      </div>
    </template>
  </Core>
</template>
  
  <script setup lang="ts">
import Core from "./Core.vue";
import { uiProps } from "./Props";
import { progressEmits } from "./Emits";
const props = defineProps(uiProps);
const emit = defineEmits(progressEmits);
const handleItemChange = (newValue: Number) => {
  emit("update:modelValue", newValue);
};
</script>