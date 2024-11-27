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
        props.horizontal 
          ? 'grid grid-flow-col grid-rows-3 gap-4 h-52'  // Grid layout for horizontal cards
          : 'flex flex-col w-80',  // Flex layout for vertical cards
      ]"
    >
      <!-- Image -->
      <div :class="['relative', props.horizontal ? ' mx-auto row-span-3' : 'w-full h-48']">
        <img :src="props.image" alt="Card Image" class="object-cover w-[90%] h-[90%] mt-[0.7rem] m-auto rounded-lg" />
      </div>
  
      <!-- Content -->
      <div :class="['p-4', props.horizontal ? '  col-span-2 row-span-1 ' : '']">
        <h3 class="text-xl font-semibold text-gray-900">{{ props.title }}</h3>
        <p class="text-sm text-gray-600 ">{{ props.description }}</p>
      </div>
  
      <!-- Footer (Optional) -->
      <div v-if="props.footer || $slots.default" :class="[props.horizontal ? 'col-span-2 row-span-2 p-4   mt-10' : 'p-4 border-t']">
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500 pr-2">{{ props.footer }}</span>
       
          <slot></slot>
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
  