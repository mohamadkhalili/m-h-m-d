<template>
  <Core :modelValue="modelValue" @update:modelValue="handlePageChange">
    <slot name="menu"></slot>
    <template #item="{ index, isActive, item }"> </template>
  </Core>
</template>
<script setup lang="ts">
import Core from "./Core.vue";
import { defineProps } from "vue";
import { uiProps } from "./Props";
import { menuEmits } from "./Emits";
import { uiSlots } from "./Slots";
const props = defineProps(uiProps);
const emit = defineEmits(menuEmits);
const slots = defineSlots<uiSlots>();
const handlePageChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};
</script>