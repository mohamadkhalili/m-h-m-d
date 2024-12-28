<template>
  <div :class="classes.container">
    <div :class="adapter(classes.countDownClass).value">
      {{ formatTime(time) }}
    </div>
    <slot name="controls" :is-running="isRunning" :start="start" :reset="reset"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { CountDownClasses } from '../../styles/CountDownClasses';
import type { CountDownProps } from './Props';
import { useAdapterClass } from '../../composables/UseClass';

const emit = defineEmits(['update:time', 'finish']);

const adapter = useAdapterClass();
const props = withDefaults(defineProps<CountDownProps>(), {
  autoStart: false,
});

const classes = CountDownClasses;
const time = ref(props.time); 
const isRunning = ref(false);
let timer: ReturnType<typeof setInterval> | null = null;

const formatTime = (seconds: number): string => {
  if (seconds < 3600) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  } else {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
};

const start = () => {
  if (!isRunning.value && time.value > 0) {
    isRunning.value = true;
    timer = setInterval(() => {
      time.value--;
      emit('update:time', time.value); // Ensure this line is present
      if (time.value <= 0) {
        stop();
        emit('finish');
      }
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
  time.value = props.time;
  emit('update:time', time.value); 
};

watch(() => props.time, (newInitialTime) => {
  time.value = newInitialTime;
 
});

defineExpose({
  start,
  stop,
  reset,
  isRunning,
  time,
});

onMounted(() => {
  if (props.autoStart && !isRunning.value) {
    start();
  }
});
</script>
