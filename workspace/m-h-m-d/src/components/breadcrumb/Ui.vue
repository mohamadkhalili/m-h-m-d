<template>
    <Core
      :modelValue="modelValue"
      @update:modelValue="handleItemChange"
      v-bind="$attrs"
    >
      <template #item="{ title, disable, end }">
        <div
          :class="{
            'cursor-pointer': !disable,
            'text-gray-500 cursor-not-allowed': disable,
            'text-blue-600': !disable && modelValue === title,
            'hover:text-blue-800': !disable,
          }"
          class="inline-flex items-center space-x-2"
        >
          <div :class="{'font-bold': modelValue === title && !disable}">
            {{ title }}
          </div>
          <div v-if="!end" class="text-xs text-gray-300">/</div>
        </div>
      </template>
    </Core>
  </template>
  
  <script setup lang="ts">
  import Core from "./Core.vue";
  import { uiProps } from "./Props";
  import { breadcrumbEmits } from "./Emits";
  
  const props = defineProps(uiProps);
  const emit = defineEmits(breadcrumbEmits);
  
  const handleItemChange = (newValue: string) => {
    emit("update:modelValue", newValue);
  };
  
  defineOptions({
    inheritAttrs: false,
  });
  </script>
  