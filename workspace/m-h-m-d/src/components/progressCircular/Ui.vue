<template>
  <Core :modelValue="modelValue" @update:modelValue="handleItemChange">
    <template #progress>
      <slot name="progress"></slot>
      <div class="relative flex items-center justify-center w-20 h-20">
        <svg
          viewBox="0 0 100 100"
          :style="{ transform: `rotate(${startAngle - 90}deg)`, transformOrigin: '50% 50%' }"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="currentColor"
            stroke-width="10"
            class="text-gray-300"
          ></circle>
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="currentColor"
            stroke-width="10"
            stroke-dasharray="282.6"
            :stroke-dashoffset="282.6 - (modelValue / 100) * 282.6"
            class="text-blue-500"
            stroke-linecap="round"
          ></circle>
        </svg>
        <slot name="numberFill">
          <div
            v-if="showNumberFill"
            class="absolute text-xl font-semibold text-blue-500"
          >
            {{ modelValue }}%
          </div>
        </slot>
      </div>
    </template>
  </Core>
</template>

<script setup lang="ts">
import Core from "./Core.vue";
import { uiProps } from "./Props";
import { progressEmits } from "./Emits";
import { uiSlots } from "./Slots";
import { progressCircularClasses } from '../../styles/ProgressCircularClasses'
const props = defineProps(uiProps);
const emit = defineEmits(progressEmits);
const uiSlots = defineSlots<uiSlots>();

const handleItemChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};
</script>
