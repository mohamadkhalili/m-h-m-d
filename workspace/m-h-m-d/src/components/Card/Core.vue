<script setup lang="ts">
import { defineProps } from 'vue';
import { cardProps } from './Props';

const props = defineProps(cardProps);
</script>

<template>
 <Core
  :class="[
    'grid',
    props.horizontal ? 'grid-cols-3 grid-rows-3 gap-4 h-52' : '',
    'rounded-xl',
    'overflow-hidden',
    'shadow-md',
    'relative',
    'p-4',
    props.variant === 'post' && !props.horizontal ? 'w-[28rem]' : '',
    props.variant === 'weather' ? 'w-[28rem]' : ''
  ]"
>

  
  </Core>
</template>
