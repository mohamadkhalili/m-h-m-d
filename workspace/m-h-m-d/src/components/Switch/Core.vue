<script setup>
import { ref, watch } from 'vue';
import { SwitchProps } from './props';

const props = defineProps(SwitchProps);
const emit = defineEmits(['update:modelValue']);

const isActive = ref(props.modelValue);

const toggleSwitch = () => {
  if (!props.isDisabled) {
    isActive.value = !isActive.value;
    emit('update:modelValue', isActive.value);
  }
};

watch(() => props.modelValue, (newVal) => {
  isActive.value = newVal;
});
</script>

<template>
  <div>
    <slot :isActive="isActive" :toggleSwitch="toggleSwitch"></slot>
  </div>
</template>
