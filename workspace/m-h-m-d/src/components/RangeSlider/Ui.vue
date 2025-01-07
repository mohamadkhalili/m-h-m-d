<template>
    <div class="w-full">
        <div class="relative w-full text-center">
          <div :class="[ adapter(sliderClasses.trackBackground[props.variant]).value,adapter( baseColor).value]"></div>
          <div :class="[adapter(sliderClasses.trackFilled[props.variant]).value, adapter(linkFieldColor).value]" :style="{ width: percentage + '%' }"></div>
          <input
            type="range"
            :min="min"
            :max="max"
            :step="step"
            v-model="value"
            :id="name"
            :class="adapter(sliderClasses.base[props.variant]).value"
            @input="updateValue"
            :style="{
              '--thumb-bg': thumbColor,
              '--thumb-border': thumbBorderColor
            }"
          />
        </div>
      </div>
  </template>
  
  <script setup>
  import {  ref, computed, watch } from 'vue';
  import { sliderClasses } from '../../styles/RangeSlider';
import { useAdapterClass } from '../../composables/UseClass';
  
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
    },
    variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'inside'].includes(value)
  }
  });
  const adapter =useAdapterClass();
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
    width: 18px;
    height: 18px;
    background-color: var(--thumb-bg, #007bff);
    border: 2px solid var(--thumb-border, #fff);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    position: relative;
    top: -1px;
  }
  
  input[type="range"]::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background-color: var(--thumb-bg, #007bff); 
    border: 2px solid var(--thumb-border, #ffffff);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    position: relative;
    top: 10px;
  }
  </style>
  