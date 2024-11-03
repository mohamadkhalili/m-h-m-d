<script setup lang="ts">
import { defineProps } from 'vue';
import { inputProps } from './props';
const props = defineProps(inputProps);
</script>

<template>
  <div>
    <slot name="input"></slot>
  </div>
</template>
