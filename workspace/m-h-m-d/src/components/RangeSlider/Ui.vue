<template>
    <div class="text-center w-full">
      <div class="flex flex-col items-center w-full mt-4">
        <div class="relative w-full">
          <div :class="[sliderClasses.trackBackground, baseColor]"></div>
          <div :class="[sliderClasses.trackFilled, linkFieldColor]" :style="{ width: percentage + '%' }"></div>
          <input
            type="range"
            :min="min"
            :max="max"
            :step="step"
            v-model="value"
            :id="name"
            :class="sliderClasses.base"
            @input="updateValue"
            :style="{
              '--thumb-bg': thumbColor,
              '--thumb-border': thumbBorderColor
            }"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref, computed, watch, defineEmits } from 'vue';
  import { sliderClasses } from '../../styles/RangeSlider';
  
  const props = defineProps({
    label: String,
    min: Number,
    max: Number,
    modelValue: Number,
    name: String,
    baseColor: {
      type: String,
      default: 'bg-gray-300'
    },
    thumbColor: {
      type: String,
      default: '#fff'
    },
    thumbBorderColor: {
      type: String,
      default: '#007bff'
    },
    linkFieldColor: {
      type: String,
      default: 'bg-blue-500'
    },
    step: {
      type: Number,
      default: 1
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  const value = ref(props.modelValue);
  
  watch(() => props.modelValue, (newValue) => {
    value.value = newValue;
  });
  
  const percentage = computed(() => {
    return ((value.value - props.min) / (props.max - props.min)) * 100;
  });
  
  const updateValue = (event) => {
    value.value = Number(event.target.value);
    emit('update:modelValue', value.value);
  };
  </script>
  
  <style scoped>
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid var(--thumb-border, #fff);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    position: relative;
    top: 0px;
  }
  
  input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background-color: var(--thumb-bg, #007bff); 
    border: 2px solid var(--thumb-border, #ffffff);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    position: relative;
    top: 0px;
  }
  </style>
  