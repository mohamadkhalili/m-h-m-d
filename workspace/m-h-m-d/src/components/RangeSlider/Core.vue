<template >
    <div class="flex flex-col items-center">
      <SlotComponent :label="label" :value="modelValue" />
      <input
        type="range"
        :min="min"
        :max="max"
        :value="modelValue"
        @input="updateValue"
        :id="name"
        class="slider w-full mt-4"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  import { SliderProps } from './Props';
  import { emits } from './Emits';
  
  const props = defineProps<SliderProps>();
  const emit = defineEmits(emits);
  
  // ارسال تغییرات
  const updateValue = (event: Event) => {
    const value = Number((event.target as HTMLInputElement).value);
    emit('update:modelValue', value);
  };
  </script>
  
  
  <style scoped>
  .slider {
    @apply appearance-none w-full h-2 bg-gray-300 rounded-lg outline-none transition-all duration-200;
  }
  
  .slider:hover {
    @apply bg-gray-400;
  }
  
  .slider::-webkit-slider-thumb {
    @apply w-6 h-6 bg-green-500 rounded-full cursor-pointer;
  }
  
  .slider::-moz-range-thumb {
    @apply w-6 h-6 bg-green-500 rounded-full cursor-pointer;
  }
  </style>
