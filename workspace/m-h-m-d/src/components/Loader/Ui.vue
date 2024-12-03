<template>
  <Core v-if="isVisible" :class="[sizeClasses]">
    <span v-if="variant === 'default'" :class="['loader', colorClass]"></span>
    <span v-else-if="variant === 'spinner'" :class="['loader-spinner', colorClass]"></span>
    <span v-else-if="variant === 'circle'" :class="['loader-circle', colorClass]"></span>
    <div v-else-if="variant === 'dots'" :class="['loader-dots', colorClass]">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Core>
</template>

<script setup>
import { computed } from 'vue';
import { loaderProps } from './props';

const props = defineProps(loaderProps);

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-6 h-6';
    case 'md':
      return 'w-8 h-8';
    case 'lg':
      return 'w-12 h-12';
    default:
      return 'w-8 h-8';
  }
});

const colorClass = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'border-primary';
    case 'secondary':
      return 'border-secondary';
    case 'warning':
      return 'border-warning';
    case 'error':
      return 'border-error';
    case 'light':
      return 'border-light';
    case 'dark':
      return 'border-dark';
    default:
      return 'border-default';
  }
});
</script>

<style scoped>
.loader, .loader-spinner, .loader-circle, .loader-dots div {
  width: 3rem;
  height: 3rem;
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  border-radius: 50%;
  position: relative;
  animation: spin 1s linear infinite;
}

.loader::before, .loader-spinner::before, .loader-circle::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: inherit;
  animation: inherit;
}

.border-primary {
  border-right-color: #0ba131;
}

.border-secondary {
  border-right-color: #af0baf;
}

.border-warning {
  border-right-color: #e6b820;
}

.border-error {
  border-right-color: #f81010;
}

.border-light {
  border-right-color: #e4e4e4;
}

.border-dark {
  border-right-color: #2e2e2e;
}

.border-default {
  border-right-color: #1371ec;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader-dots {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
  row-gap: 0;
  scale: 0.8;
  justify-content: center;
  align-items: center;
}

.loader-dots div {
  background: currentColor;
  animation: loader-dots 1.2s linear infinite;
}

@keyframes loader-dots {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
