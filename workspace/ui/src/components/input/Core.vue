<script setup lang="ts">
import { defineProps } from 'vue';
import { inputProps } from './props';
import { inputEmits } from './Emits';
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);
</script>

<template>
  <div>
    <slot name="input"></slot>
  </div>
</template>
