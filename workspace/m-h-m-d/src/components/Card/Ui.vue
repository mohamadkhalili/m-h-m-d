<template>
    <Core
      :class="[
        'card',
        'rounded-lg',
        'overflow-hidden',
        'shadow-md',
        'relative',
        'bg-white',
        'cursor-pointer',
        props.elevation ? 'shadow-xl' : '',
        props.horizontal ? 'flex flex-row ' : 'flex flex-col w-fit',  
       
      ]"
    >
      <!-- Image -->
      <div :class="['relative', props.horizontal ? 'w-2/4' : 'w-full h-40 ']">
        <img :src="props.image" alt="Card Image" class="object-cover w-[90%] h-[90%] mt-[0.7rem] m-auto rounded-lg" />
        
      </div>
  
      <!-- Content -->
      <div :class="['p-4', props.horizontal ? 'w-1/4' : '']">
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
    </Core>
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
   
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }
  </style>
  