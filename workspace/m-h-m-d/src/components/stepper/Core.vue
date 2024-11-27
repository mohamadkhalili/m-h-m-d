<template>
  <div class="flex flex-row justify-between relative pb-4 pt-4">
    <!-- Progress Bar -->
    <div
      class="absolute top-8 h-1.5 m-0 shadow-none bg-gray-300 w-[95%] overflow-hidden"
    >
      <div
        class="bg-teal-800 h-full transition-all duration-300 ease-linear"
        role="progressbar"
        :style="progressStyle"
        :aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>

    <div
      v-for="(step, index) in steps"
      :key="index + 1"
      :class="{
        'flex flex-col items-center z-20':
          index !== 0 && index !== steps.length - 1,
        'flex flex-col items-start z-20': index === 0,
        'flex flex-col items-end z-20': index === steps.length - 1,
      }"
    >
      <slot
        name="step"
        :index="index + 1"
        :step="step"
        :currentStep="modelValue"
      >
      </slot>
      <div
      class="bg-gray-300 p-2 text-white rounded-full cursor-pointer items-center flex justify-center w-10 h-10 text-center"
      :class="{
        'bg-teal-800 transition-all duration-500 delay-200':
          index +1 <= modelValue,
      }"
      @click="moveStep(index + 1)"
      ref="stepRefs"
    >
      <svg-icon
        v-if="index + 1 < modelValue"
        type="mdi"
        :path="mdiIcons[step.icon]"
      ></svg-icon>
      <span v-else class="text-xs truncate">{{ index }}</span>
    </div>
    <div class="pt-1.5">{{ step.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { coreProps } from "./Props";
import { stepperEmits } from "./Emits";
import * as mdiIcons from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
const props = defineProps(coreProps);
const emit = defineEmits(stepperEmits);


const moveStep = (stepNumber: number) => {
  if (props.allowStepClick) {
    emit("update:modelValue", stepNumber);
  }
};
const progressStyle = ref({ width: "0%" })
const stepRefs = ref<HTMLDivElement[]>([]);
watch(
  () => props.modelValue,
  async (newValue) => {
    if (props.steps.length === 0) {
      progressStyle.value = { width: "0%" };
      return;
    }

    await nextTick();

    const first = stepRefs.value[0];
    const current = stepRefs.value[newValue - 1];

    if (first && current) {
      const delta =
        current.getBoundingClientRect().right -
        first.getBoundingClientRect().right;
      progressStyle.value = { width: `${delta}px` };
    }
  },
  { immediate: true }
);
</script>

<style scoped>
</style>

