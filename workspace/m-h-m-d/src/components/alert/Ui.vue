<template>
  <Core>
    <template #alert>
      <div
        class="flex items-start p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md"
      >
        <div
          class="mr-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
        >
          <slot name="icon"></slot>
          <svg-icon
            class="w-6 h-6 text-gray-700"
            type="mdi"
            :path="icon"
          ></svg-icon>
        </div>
        <div class="flex-1">
          <slot name="title"></slot>
          <div class="text-lg font-semibold text-gray-800">{{ title }}</div>
          <slot name="text"></slot>
          <div class="text-sm text-gray-600 mt-1">{{ text }}</div>
        </div>
      </div>
    </template>
  </Core>
</template>
  
  <script setup lang="ts">
import Core from "./Core.vue";
import { uiProps } from "./Props";
const props = defineProps(uiProps);
</script>