<template>
    <fieldset :class="classes.container">
      <legend class="text-lg font-medium text-gray-800">{{ label }}</legend>
      <div class="space-y-2">
        <slot></slot>
      </div>
    </fieldset>
  </template>
  
  <script setup lang="ts">
  import { ref, provide, inject } from 'vue';
  import RadioClasses from '../../styles/RadioGroupClasses';
  
  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    isInvalid: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void;
  }>();
  
  // Provide modelValue to child radios
  provide('modelValue', props.value);
  provide('update:modelValue', emit);
  
  const classes = RadioClasses;
  </script>
  