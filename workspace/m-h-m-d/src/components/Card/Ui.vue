<template>
    <Core
      :class="[
        'rounded-xl',
        'overflow-hidden',
        'shadow-md',
        'relative',
        props.variant === 'post' ? 'bg-white flex flex-col p-4 gap-4' : '',
        props.variant === 'weather' ? 'bg-white flex flex-col p-4 gap-6' : '',
        'cursor-pointer',
        props.variant === 'post' && !props.horizontal ? 'w-[28rem]' : '',
        props.variant === 'weather' ? 'w-[28rem]' : '', // Adjust for weather variant as well
      ]"
    >
      <!-- Post variant -->
      <template v-if="props.variant === 'post'">
        <div class="flex items-center justify-between ">
          <div class="flex items-center">
            <img :src="props.avatar" alt="User Avatar" class="w-14 h-14 rounded-full mr-2" />
            <div>
              <h3 class="text-lg font-bold">{{ props.username }}</h3>
              <p class="text-sm text-gray-500">{{ props.time }}</p>
            </div>
          </div>
          <slot></slot>
        </div>
      
        <p class="mt-2 text-gray-700">{{ props.description }}</p>
      
        <div v-if="props.image" class="mt-2">
          <img :src="props.image" alt="Post Image" class="w-full h-auto rounded-lg" />
        </div>
      
        <div class="flex text-gray-500 text-xs mt-4">
          <div class="flex justify-center items-center border-t pt-2 w-full space-x-4">
            <span v-if="props.info1">{{ props.info1 }}</span>
            <span v-if="props.info2">{{ props.info2 }}</span>
            <span v-if="props.info3">{{ props.info3 }}</span>
            <span v-if="props.info4">{{ props.info4 }}</span>
          </div>
        </div>
      </template>
  
      <!-- Weather variant -->
      <template v-else-if="props.variant === 'weather'">
        <div class="flex items-center justify-between space-x-4">
          <!-- Avatar and Info -->
          <div class="flex items-center space-x-4">
            <img :src="props.weatherIcon" alt="Weather Icon" class="w-16 h-16 rounded-full" />
            <div>
              <h3 class="text-xl font-semibold">{{ props.title }}</h3>
              <p class="text-sm text-gray-500">{{ props.description }}</p>
            </div>
          </div>
          
          <div class="flex flex-col justify-center items-center">
            <p class="text-3xl font-bold">{{ props.info4 }}</p>
            <div class="flex space-x-4 text-xs text-gray-500 mt-2">
              <span v-if="props.info2">{{ props.info2 }} </span>
              <span v-if="props.info3">{{ props.info3 }}</span>
            
            </div>
          </div>
        </div>
      </template>
  
      <!-- Default (other variants) -->
      <template v-else>
        <div v-if="props.header" :class="[props.horizontal ? '' : 'p-4']">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500 pr-2">{{ props.header }}</span>
          </div>
        </div>
      
        <div v-if="props.image" :class="['relative', props.horizontal ? 'mx-auto row-span-3' : 'w-full h-48']">
          <img :src="props.image" alt="Card Image" class="object-cover w-[90%] h-[90%] mt-[0.7rem] m-auto rounded-lg" />
        </div>
      
        <div :class="['p-4', props.horizontal ? 'col-span-2 row-span-1' : '']">
          <h3 class="text-xl font-semibold">{{ props.title }}</h3>
          <p class="text-sm text-gray-500">{{ props.description }}</p>
        </div>
      
        <div v-if="props.footer || $slots.default" :class="[props.horizontal ? 'col-span-2 row-span-2 p-4 mt-10' : 'p-4 border-t']">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500 pr-2">{{ props.footer }}</span>
            <slot></slot>
          </div>
        </div>
      </template>
  
    </Core>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import { cardProps } from './Props';
  
  const props = defineProps({
    ...cardProps,
    avatar: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    info1: {
      type: String,
      required: false,
    },
    info2: {
      type: String,
      required: false,
    },
    info3: {
      type: String,
      required: false,
    },
    info4: {
      type: String,
      required: false,
    },
    weatherIcon: {
      type: String,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    weatherDescription: {
      type: String,
      required: true,
    },
    humidity: {
      type: Number,
    },
    wind: {
      type: Number,
    },
    pressure: {
      type: Number,
    },
  });
  </script>
  