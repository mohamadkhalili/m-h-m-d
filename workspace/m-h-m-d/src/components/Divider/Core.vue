<script setup lang="ts">
import { defineProps } from 'vue';
import { DividerProps } from './props';

const props = defineProps(DividerProps);
</script>

<template>
  <div>
    <slot
      :color="props.color"
    />
    
  </div>
</template>

<style scoped>
</style>
