<template>
  <div :class="classes.container">
    <div :class="classes.display">
      {{ formatTime(time) }}
    </div>
    <slot name="controls" :is-running="core?.isRunning" :start="handleStartStop" :reset="handleReset">
      <!-- Default slot content can be provided here if needed -->
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { CountDownProps } from './Props'
import { CountDownClasses } from '../../styles/CountDownClasses'
import CoreCountDown from './core.vue'

const props = withDefaults(defineProps<CountDownProps>(), {
  autoStart: false
})

const classes = CountDownClasses
const time = ref(props.initialTime)
const core = ref<InstanceType<typeof CoreCountDown> | null>(null)

const handleStartStop = () => {
  if (core.value) {
    core.value.isRunning ? core.value.stop() : core.value.start()
  }
}

const handleReset = () => {
  core.value?.reset()
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

onMounted(() => {
  if (props.autoStart) {
    core.value?.start()
  }
})
</script>