<script setup lang="ts">
import { dividerProps } from './props';

const props = defineProps(dividerProps);
</script>

<template>
  <div
    :class="[
      props.direction === 'vertical' ? 'h-full w-px' : 'w-full h-px',
      props.color,
      props.diameter,
    ]"
    :style="{
      height: props.direction === 'vertical' ? props.length : 'auto',
      width: props.direction === 'horizontal' ? props.length : 'auto'
    }"
  ></div>
</template>

<style scoped>
.h-full {
  height: 100px;
}
.w-full {
  width: 100px;
}

</style>
