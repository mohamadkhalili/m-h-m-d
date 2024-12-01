<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['update:modelValue']);
const isActive = ref(false);

const toggleSwitch = () => {
  if (!props.isDisabled) {
    isActive.value = !isActive.value;
    emit('update:modelValue', isActive.value);
  }
};
</script>

<template>
  <slot :isActive="isActive" :toggleSwitch="toggleSwitch"></slot>
</template>
