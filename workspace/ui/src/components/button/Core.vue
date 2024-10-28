<template>
  <div class="button-container">
    <button
      :class="[
        buttonColor,
        'custom-button'
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';
import { buttonColors, props } from './props';

const propsData = defineProps(props);

const rippleVisible = ref(false);
const rippleStyle = ref({});

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
  }, 200);
};

const buttonColor = computed(() => {
  return buttonColors[propsData.color] || buttonColors.default;
});

const resetRipple = () => {
  rippleStyle.value = {};
};
</script>

<style>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
}

.custom-button {
  padding: 0.5rem 2rem; /* معادل py-2 و px-8 */
  margin: 2rem; /* معادل m-8 */
  border-radius: 0.5rem; /* معادل rounded-lg */
  color: white; /* متن دکمه */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* سایه */
  position: relative; /* برای تنظیم موقعیت ریپل */
  transition: all 0.2s; /* انیمیشن */
  cursor: pointer; /* نشانگر ماوس */
  z-index: 10;
  overflow: hidden; /* جلوگیری از خروج ریپل از کادر دکمه */
}



.custom-button:active {
  transform: scale(0.95); 
}

.ripple {
  position: absolute;
  transform: scale(2);
  animation: ripple-animation 0.2s linear forwards;
  background: rgba(255, 255, 255, 0.6); 
  z-index: 0;
}

@keyframes ripple-animation {
  to {
    background: #ffffff80;
    opacity: 0; 
  }
}

.bg-blue {
  background-color: #1d4ed8;
}

.bg-blue:hover {
  box-shadow: 
    inset 0 0px 2px rgba(255, 255, 255, 0.1), 
    0 0 0 2px rgba(255, 255, 255, 0.6),
    0 0 0 4px rgba(0, 174, 255, 0.5), 
    0 0 0 6px rgba(255, 255, 255, 0.034);

}

.bg-purple {
  background-color: #6a1fb1;
}

.bg-purple:hover {
  box-shadow: 
    inset 0 0px 2px rgba(255, 255, 255, 0.1), 
    0 0 0 2px rgba(255, 255, 255, 0.6),
    0 0 0 4px rgba(178, 0, 248, 0.5), 
    0 0 0 6px rgba(255, 255, 255, 0.034);

}

.bg-green {
  background-color: #16a34a; 
}

.bg-green:hover {
  box-shadow: 
    inset 0 0px 2px rgba(255, 255, 255, 0.1), 
    0 0 0 2px rgba(255, 255, 255, 0.6),
    0 0 0 4px rgba(80, 156, 96, 0.5), 
    0 0 0 6px rgba(255, 255, 255, 0.034);

}

.bg-red {
  background-color: #dc2626; 
}

.bg-red:hover {
  box-shadow: 
    inset 0 0px 2px rgba(255, 255, 255, 0.1), 
    0 0 0 2px rgba(255, 255, 255, 0.6),
    0 0 0 4px rgba(255, 0, 0, 0.5), 
    0 0 0 6px rgba(255, 255, 255, 0.034);
}

.bg-amber {
  background-color: #fbbf24; 
}
.bg-amber:hover{
  box-shadow: 
    inset 0 0px 2px rgba(255, 255, 255, 0.1), 
    0 0 0 2px rgba(255, 255, 255, 0.6),
    0 0 0 4px rgba(255, 230, 0, 0.5), 
    0 0 0 6px rgba(255, 255, 255, 0.034);
}

.bg-random {
  background: rgb(4,193,154);
  background: linear-gradient(90deg, rgba(4,193,154,1) 0%, rgb(2, 126, 151) 100%); 
}
</style>
