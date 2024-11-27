<template>
    <div :class="['card', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'relative', 'bg-white', 'w-80', 'cursor-pointer', props.elevation ? 'shadow-md' : '']">
      <!-- Image -->
      <div v-if="props.image" class="relative w-full h-48">
        <img  :src="props.image" class="object-cover w-full h-full rounded-t-lg"/>
      </div>
  
      <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-900">{{ props.title }}</h3>
        <p class="text-sm text-gray-600 mt-2">{{ props.description }}</p>
      </div>
  
      <!-- Footer (Optional) -->
      <div v-if="props.footer" class="p-4 border-t">
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">{{ props.footer }}</span>
         <slot/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import { cardProps } from './Props';
  
  const props = defineProps(cardProps);
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  </style>
  