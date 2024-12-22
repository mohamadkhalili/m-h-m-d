<template>
  <div class="flex flex-col items-center w-full">
    <SlotComponent :label="label" :value="modelValue" />
    <div class="relative w-full mt-4">
      <div :class="[sliderClasses.trackBackground, baseColor]"></div>
      <div :class="[sliderClasses.trackFilled, linkFieldColor]" :style="{ width: percentage + '%' }"></div>
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        @input="updateValue"
        :id="name"
        :class="sliderClasses.base"
        :style="{
          '--thumb-bg': thumbColor,
          '--thumb-border': thumbBorderColor
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import { emits } from './Emits';
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
    default: 'bg-blue-500'
  },
  thumbBorderColor: {
    type: String,
    default: 'border-white'
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
const emit = defineEmits(emits);

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100;
});

const updateValue = (event) => {
  const value = Number(event.target.value);
  emit('update:modelValue', value);
};
</script>
