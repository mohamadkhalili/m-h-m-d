<template>
  <div class="flex-container">
    <!-- Progress Bar -->
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="progressStyle"
        :aria-valuenow="progressValue"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>

    <div
      class="step"
      v-for="step in steps"
      :key="step.number"
      :class="{
        done: step.number < modelValue,
        current: step.number === modelValue,
      }"
    >
      <div
        class="step-number"
        :id="'step-' + step.number"
        @click="moveStep(step.number)"
      >
        <svg-icon
          v-if="step.number < modelValue"
          type="mdi"
          :path="mdiCheck"
        ></svg-icon>
        <span v-else>{{ step.number }}</span>
      </div>
      <div class="step-label">{{ step.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { coreProps } from "./Props";
import { stepperEmits } from "./Emits";
import {
  mdiCheck
} from "@mdi/js";
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
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding-bottom: 1em;
  padding-top: 1em;
}

.progress {
  position: absolute;
  top: 2em;
  height: 5px;
  margin: 0;
  box-shadow: none;
  background-color: #cdcdcd;
  width: 100%;
  overflow: hidden;
}

.progress-bar {
  background-color: #46c0bd;
  height: 100%;
  transition: width 0.3s ease; /* Smooth transition for width change */
}

.step {
  text-align: center;
  z-index: 2;
}

.step-number {
  background-color: #cdcdcd;
  padding: 0.5em;
  color: white;
  border-radius: 50%;
  cursor: pointer;

  background-size: 0% 0%;
  background-position: center;
  background-image: radial-gradient(circle at center, #b384c7 50%, transparent 50%);
  background-repeat: no-repeat;
}

.step.done .step-number {
  background-color: #46c0bd;
}

.step.current .step-number {
  background-size: 200% 200%;
  transition: all 0.4s 0.5s;
}

.step-label {
  padding-top: 5px;
}
</style>

