<template>
  <div class="text-center w-full">
    <label :for="name" class="block text-lg font-semibold mb-2">{{ label }}</label>
    <span class="text-gray-700">{{ value }}</span>
    <div class="flex flex-col items-center w-full mt-4">
      <div class="relative w-full">
        <div :class="sliderClasses.trackBackground"></div>
        <div :class="sliderClasses.trackFilled" :style="{ width: percentage + '%' }"></div>
        <input
          type="range"
          :min="min"
          :max="max"
          v-model="value"
          :id="name"
          :class="sliderClasses.base"
          @input="updateValue"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';
import { sliderClasses } from '../../styles/RangeSlider';

const props = defineProps({
  label: String,
  min: Number,
  max: Number,
  modelValue: Number,
  name: String,
  trackColor: {
    type: String,
    default: '#007bff'
  }
});

const value = ref(props.modelValue);
const percentage = computed(() => {
  return ((value.value - props.min) / (props.max - props.min)) * 100;
});

const updateValue = (event) => {
  value.value = Number(event.target.value);
};
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  background: #007bff;
  border: 2px solid #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  position: relative;
  top: 0px;
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #007bff;
  border: 2px solid #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  position: relative;
  top: 0px;
}
</style>
