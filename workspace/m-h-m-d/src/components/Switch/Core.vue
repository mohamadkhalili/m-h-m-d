<script setup>
import { ref, defineEmits, defineProps, watch } from 'vue';
import { SwitchProps } from './props'; // وارد کردن SwitchProps

const props = defineProps(SwitchProps);
const emit = defineEmits(['update:modelValue']);
const isActive = ref(props.defaultChecked);

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
