<template>
  <Core :modelValue="modelValue" @update:modelValue="handleItemChange">
    <template #progress>
      <slot name="progress"></slot>
      <div :class="adapterClass(progressCircularClasses.progress + ' ' + progressClass).value">
        <svg
          viewBox="0 0 100 100"
          :style="{ transform: `rotate(${rotate - 90}deg)`, transformOrigin: '50% 50%' }"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="currentColor"
            stroke-width="10"
            :class="adapterClass(progressCircularClasses.progressContainer + ' ' + progressContainerClass).value"
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
            :class="adapterClass(progressCircularClasses.progressFill + ' ' + progressFillClass).value"
            stroke-linecap="round"
          ></circle>
        </svg>
        <slot name="numberFill">
          <div
            v-if="showNumberFill"
            :class="adapterClass(progressCircularClasses.numberFill + ' ' + numberFillClass).value"
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
import { progressCircularClasses } from '../../styles/ProgressCircularClasses';
import { useAdapterClass } from "../../composables/UseClass";
const adapterClass = useAdapterClass();
const props = defineProps(uiProps);
const emit = defineEmits(progressEmits);
const uiSlots = defineSlots<uiSlots>();

const handleItemChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};
</script>
