<template>
  <div class="text-center w-full">
    <div class="flex flex-col items-center w-full mt-4">
      <div class="relative w-full">
        <div :class="[sliderClasses.trackBackground, sliderClasses.variants[theme].trackBackground]"></div>
        <div :class="[sliderClasses.trackFilled, sliderClasses.variants[theme].trackFilled]" :style="{ width: percentage + '%' }"></div>
        <input
          type="range"
          :min="min"
          :max="max"
          v-model="value"
          :id="name"
          :class="sliderClasses.base"
          @input="updateValue"
          :style="{
            '--thumb-bg': sliderClasses.variants[theme].thumb.split(' ')[0],
            '--thumb-border': sliderClasses.variants[theme].thumb.split(' ')[1]
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
  trackColor: {
    type: String,
  },
  theme: {
    type: String,
    default: 'light'
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
  background-color: var(--thumb-bg, #007bff);
  border: 2px solid var(--thumb-border, #fff);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  position: relative;
  top: 0px;
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background-color: #007bff;
  border: 2px solid  #ffffff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  position: relative;
  top: 0px;
}
</style>
