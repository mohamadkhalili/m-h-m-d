<template>
  <div :class="classes.container">
    <div :class="classes.display">
      {{ formatTime(time) }}
    </div>
    <slot name="controls" 
          :is-running="isRunning" 
          :start="start" 
          :reset="reset">
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CountDownClasses } from '../../styles/CountDownClasses';
import type { CountDownProps } from './Props';

const props = withDefaults(defineProps<CountDownProps>(), {
  autoStart: false,
  initialTime: 60
});

const classes = CountDownClasses;
const time = ref(props.initialTime);
const isRunning = ref(false);
let timer: ReturnType<typeof setInterval> | null = null;

const start = () => {
  if (!isRunning.value && time.value > 0) {
    isRunning.value = true;
    timer = setInterval(() => {
      time.value--;
      if (time.value === 0) {
        stop();
        emit('finish', time.value);
      }
      emit('update:time', time.value);  // Emit time change to parent
    }, 1000);
  }
};

const stop = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  isRunning.value = false;
};

const reset = () => {
  stop();
  time.value = props.initialTime;
  emit('update:time', time.value); 
};

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

defineExpose({
  start,
  stop,
  reset,
  isRunning,
  time,
});

import { defineEmits } from 'vue';

const emit = defineEmits<{
  (e: 'update:time', value: number): void;
  (e: 'finish', value: number): void;
}>();
</script>
