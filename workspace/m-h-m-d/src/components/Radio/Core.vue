<template>
    <div>
      <Radio
        :modelValue="modelValue"
        :value="'true'"
        label="True"
        @update:modelValue="updateModelValue"
      />
      <Radio
        :modelValue="modelValue"
        :value="'false'"
        label="False"
        @update:modelValue="updateModelValue"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Radio from './Ui.vue'; // Import the Radio component
  
  const modelValue = ref<string | null>(null); // The value of the selected radio button
  
  // Update modelValue when radio button changes
  const updateModelValue = (newValue: string) => {
    modelValue.value = newValue;
  };
  </script>
  