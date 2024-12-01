<script setup>
import { computed, defineProps, defineEmits } from 'vue';
import { SwitchProps } from './props';
import Core from './Core.vue';

const props = defineProps(SwitchProps);
const emit = defineEmits(['update:modelValue']);

const switchClasses = computed(() => [
  'relative inline-flex items-center transition-colors duration-300',
  props.isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
  props.variant === 'rounded' ? 'rounded-full' : '',
  props.variant === 'shadow' ? 'shadow-md' : '',
  props.size === 'sm' ? 'w-10 h-5' : '',
  props.size === 'md' ? 'w-12 h-6' : '',
  props.size === 'lg' ? 'w-16 h-8' : '',
  props.size === 'xl' ? 'w-20 h-10' : '',
  props.modelValue ? props.activeColor : props.inactiveColor
]);

const toggleClasses = computed(() => [
  'absolute rounded-full transition-transform duration-300',
  props.isDisabled ? '' : 'active:scale-95',
  props.modelValue ? 'translate-x-full' : 'translate-x-0',
  props.size === 'sm' ? 'w-4 h-4' : '',
  props.size === 'md' ? 'w-5 h-5' : '',
  props.size === 'lg' ? 'w-7 h-7' : '',
  props.size === 'xl' ? 'w-9 h-9' : '',
  'bg-white'
]);
</script>

<template>
  <Core :modelValue="props.modelValue" :isDisabled="props.isDisabled" @update:modelValue="emit('update:modelValue', $event)">
    <template #default="{ isActive, toggleSwitch }">
      <div :class="switchClasses" @click="toggleSwitch">
        <span :class="toggleClasses"></span>
      </div>
    </template>
  </Core>
</template>
