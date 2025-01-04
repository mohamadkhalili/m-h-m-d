<template>
    <div
      :class="[
        drawerClasses.base,
        side === 'right'
          ? (isOpen ? drawerClasses.openRight : drawerClasses.closedRight)
          : (isOpen ? drawerClasses.openLeft : drawerClasses.closedLeft),
      ]"
    >

      <slot />
    </div>
  </template>
  
  <script setup>
  import { drawerProps } from './Props';
  import { drawerClasses } from '../../styles/DrawerClasses';
  
  const props = defineProps(drawerProps);
  </script>
  
  <style scoped>
  /* Custom styles for the button */
  button {
    background-color: white;
    border: 1px solid black;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: black;
    color: white;
  }
  </style>
  