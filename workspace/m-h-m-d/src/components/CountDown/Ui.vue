<template>
    <div :class="classes.container">
      <core 
        :time="time"
        :auto-start="autoStart"
        @update:time="updateTime"
        @finish="onFinish"
        v-slot:controls="{ isRunning, start, reset }">
          
        <slot name="controls" :is-running="isRunning" :start="start" :reset="reset" />
      </core>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps } from 'vue';
  import core from './core.vue';
  import { CountDownClasses } from '../../styles/CountDownClasses';
  
  const props = defineProps<{ time: number }>();
  const classes = CountDownClasses;
  const time = ref(props.time);
  const autoStart = ref(true);
  
  const updateTime = (newTime: number) => {
    console.log('Updated time:', newTime);
  };
  
  const onFinish = () => {
    console.log('Countdown finished');
  };
  </script>
  