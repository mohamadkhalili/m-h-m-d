<script setup>
import { computed } from 'vue';
import { rangeSliderClasses } from '../../styles/RangeSlider';

const props = defineProps({
  min: Number,
  max: Number,
  value: [Number, Array],
  variant: {
    type: String,
    default: 'default',
    validator: value => ['default', 'primary', 'secondary', 'music', 'sound', 'carRental'].includes(value),
  },
  range: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:value']);

const classes = computed(() => {
  return props.variant === 'default' ? rangeSliderClasses : rangeSliderClasses.variants[props.variant];
});

const updateValue = (event, index = null) => {
  if (props.range && Array.isArray(props.value)) {
    const newValue = [...props.value];
    newValue[index] = Number(event.target.value);
    emit('update:value', newValue);
  } else {
    emit('update:value', Number(event.target.value));
  }
};
</script>

<template>
  <div :class="classes.uiContainerClass">
    <input 
      v-if="!props.range" 
      type="range" 
      :min="props.min" 
      :max="props.max" 
      :value="props.value" 
      @input="updateValue" 
      :class="classes.uiInputClass" 
    />
    <template v-else>
      <input 
        type="range" 
        :min="props.min" 
        :max="props.max" 
        :value="props.value[0]" 
        @input="event => updateValue(event, 0)" 
        :class="classes.uiInputClass" 
      />
      <input 
        type="range" 
        :min="props.min" 
        :max="props.max" 
        :value="props.value[1]" 
        @input="event => updateValue(event, 1)" 
        :class="classes.uiInputClass" 
      />
    </template>
    <span :class="classes.uiValueClass">{{ props.range ? `${props.value[0]} - ${props.value[1]}` : props.value }}</span>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>