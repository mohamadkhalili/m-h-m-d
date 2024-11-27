<script setup lang="ts">
import { dividerProps } from './props';

const props = defineProps(dividerProps);
</script>

<template>
  <div
    :style="{
      height: props.direction === 'vertical' ? props.length : props.diameter,
      width: props.direction === 'horizontal' ? props.length : props.diameter,
    }"
    :class="[props.color]"
  ></div>
</template>
