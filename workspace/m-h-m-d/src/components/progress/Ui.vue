<template>
    <Core>
      <template #progress>
        <div class="w-full h-2 bg-gray-200 rounded">
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
  const props = defineProps(uiProps);
  
  </script>