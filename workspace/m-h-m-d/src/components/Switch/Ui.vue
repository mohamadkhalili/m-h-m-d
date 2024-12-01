<script setup>
import { computed, defineProps, defineEmits } from 'vue';
import { SwitchProps } from './props';
import Core from './Core.vue';

const props = defineProps(SwitchProps);
const emit = defineEmits(['update:modelValue']);

const switchClasses = computed(() => [
  'relative inline-flex items-center transition-colors duration-300 rounded-full',
  props.isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
  props.variant === 'rounded' ? 'rounded-full' : '',
  props.variant === 'shadow' ? 'shadow-md' : '',
  props.variant === 'inside' ? 'flex justify-between items-center' : '',
  props.size === 'sm' ? 'w-10 h-5' : '',
  props.size === 'md' ? 'w-12 h-6' : '',
  props.size === 'lg' ? 'w-16 h-8' : '',
  props.size === 'xl' ? 'w-20 h-10' : '',
  props.modelValue ? props.activeColor : props.inactiveColor
]);

const toggleClasses = computed(() => [
  'absolute rounded-full transition-transform duration-300 transform',
  props.isDisabled ? '' : 'active:scale-95',
  props.size === 'sm' ? 'w-4 h-4' : '',
  props.size === 'md' ? 'w-5 h-5' : '',
  props.size === 'lg' ? 'w-7 h-7' : '',
  props.size === 'xl' ? 'w-9 h-9' : '',
  'bg-white'
]);

const getTranslateValue = (size) => {
  switch (size) {
    case 'sm':
      return 'translateX(122%)'; 
    case 'md':
      return 'translateX(120%)';
    case 'lg':
      return 'translateX(115%)';
    case 'xl':
      return 'translateX(110%)'; 
    default:
      return 'translateX(100%)';
  }
};

const toggleStyles = computed(() => ({
  transform: props.modelValue ? getTranslateValue(props.size) : 'translateX(5%)',
  left: '0.125rem',
}));

const toggleSwitch = () => {
  if (!props.isDisabled) {
    emit('update:modelValue', !props.modelValue);
  }
};
</script>

<template>
  <Core :modelValue="props.modelValue" :isDisabled="props.isDisabled" :defaultChecked="props.defaultChecked" @update:modelValue="emit('update:modelValue', $event)">
    <template #default="{ isActive, toggleSwitch }">
      <div :class="switchClasses" @click="toggleSwitch">
        <span class="absolute left-0 ml-1 text-xs" v-if="props.variant === 'inside' && !isActive">{{ props.label1 }}</span>
        <span class="absolute right-0 mr-1 text-xs" v-if="props.variant === 'inside' && isActive">{{ props.label2 }}</span>
        <span :class="toggleClasses" :style="toggleStyles"></span>
      </div>
    </template>
  </Core>
</template>
