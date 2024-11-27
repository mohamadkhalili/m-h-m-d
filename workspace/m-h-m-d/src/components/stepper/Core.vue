<template>
  <div class="flex-container" >
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
        <i v-if="step.number < modelValue" class="fa fa-check"></i>
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
const props = defineProps(coreProps);
const emit = defineEmits(stepperEmits);

const progressStyle = computed(() => {
  if (props.steps.length === 0) return {};
  const progress = ((props.modelValue - 1) / (props.steps.length - 1)) * 100;
  return { width: `${progress}%` };
});
const progressValue = computed(() => {
  if (!props.steps.length) return 0; // No steps, progress is 0
  return ((props.modelValue - 1) / (props.steps.length - 1)) * 100;
});
const moveStep = (stepNumber: number) => {
  emit("update:modelValue", stepNumber);
};
</script>
<style>
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 1em;
}

.progress {
  position: absolute;
  top: 2em;
  height: 5px;
  background-color: #cdcdcd;
  width: 100%;
}

.progress-bar {
  background-color: #46c0bd;
  height: 100%;
}

.step {
  text-align: center;
  z-index: 2;
}

.step-number {
  background-color: #cdcdcd;
  padding: 0.5em;
  color: white;
  border-radius: 2em;
  cursor: pointer;
}

.step.done .step-number {
  background-color: #46c0bd;
}

.step.current .step-number {
  background-color: #b384c7;
}

.step-label {
  padding-top: 5px;
}
</style>