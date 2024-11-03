<template>
  <div>
    <slot name="input"></slot>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { inputProps } from './props';
import { inputEmits } from './Emits';
import { InputSlots } from '../modal/Slots';
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);
const slots = defineSlots<InputSlots>();
</script>
