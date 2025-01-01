<template>
    <Ui :itemsCount="items.length">
      <slot v-for="(item, index) in items" :key="index">
        <div class="flex-none w-full">{item}</div>
      </slot>
    </Ui>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import type { CarouselProps } from './Props'; // Import the interface
  
  const props = defineProps<CarouselProps>(); // Use the interface for props
  </script>
  