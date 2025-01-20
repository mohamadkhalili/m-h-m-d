<template>
  <div
    :class="[
      CheckboxClasses.container,
      isDisabled ? CheckboxClasses.disabled : CheckboxClasses.enabled,
    ]"
    @click="toggleCheck"
  >
    <div
      :class="[
        CheckboxClasses.checkboxBase,
        sizeClasses, radiusClasses,
        modelValue ? color : CheckboxClasses.unchecked,
        isDisabled ? '' : CheckboxClasses.hover,
      ]"
    >
      <span v-if="modelValue" :class="[CheckboxClasses.fontBold, textSize]">
        &#10003; 
      </span>
    </div>
    <label :class="[CheckboxClasses.labelBase, lineThrough && modelValue ? CheckboxClasses.lineThrough : '']">
      <slot />
    </label>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { CheckboxClasses } from '../../styles/CheckboxClasses';
import { useAdapterClass } from '../../composables/UseClass';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'bg-slate-700 text-white border-slate-500',
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
const Adapter = useAdapterClass;


const toggleCheck = () => {
  if (!props.isDisabled) {
    isActive.value = !isActive.value;
    emit('update:modelValue', isActive.value);
  }
};

const sizeClasses = computed(() => CheckboxClasses.size[props.size] || CheckboxClasses.size.md);
const radiusClasses = computed(() => CheckboxClasses.radius[props.radius] || CheckboxClasses.radius.md);
const textSize = computed(() => props.size === 'sm' ? CheckboxClasses.fontSize.sm : props.size === 'lg' ? CheckboxClasses.fontSize.lg : '');
</script>
