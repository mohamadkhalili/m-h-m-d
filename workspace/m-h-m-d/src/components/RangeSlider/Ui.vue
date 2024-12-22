<script setup>
import { computed } from 'vue';
import { props, updateValue } from './Core.vue'; // ایمپورت منطق

const classes = computed(() => {
  return props.variant === 'default' ? rangeSliderClasses : rangeSliderClasses.variants[props.variant];
});
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
