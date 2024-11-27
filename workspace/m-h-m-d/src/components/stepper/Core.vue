<template>
  <div class="flex flex-row justify-between relative pb-4 pt-4">
    <!-- Progress Bar -->
    <div
      class="absolute top-8 h-1.5 m-0 shadow-none bg-gray-300 w-[95%] overflow-hidden"
    >
      <div
        class="bg-teal-400 h-full transition-all duration-300 ease-linear"
        role="progressbar"
        :style="progressStyle"
        :aria-valuenow="progressValue"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>

    <div
      v-for="(step, index) in steps"
      :key="index + 1"
      :class="{
        'flex flex-col items-center z-20': index !== 0 && index !== steps.length -1,
        'flex flex-col items-start z-20': index === 0,
        'flex flex-col items-end z-20': index === steps.length -1,
      }"
    >
      <div
        class="bg-gray-300 p-2 text-white rounded-full cursor-pointer items-center flex justify-center w-10 h-10 text-center"
        :class="{
          'bg-teal-400 transition-all duration-500 delay-200':
            index + 1 <= modelValue,
        }"
        :id="'step-' + index + 1"
        @click="moveStep(index + 1)"
      >
        <svg-icon
          v-if="index + 1 < modelValue"
          type="mdi"
          :path="mdiIcons[step.icon]"
        ></svg-icon>
        <span v-else class="text-xs truncate">{{ index + 1 }}</span>
      </div>
      <div class="pt-1.5">{{ step.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { coreProps } from "./Props";
import { stepperEmits } from "./Emits";
import * as mdiIcons from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
// Define props and emits
const props = defineProps(coreProps);
const emit = defineEmits(stepperEmits);

// Computed properties for progress
const progressStyle = computed(() => {
  if (props.steps.length === 0) return { width: "0%" }; // No steps, no progress
  const progress = Math.min(
    ((props.modelValue - 1) / (props.steps.length - 1)) * 100,
    100
  );
  return { width: `${progress}%` };
});

const progressValue = computed(() => {
  console.log(((props.modelValue - 1) / (props.steps.length - 1)) * 100);
  if (!props.steps || props.steps.length === 0) return 0;
  return Math.min(
    ((props.modelValue - 1) / (props.steps.length - 1)) * 100,
    100
  );
});

// Handle step navigation
const moveStep = (stepNumber: number) => {
  if (props.allowStepClick) {
    emit("update:modelValue", stepNumber);
  }
};
</script>

<style scoped>
</style>

