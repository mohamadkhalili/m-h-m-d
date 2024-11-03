<script setup>
import { defineProps } from 'vue';
import Ui from './Ui.vue';
import { inputProps } from './props';

const props = defineProps(inputProps);
</script>

<template>
  <Ui 
    :readonly="Readonly" 
    :isDisabled="isDisabled" 
    :color="color" 
    :RTL="RTL"
  >
    <slot></slot>
  </Ui>
</template>
