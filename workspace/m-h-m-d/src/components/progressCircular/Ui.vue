<template>
  <Core :modelValue="modelValue" @update:modelValue="handleItemChange">
    <template #progress>
      <slot name="progress"></slot>
      <div class="relative flex items-center justify-center w-20 h-20">
        <svg class="absolute w-full h-full" viewBox="0 0 100 100">
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
            :stroke-dashoffset="pending ? pendingValue : 282.6 - (modelValue / 100) * 282.6"
            class="text-blue-500 transition-all duration-300"
            stroke-linecap="round"
          ></circle>
        </svg>
        <slot name="progressFill">
          <div class="absolute text-xl font-semibold text-blue-500">
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
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps(uiProps);
const emit = defineEmits(progressEmits);
const pendingValue = ref(282.6); // Full circle length
let loopingInterval: ReturnType<typeof setInterval> | null = null;
let isPaused = false;

const handleItemChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};

const startLoopingProgress = () => {
  loopingInterval = setInterval(() => {
    if (isPaused) return;
    pendingValue.value -= 2; // Incremental change for the pending state
    if (pendingValue.value <= 0) {
      pendingValue.value = 282.6;
    }
  }, props.pendingSpeed);
};

onMounted(() => {
  if (props.pending) startLoopingProgress();
});

onUnmounted(() => {
  if (loopingInterval) clearInterval(loopingInterval);
});
</script>