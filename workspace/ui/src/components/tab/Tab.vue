<template>
    <div class="tab-content" :id="value">
      <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps({
    value: String,
    label: String
  });
  </script>
  
  <style scoped>
  .tab-content {
    padding: 20px;
  }
  </style>
  