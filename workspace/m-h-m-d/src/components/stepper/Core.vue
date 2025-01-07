<template>
  <div :class="adapterClass(stepperClasses.generalClass).value">
    <!-- Progress Bar -->
    <slot name="progress"></slot>
    <div
      v-if="showProgress"
      :class="
        adapterClass(stepperClasses.uiProgressClass + ' ' + progressClass).value
      "
    >
      <slot name="progressBar"></slot>
      <div
        v-if="showProgressBar"
        :class="
          adapterClass(
            stepperClasses.uiProgressBarClass + ' ' + progressBarClass
          ).value
        "
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
        [adapterClass(stepperClasses.stepClass).value]:
          index !== 0 && index !== steps.length - 1,
        [adapterClass(stepperClasses.startStepClass).value]: index === 0,
        [adapterClass(stepperClasses.endStepClass).value]:
          index === steps.length - 1,
      }"
    >
      <div :class="stepperClasses.stepsClass">
        <slot
          name="step"
          :index="index + 1"
          :step="step"
          :currentStep="modelValue"
          :status="getStatus(index + 1)"
        ></slot>
        <div
          v-if="showStep"
          :class="
            index + 1 <= modelValue
              ? adapterClass(stepperClasses.uiDoneClass + ' ' + doneClass).value
              : adapterClass(stepperClasses.uiNotDoneClass + ' ' + notDoneClass)
                  .value
          "
          @click="moveStep(index + 1)"
          ref="stepRefs"
        >
          <svg-icon
            v-if="index + 1 < modelValue"
            type="mdi"
            :path="mdiIcons[step.icon]"
          ></svg-icon>
          <span v-else class="text-xs truncate">{{ index + 1 }}</span>
        </div>
        <div
          v-if="showStep"
          :class="stepperClasses.labelClass"
        >
          {{ step.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, useSlots, watch } from "vue";
import { coreProps } from "./Props";
import { stepperEmits } from "./Emits";
import { stepperSlots } from "./Slots";
import * as mdiIcons from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import { stepperClasses } from "../../styles/StepperClasses";
import { useAdapterClass } from "../../composables/UseClass";
const adapterClass = useAdapterClass();
const props = defineProps(coreProps);
const emit = defineEmits(stepperEmits);
const uiSlots = defineSlots<stepperSlots>();
const slots = useSlots();
const showStep = computed(() => !slots.step);
const showProgress = computed(() => !slots.ptogress);
const showProgressBar = computed(() => !slots.progressBar);

const moveStep = (stepNumber: number) => {
  if (props.allowStepClick) {
    emit("update:modelValue", stepNumber);
  }
};
const getStatus = (index: number): string => {
  if (index === props.modelValue) {
    return "pending";
  } else if (index > props.modelValue) {
    return "notDone";
  } else {
    return "done";
  }
};
const progressStyle = ref({ width: "0%" });
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

