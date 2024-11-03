<script setup>
import { defineProps } from 'vue';
import Ui from './Ui.vue';
import { props } from './props';

const propsData = defineProps({
  ...props, 
  color: {
    type: String,
    default: 'default',
  },
});
</script>

<template>
  <Ui 
    :readonly="propsData.Readonly" 
    :isDisabled="propsData.isDisabled" 
    :color="propsData.color" 
    :RTL="propsData.RTL"
  >
    <slot></slot>
  </Ui>
</template>
