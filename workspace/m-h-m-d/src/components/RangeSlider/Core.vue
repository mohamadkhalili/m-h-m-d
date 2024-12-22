<template>
  <div class="flex flex-col items-center w-full">
    <SlotComponent :label="label" :value="modelValue" />
    <div class="relative w-full mt-4">
      <div class="track-background"></div>
      <div class="track-filled" :style="{ width: percentage + '%' }"></div>
      <input
        type="range"
        :min="min"
        :max="max"
        :value="modelValue"
        @input="updateValue"
        :id="name"
        class="slider w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import { SliderProps } from './Props';
import { emits } from './Emits';

const props = defineProps<SliderProps>();
const emit = defineEmits(emits);

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100;
});

const updateValue = (event: Event) => {
  const value = Number((event.target as HTMLInputElement).value);
  emit('update:modelValue', value);
};
</script>
