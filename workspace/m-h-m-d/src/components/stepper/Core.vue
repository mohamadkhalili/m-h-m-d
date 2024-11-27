<template>
  <div class="flex flex-row justify-between relative pb-4 pt-4">
    <!-- Progress Bar -->
    <div class="absolute top-8 h-1.5 m-0 shadow-none bg-gray-300 w-full overflow-hidden">
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
      class="text-center z-20"
      v-for="step in steps"
      :key="step.number"
    >
      <div
        class="bg-gray-300 p-2 text-white rounded-full cursor-pointer bg-[length:0%_0%] bg-center bg-no-repeat bg-[radial-gradient(circle_at_center,_#b384c7_50%,_transparent_50%)]"
        :class="{
          'bg-teal-400 transition-all duration-500 delay-200': step.number <= modelValue
        }"
        :id="'step-' + step.number"
        @click="moveStep(step.number)"
      >
        <svg-icon
          v-if="step.number < modelValue"
          type="mdi"
          :path="mdiIcons[step.icon]"
        ></svg-icon>
        <span v-else>{{ step.number }}</span>
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
  if (props.steps.length === 0) return { width: '0%' }; // No steps, no progress
  const progress = Math.min(
    ((props.modelValue - 1) / (props.steps.length - 1)) * 100,
    100
  );
  return { width: `${progress}%` };
});

const progressValue = computed(() => {

  console.log((props.modelValue - 1) / (props.steps.length - 1) * 100);
  if (!props.steps || props.steps.length === 0) return 0;
  return Math.min(
    ((props.modelValue - 1) / (props.steps.length - 1)) * 100,
    100
  );
});

// Handle step navigation
const moveStep = (stepNumber: number) => {
  emit("update:modelValue", stepNumber);
};
</script>

<style scoped>
</style>

