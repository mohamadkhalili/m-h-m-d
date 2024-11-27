<template>
    <div :class="['card', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'relative', 'bg-white', 'w-80', 'cursor-pointer', props.elevation ? 'shadow-xl' : '']">
      <!-- Image -->
      <div class="relative w-full h-48">
        <img :src="props.image" alt="Card Image" class="object-cover w-full h-full rounded-t-lg"/>
        <div class="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded-full">
          <i class="fas fa-heart"></i>
        </div>
      </div>
  
      <!-- Content -->
      <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-900">{{ props.title }}</h3>
        <p class="text-sm text-gray-600 mt-2">{{ props.description }}</p>
      </div>
  
      <!-- Footer (Optional) -->
      <div v-if="props.footer" class="p-4 border-t">
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">{{ props.footer }}</span>
          <button class="text-sm text-blue-500">View</button>
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
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  </style>
  