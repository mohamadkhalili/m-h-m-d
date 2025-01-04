<script setup>
import { ref } from 'vue';
import { drawerClasses } from '../../styles/DrawerClasses';
import { drawerProps } from './Props';
import { drawerEmits } from './Emits';

const props = defineProps(drawerProps);
const emit = defineEmits(drawerEmits);

const isOpen = ref(false);

const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
  emit('update:isOpen', isOpen.value);
};
</script>

<template>
  <div :class="[drawerClasses.base, props.side === 'right' ? (isOpen ? drawerClasses.openRight : drawerClasses.closedRight) : (isOpen ? drawerClasses.openLeft : drawerClasses.closedLeft)]">
    <slot></slot>
  </div>
</template>

<style scoped>
</style>