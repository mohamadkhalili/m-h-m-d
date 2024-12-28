<template>
    <div :class="classes.container">
      <core 
        :initial-time="initialTime"
        :auto-start="autoStart"
        @update:time="updateTime"
        @finish="onFinish"
        v-slot:controls="{ isRunning, start, reset }">
        <button @click="start" :class="isRunning ? 'pauseButton' : 'startButton'">
          {{ isRunning ? 'Pause' : 'Start' }}
        </button>
        <button @click="reset" class="resetButton">Reset</button>
      </core>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import core from './core.vue';
  import { CountDownClasses } from '../../styles/CountDownClasses';
  import type { CountDownProps } from './Props';
  
  const classes = CountDownClasses;
  
  const initialTime = ref(60);  // Initial time
  const autoStart = ref(false); // Auto start flag
  
  const updateTime = (newTime: number) => {
    console.log('Updated time:', newTime);
  };
  
  const onFinish = () => {
    console.log('Countdown finished');
  };
  </script>
  