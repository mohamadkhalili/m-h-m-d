<!-- button-core.vue -->
<template>
  <div>
    <slot name="button"></slot>
  </div>
</template>

<script setup lang="ts">
import { props } from './props'; 
import { buttonEmits } from './Emits';  

const propsData = defineProps(props);  
const emit = defineEmits(buttonEmits);  
</script>
