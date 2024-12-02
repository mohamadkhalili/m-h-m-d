<template>
    <ui-loader
      :variant="variant"
      :size="size"
      :color="color"
      :is-visible="isVisible"
    >
      <slot />
    </ui-loader>
  </template>
  
  <script setup >
  import UiLoader from './Ui.vue';
  import { loaderProps } from './props';
  
  const props = defineProps(loaderProps);
  </script>
  