<script setup>
import { computed } from 'vue';
import { SwitchProps, variant } from './props';
import Core from './Core.vue';

const props = defineProps(SwitchProps);
const emit = defineEmits(['update:modelValue']);


const switchClasses = computed(() => [
  'relative inline-flex items-center transition-colors duration-300 rounded-full',
  props.isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
  props.variant === 'inside' ? 'flex justify-between items-center' : '',
  props.size === 'sm' ? 'w-11 h-5' : '',
  props.size === 'md' ? 'w-14 h-7' : '',
  props.size === 'lg' ? 'w-16 h-8' : '',
  props.size === 'xl' ? 'w-20 h-10' : '',
  props.variant==="outside" ?'h-4':'',
  props.modelValue ? props.activeColor : props.inactiveColor,
]);


const toggleClasses = computed(() => [
  'absolute rounded-full transition-transform duration-300 transform',
  props.isDisabled ? 'opacity-60' : 'active:scale-95',
  props.size === 'sm' ? 'w-4 h-4' : '',
  props.size === 'md' ? 'w-5 h-5' : '',
  props.size === 'lg' ? 'w-7 h-7' : '',
  props.size === 'xl' ? 'w-8 h-8' : '',
  'bg-white',
  props.variant ==="outside" ? 'scale-125':'scale-1',
]);


const toggleSwitch = () => {
  if (!props.isDisabled) {
    emit('update:modelValue', !props.modelValue);
  }
};

const getTranslateValue = (size) => {
  switch (size) {
    case 'sm':
      return 'translateX(155%)';
    case 'md':
      return 'translateX(160%)';
    case 'lg':
      return 'translateX(110%)';
      
    case 'xl':
      return 'translateX(130%)';
    default:
      return 'translateX(100%)';
  }
};
</script>

<template>
  <Core :modelValue="props.modelValue" :variant="props.variant" :isDisabled="props.isDisabled" :defaultChecked="props.defaultChecked" @update:modelValue="emit('update:modelValue', $event)">
    <template #default="{ isActive, toggleSwitch }">
      <div :class="switchClasses" @click="toggleSwitch">
        <span :class="['absolute right-0 mr-1 text-xs text-white', props.size === 'lg' || props.size === 'xl' ? 'text-sm' : '' ]" v-if="!isActive">{{ props.label1 }}</span>
        <span :class="'absolute left-0 ml-1 text-xs text-white' " v-if="props.label2 && isActive">{{ props.label2 }}</span>
        <span :class="toggleClasses" :style="{ transform: isActive ? getTranslateValue(props.size) : 'translateX(14%)' }"></span>
      </div>
    </template>
  </Core>
</template>
