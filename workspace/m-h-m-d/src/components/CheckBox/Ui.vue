<template>
    <div
      :class="[
        'flex items-center space-x-3 select-none',
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ]"
      @click="toggleCheck"
    >
      <!-- Checkbox box -->
      <div
        :class="[
          'flex justify-center items-center border rounded transition-all duration-200',
          sizeClasses,
          modelValue ? [color ,'border-gray-200 border-2 text-white'] : 'bg-white border-gray-300',
          isDisabled ? '' : 'hover:border-blue-400',
           
        ]"
      >
        <span v-if="modelValue" class="text-sm font-bold">
          &#10003; <!-- Checkmark -->
        </span>
      </div>
      <!-- Checkbox label -->
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
      default: '',
    },
    size: {
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
  
  // Toggle checkbox state
  const toggleCheck = () => {
    if (!props.isDisabled) {
      isActive.value = !isActive.value;
      emit('update:modelValue', isActive.value);
    }
  };
  
  const sizeClasses = computed(() => {
    switch (props.size) {
      case 'sm':
        return 'w-4 h-4 text-xs'; // Small size
      case 'md':
        return 'w-6 h-6 text-sm'; // Medium size
      case 'lg':
        return 'w-8 h-8 text-base'; // Large size
      default:
        return 'w-6 h-6'; // Default to medium size
    }
  });
  </script>
  