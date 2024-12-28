<template>
  <Core :modelValue="modelValue" @update:modelValue="handleItemChange">
    <template #progress>
      <slot name="progress"></slot>
      <div
        v-if="showProgress"
        :class="
          adapterClass(progressClasses.progress + ' ' + progressClass).value
        "
        style="position: relative; overflow: hidden"
      >
        <slot name="progressFill"></slot>
        <div
          v-show="pendingValue < 450"
          v-if="showProgressFill"
          ref="progressFillRef"
          :class="
            adapterClass(progressClasses.progressFill + ' ' + progressFillClass)
              .value
          "
          :style="
            pending
              ? {
                  position: 'absolute',
                  left: '0%',
                  width: '25%',
                  height: '100%',
                  transform: `translateX(${pendingValue}%)`,
                  transition: 'transform 0.1s',
                }
              : { width: `${modelValue}%` }
          "
        ></div>
      </div>
    </template>
  </Core>
</template>
  
<script setup lang="ts">
import Core from "./Core.vue";
import { uiProps } from "./Props";
import { progressEmits } from "./Emits";
import { progressClasses } from "../../styles/ProgressClasses";
import { useAdapterClass } from "../../composables/UseClass";
import { uiSlots } from "./Slots";
import { computed, onMounted, onUnmounted, nextTick, useSlots, ref } from "vue";

const uiSlots = defineSlots<uiSlots>();
const adapterClass = useAdapterClass();
const props = defineProps(uiProps);
const emit = defineEmits(progressEmits);
const slots = useSlots();
const showProgress = computed(() => !slots.progress);
const showProgressFill = computed(() => !slots.progressFill);
const handleItemChange = (newValue: Number) => {
  emit("update:modelValue", newValue);
};

let interval: ReturnType<typeof setInterval>;
let pendingValue = ref(-100); 
let loopingInterval: ReturnType<typeof setInterval> | null = null;
let isPaused = false;
const startLoopingProgress = () => {
  loopingInterval = setInterval(() => {
    if (isPaused) return;
    pendingValue.value += 1;
    if (pendingValue.value == 450) {
      isPaused = true;
      setTimeout(() => {
        pendingValue.value = -100;
        isPaused = false;
      }, 50);
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
  