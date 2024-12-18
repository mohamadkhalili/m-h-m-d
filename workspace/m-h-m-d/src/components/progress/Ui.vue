<template>
  <Core :modelValue="modelValue" @update:modelValue="handleItemChange">
    <template #progress>
      <slot name="progress"></slot>
      <div :class="adapterClass(progressClasses.progress + ' ' + progressClass).value">
        <slot name="progressFill"></slot>
        <div
          :class="adapterClass(progressClasses.progressFill + ' ' + progressFillClass).value"
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
import { progressClasses } from "../../styles/ProgressClasses";
import { useAdapterClass } from "../../composables/UseClass";
import { uiSlots } from "./Slots";
const uiSlots = defineSlots<uiSlots>();
const adapterClass = useAdapterClass();
const props = defineProps(uiProps);
const emit = defineEmits(progressEmits);
const handleItemChange = (newValue: Number) => {
  emit("update:modelValue", newValue);
};
</script>