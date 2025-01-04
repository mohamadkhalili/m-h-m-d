<template>
    <!-- Overlay -->
    <div
      v-show="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="closeDrawer"
    ></div>
  
    <!-- Drawer -->
    <div
      :class="[
        drawerClasses.base,
        side === 'right'
          ? (isOpen ? drawerClasses.openRight : drawerClasses.closedRight)
          : side === 'left'
          ? (isOpen ? drawerClasses.openLeft : drawerClasses.closedLeft)
          : side === 'top'
          ? (isOpen ? drawerClasses.openTop : drawerClasses.closedTop)
          : side === 'bottom'
          ? (isOpen ? drawerClasses.openBottom : drawerClasses.closedBottom)
          : ''
      ]"
      @click.stop
    >
      <slot />
    </div>
  </template>
  
  <script setup>
  import { drawerProps } from './Props';
  import { drawerClasses } from '../../styles/DrawerClasses';
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps(drawerProps);
  const emit = defineEmits(['update:isOpen']);
  
  // Close Drawer
  const closeDrawer = () => {
    emit('update:isOpen', false);
  };
  </script>
  
  <style scoped>

  
  .transition-transform {
    transition: transform 0.3s ease-in-out;
  }
  </style>
