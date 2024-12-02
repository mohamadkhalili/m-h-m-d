<template>
    <div
      :class="[
        'flex items-center space-x-3 select-none',
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ]"
      @click="toggleCheck"
    >
      <div
        :class="[
          'flex justify-center items-center border  transition-all duration-200',
          sizeClasses,RadiusClasses,
          modelValue ? [color ] : 'bg-white border-gray-300',
          isDisabled ? '' : 'hover:border-blue-400',
           
        ]"
      >
        <span v-if="modelValue" :class="[ 'font-bold' ,size ==='sm' ? 'text-xs' : '',size ==='lg' ? 'text-xl' : '']">
          &#10003; 
        </span>
      </div>
      <label
        :class="[
          'text-sm',
          lineThrough && modelValue ? 'line-through' : '',
        ]"
      >
        <slot />
      </label>
    </div>
  </template>
  
  <script setup>
  import { computed, defineProps, defineEmits, ref } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'bg-blue-500 text-white border-blue-500',
    },
    size: {
      type: String,
      default: 'md',
    },
    radius: {
      type: String,
      default: 'md',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    lineThrough: {
      type: Boolean,
      default: false,
    },
  });
  
  const emit = defineEmits(['update:modelValue']);
  const isActive = ref(props.modelValue);

  const toggleCheck = () => {
    if (!props.isDisabled) {
      isActive.value = !isActive.value;
      emit('update:modelValue', isActive.value);
    }
  };
  
  const sizeClasses = computed(() => {
    switch (props.size) {
      case 'sm':
        return 'w-4 h-4 '; 
      case 'md':
        return 'w-6 h-6 '; 
      case 'lg':
        return 'w-8 h-8 '; 
      default:
        return 'w-6 h-6'; 
    }
  });
  const RadiusClasses = computed(() => {
    switch (props.radius) {
      case 'sm':
        return 'rounded-sm '; 
      case 'md':
        return 'rounded-md '; 
      case 'lg':
        return 'rounded-lg '; 
        case 'full':
        return 'rounded-full '; 
        case 'none':
        return 'rounded-none'; 
      default:
        return 'rounded-md'; 
    }
  });
  </script>
  