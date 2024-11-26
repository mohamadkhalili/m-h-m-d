<script setup lang="ts">
import { dividerProps } from './props';

// پراپ‌ها
const props = defineProps(dividerProps);

// محاسبه استایل Divider
const getDividerStyle = () => {
  return props.direction === 'vertical'
    ? {
        borderLeft: `${props.thickness} ${props.dashed ? 'dashed' : 'solid'} ${props.color}`,
        height: props.length,
      }
    : {
        borderTop: `${props.thickness} ${props.dashed ? 'dashed' : 'solid'} ${props.color}`,
        width: props.length,
      };
};
</script>

<template>
  <div :style="getDividerStyle()" />
</template>
