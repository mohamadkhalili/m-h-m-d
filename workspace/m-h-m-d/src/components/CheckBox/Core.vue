<script setup>
import { ref } from 'vue';
import { CheckBoxProps } from './props';

const props = defineProps(CheckBoxProps);
const emit = defineEmits(['update:modelValue']);

const isActive = ref(props.modelValue);

const toggleCheckBox = () => {
  if (!props.isDisabled) {
    isActive.value = !isActive.value;
    emit('update:modelValue', isActive.value);
    console.log("12")
  }
};

watch(() => props.modelValue, (newVal) => {
  isActive.value = newVal;
});
</script>

<template>
  <div>
    <slot :isActive="isActive" :toggleCheckBox="toggleCheckBox" ></slot>
  </div>
</template>
