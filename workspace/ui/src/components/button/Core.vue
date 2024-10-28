<template>
  <Ui :color="propsData.color" @click="createRipple">
    <slot></slot>
  </Ui>
</template>

<script setup lang="ts">
import Ui from './Ui.vue';
import { defineProps, ref } from 'vue';
import { props } from './props';

const propsData = defineProps(props);
const rippleVisible = ref(false);
const rippleStyle = ref({});

const createRipple = (event: MouseEvent) => {
  const button = event.currentTarget as HTMLButtonElement;
  const rect = button.getBoundingClientRect();

  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  rippleStyle.value = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${y}px`,
    left: `${x}px`,
    transition: 'none',
  };

  rippleVisible.value = true;

  setTimeout(() => {
    rippleVisible.value = false;
  }, 200);
};
</script>

