<template>
  <slot :time="time" :is-running="isRunning"></slot>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import type { CountDownProps } from './Props'
import type { CountDownEmits } from './Emits'

const props = defineProps<CountDownProps>()
const emit = defineEmits<CountDownEmits>()

const time = ref<number>(props.initialTime)
const isRunning = ref<boolean>(props.autoStart || false)
let timer: ReturnType<typeof setInterval> | null = null

const start = () => {
  if (!isRunning.value && time.value > 0) {
    isRunning.value = true
    timer = setInterval(() => {
      time.value--
      emit('update:time', time.value)
      if (time.value === 0) {
        stop()
        emit('finish')
      }
    }, 1000)
  }
}

const stop = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  isRunning.value = false
}

const reset = () => {
  stop()
  time.value = props.initialTime
  emit('update:time', time.value)
}

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

defineExpose({
  start,
  stop,
  reset,
  isRunning,
  time
})
</script>