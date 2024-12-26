<template>
    <label :class="['radio', isChecked ? 'checked' : '']">
      <input
        type="radio"
        :value="value"
        :checked="isChecked"
        @change="handleChange"
        :disabled="disabled"
      />
      <slot></slot>
      <span>{{ label }}</span>
    </label>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: [String, null], // Now accept string or null for v-model compatibility
      required: true
    },
    value: {
      type: String, // Value should be a string
      required: true
    },
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });
  
  const isChecked = computed(() => props.modelValue === props.value);
  
  const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void; // Emit string value
  }>();
  
  const handleChange = () => {
    if (!props.disabled) {
      emit('update:modelValue', props.value); // Emit selected value (string)
    }
  };
  </script>
  
  <style scoped>
  .radio {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .radio input {
    width: 20px;
    height: 20px;
  }
  
  .radio.checked input {
    background-color: #007bff;
  }
  
  .radio input:disabled {
    background-color: #ccc;
  }
  
  .radio span {
    font-size: 14px;
  }
  
  .radio input:checked + span {
    color: #007bff;
  }
  </style>
  