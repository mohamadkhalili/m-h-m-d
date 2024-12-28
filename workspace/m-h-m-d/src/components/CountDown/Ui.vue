<template>
    <div :class="classes.container">
      <core 
        :time="time"  
        :autoStart="autoStart"
        :format="format"
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
const props = defineProps<{
  time: number; 
  autoStart: boolean; 
  format?: 'hh:mm:ss' | 'hh mm ss' | 'hhH mmM ssS'; // Add format prop
}>();
const classes = CountDownClasses;
const time = ref(props.time);
const autoStart = ref(props.autoStart);
const format = ref(props.format || 'hh:mm:ss'); // Default format
const updateTime = (newTime: number) => {
  time.value = newTime; 
};

const onFinish = () => {
};
</script>
