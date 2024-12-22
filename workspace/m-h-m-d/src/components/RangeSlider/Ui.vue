<template>
  <div class="text-center">
    <label :for="name" class="block text-lg font-semibold mb-2">{{ label }}</label>
    <span class="text-gray-700">{{ value }}</span>
    <RangeSlider
      :label="label"
      :min="min"
      :max="max"
      v-model="value"
      :name="name"
    />
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import RangeSlider from './Core.vue';

const props = defineProps({
  label: String,
  min: Number,
  max: Number,
  modelValue: Number,
  name: String
});

const value = ref(props.modelValue);
</script>

<style scoped>
/* Optional: Customize styles */
</style>
