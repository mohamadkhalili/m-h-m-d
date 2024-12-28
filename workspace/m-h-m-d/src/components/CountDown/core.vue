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
  format: 'hh:mm:ss',
});

const classes = CountDownClasses;
const time = ref(props.time); 
const isRunning = ref(false);
let timer: ReturnType<typeof setInterval> | null = null;

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours === 0) {
    return `${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
  }

  switch (props.format) {
    case 'hh mm ss':
      return `${hours.toString().padStart(2, '0')} ${mins.toString().padStart(2, '0')} ${secs.toString().padStart(2, '0')}`;
    case 'hhH mmM ssS':
      return `${hours.toString().padStart(2, '0')} H ${mins.toString().padStart(2, '0')} M ${secs.toString().padStart(2, '0')} S`;
    case 'hh hours mm minutes ss seconds':
      return `${hours.toString().padStart(2, '0')} hours ${mins.toString().padStart(2, '0')} minutes ${secs.toString().padStart(2, '0')} seconds`;
    case 'hh:mm:ss':
    default:
      return `${hours.toString().padStart(2, '0')} : ${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
  }
};

const start = () => {
  if (!isRunning.value && time.value > 0) {
    isRunning.value = true;
    timer = setInterval(() => {
      time.value--;
      emit('update:time', time.value); 
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
