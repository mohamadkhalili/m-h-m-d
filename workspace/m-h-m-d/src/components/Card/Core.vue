<template>
    <div :class="['card-core', variantClass]" @click="handleClick">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  import { cardProps } from './props';
  import { cardEmits } from './emits';
  
  const props = defineProps(cardProps);
  const emit = defineEmits(cardEmits);
  
  const variantClass = {
    basic: 'bg-white border border-gray-300',
    outlined: 'bg-transparent border-2 border-gray-300',
    elevated: 'bg-white shadow-lg'
  }[props.variant] || 'bg-white border border-gray-300';
  
  const handleClick = () => {
    if (props.isClickable) {
      emit('cardClick', { title: props.title, description: props.description });
    }
  };
  </script>
  
  <style scoped>
  .card-core {
    border-radius: 8px;
    padding: 16px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .card-core:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  