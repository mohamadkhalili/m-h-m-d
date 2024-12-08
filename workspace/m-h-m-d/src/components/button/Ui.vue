<template>
  <Core>
    <template #button>
      <button
        :class="[
          mergeClasses(uiButtonClass, buttonClass).value,
          { 'custom-button': true, 'CleanerEffect': propsData.CleanerEffect }
        ]"
        @click="createRipple"
      >
        <slot></slot>
        <span
          class="ripple"
          v-if="rippleVisible"
          :style="rippleStyle"
          @transitionend="resetRipple"
        ></span>
      </button>
    </template>
  </Core>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Core from './Core.vue';
import { props } from './props';
import { useMergeClasses } from "../../composables/useMergeClasses";

const mergeClasses = useMergeClasses();
const propsData = defineProps(props);

const rippleVisible = ref(false);
const rippleStyle = ref({});

const uiButtonClass = ref("rounded-lg text-sm w-24 h-10 text-white transition-all duration-200 cursor-pointer z-10 overflow-hidden bg-gradient-to-r from-slate-600 to-slate-700");

const createRipple = (event: MouseEvent) => {
  const button = event.currentTarget as HTMLButtonElement;
  const rect = button.getBoundingClientRect();
  
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  rippleStyle.value = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${y}px`,
    left: `${x}px`,
    transition: 'none',
  };

  rippleVisible.value = true;

  setTimeout(() => {
    rippleVisible.value = false;
  }, 600); 
};

const resetRipple = () => {
  rippleStyle.value = {};
};
</script>

<style scoped>
.custom-button {
  position: relative; 
}

.custom-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  opacity: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  transition: left .7s ease, box-shadow .4s ease-in-out;
}

.custom-button:hover::before {
  left: 120%;
}

.custom-button:hover {
  z-index: 10;
}

.custom-button:active {
  transform: scale(0.95);
}

.ripple {
  position: absolute; 
  transform: scale(0.1);
  border-radius: 20%;
  animation: ripple-animation 0.7s linear forwards; 
}

@keyframes ripple-animation {
   to {
     background: rgba(255, 255, 255, 0.589); 
     transform: scale(2);
     opacity: 0;
   }
}
</style>
