<template>
    <div
      v-if="isVisible"
      class="flex justify-center items-center"
      :class="[sizeClasses, color]"
    >
      <component :is="loaderVariant" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { loaderProps } from './props';
  
  const props = defineProps(loaderProps);
  
  const sizeClasses = computed(() => {
    switch (props.size) {
      case 'sm':
        return 'w-6 h-6';
      case 'md':
        return 'w-8 h-8';
      case 'lg':
        return 'w-12 h-12';
      default:
        return 'w-8 h-8';
    }
  });
  
  const loaderVariant = computed(() => {
    switch (props.variant) {
      case 'spinner':
        return 'Spinner';
      case 'dots':
        return 'Dots';
      default:
        return 'DefaultLoader';
    }
  });
  </script>
  