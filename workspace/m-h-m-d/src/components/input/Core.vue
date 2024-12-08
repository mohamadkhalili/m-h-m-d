<template>
  <div>
    <slot name="input"></slot>
  </div>
</template>

<script setup lang="ts">
import { InputProps } from './props';
import { InputSlots } from './Slots';

const props = defineProps(InputProps);
const slots = defineSlots<InputSlots>();
</script>
