<template>
  <button @click="toggleDrawer('left')">Open Left Drawer</button>
  <button @click="toggleDrawer('right')">Open Right Drawer</button>
  <Ui :isOpen="isOpen" :side="side" @update:isOpen="isOpen = $event">
    <slot></slot>
  </Ui>
</template>

<script setup>
import { ref } from 'vue';
import Ui from './Ui.vue';

const isOpen = ref(false);
const side = ref('right');

const toggleDrawer = (pos) => {
  side.value = pos;
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
