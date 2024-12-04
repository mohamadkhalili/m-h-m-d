<!-- button-ui.vue -->
<template>
  <Core>
    <template #button>
      <button :class="[
        mergeClasses(uiButtonClass, buttonClass).value || VariantColor,
        { 'custom-button': true, 'disabled': disabled, 'CleanerEffect': propsData.CleanerEffect }
      ]" :disabled="disabled" @click="createRipple" :CleanerEffect="propsData.CleanerEffect">
        <slot></slot>
        <span class="ripple" v-if="rippleVisible" :style="rippleStyle" @transitionend="resetRipple"></span>
      </button>
    </template>
  </Core>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Core from './Core.vue'
import { buttonColors, props, VariantColor } from './props';
import { useMergeClasses } from "../../composables/useMergeClasses";
const mergeClasses = useMergeClasses();
const propsData = defineProps(props);

const rippleVisible = ref(false);
const rippleStyle = ref({});

const uiButtonClass = ref("bg-blue rounded-lg text-xs w-24 h-10 text-white relative transition-all duration-200 cursor-pointer z-10 overflow-hidden")
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

const buttonColor = computed(() => {
  if (propsData.variant) {
    return VariantColor[propsData.variant];
  }
  return buttonColors.default;
});




const resetRipple = () => {
  rippleStyle.value = {};
};
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 40%;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
}


.custom-button {
}

.custom-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  opacity: 0;
  height: 100%;
  background: rgb(255, 255, 255);
  backdrop-filter: blur(100px);
  transition: left 0.7s ease, box-shadow 0.4s ease-in-out;
  z-index: 1;
  box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.5);
}

.custom-button:hover::before {
  left: 120%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  width: 12px;
  opacity: 100;
}

.custom-button:not(.CleanerEffect)::before {
  display: none;
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
  animation: ripple-animation 1s linear forwards;
  background: rgba(255, 255, 255, 0.342);
  z-index: 0;
  border-radius: 20%;
  width: 20%;
}

@keyframes ripple-animation {
  to {
    background: #58585827;
    transform: scale(2);
    opacity: 0;
  }
}

.bg-blue {
  background: linear-gradient(45deg, rgb(0, 110, 255) 0%, rgb(68, 0, 255) 100%);
  border: 2px solid rgba(148, 148, 148, 0.301);
}

.bg-purple {
  background: linear-gradient(45deg, rgb(199, 0, 139) 0%, rgb(156, 0, 187) 100%);
  border: 2px solid rgba(148, 148, 148, 0.596);
}

.bg-green {
  background: linear-gradient(45deg, rgb(34, 177, 117) 0%, rgb(107, 238, 0) 100%);
  border: 2px solid rgba(148, 148, 148, 0.466);
}

.bg-red {
  background: linear-gradient(45deg, rgb(255, 0, 98) 0%, rgb(255, 0, 0) 100%);
  border: 2px solid rgba(148, 148, 148, 0.76);
}

.bg-amber {
  background: linear-gradient(45deg, rgb(255, 166, 0) 0%, rgb(247, 201, 0) 100%);
  border: 2px solid rgba(148, 148, 148, 0.76);
}

.bg-dark {
  background: linear-gradient(180deg, rgb(44, 44, 44) 0%, rgb(0, 0, 0) 100%);
  border: 2px solid rgba(148, 148, 148, 0.76);
}

.bg-link {

  color: rgb(45, 0, 209);
  border: 1px solid rgba(131, 131, 131, 0.644);

}



.bg-link:hover {

  border: 1px solid blue;

}

.bg-blue:hover,
.bg-purple:hover,
.bg-green:hover,
.bg-red:hover,
.bg-amber:hover,
.bg-link:hover,
.bg-gradient:hover {

  filter: brightness(1.2);
  box-shadow:
    inset 0 0px 2px rgba(156, 156, 156, 0.178),
    0 0 0 2px rgba(255, 255, 255, 0.39),
    0 0 0 4px rgba(141, 141, 141, 0.671),
    0 0 0 6px rgba(255, 255, 255, 0.034);
}

.variant-link {
  background: transparent;
  color: rgb(76, 94, 255);
  transition: 0.5s;
  box-shadow:
    inset 0 0px 2px rgba(235, 83, 255, 0),
    0 0 0 2px rgba(255, 255, 255, 0),
    0 0 0 4px rgba(0, 67, 212, 0),
    0 0 0 6px rgba(167, 255, 255, 0);
}

.variant-link:hover {
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.247),
    0 0 0 3px rgba(0, 67, 212, 0.39),
    0 0 0 5px rgba(167, 255, 255, 0.349);
  color: rgb(73, 73, 233);
}



.variant-faded {
  border: rgba(185, 185, 185, 0.432) 2px solid;
  background: linear-gradient(120deg, rgba(240, 240, 240, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(240, 240, 240, 0.9) 100%);
  color: rgba(0, 0, 0, 0.61);
  transition: all 0.5s;


}

.variant-faded:hover {
  border: rgba(240, 240, 240, 0.979) 2px solid;
  background: linear-gradient(120deg, rgba(228, 228, 228, 0.9) 0%, rgba(252, 252, 252, 0.9) 50%, rgba(224, 224, 224, 0.9) 100%);
  color: rgb(75, 75, 75);


}

.variant-light {
  background-color: rgba(138, 138, 138, 0.116);
  color: rgb(60, 60, 173);
  padding: 10px 15px;
  border: 1px solid transparent;

}

.variant-light:hover {
  color: rgb(29, 62, 124);
  background-color: rgba(0, 0, 0, 0.212);
  border: 1px solid rgb(29, 62, 124);
}

.variant-ghost {
  border: rgba(146, 146, 146, 0.541) 1px solid;

  color: rgb(48, 48, 160);

}

.variant-bordered {
  border: rgb(42, 90, 179) 2px solid;

  color: rgb(60, 60, 173);

}

.variant-bordered:hover {

  border: rgb(170, 204, 255) 2px solid;

}

.variant-ghost:hover {
  background-color: rgb(0, 14, 204);
  color: rgb(255, 255, 255);

  border: rgba(0, 3, 175, 0.979) 1px solid;

}

.variant-shadow {
  border: rgba(255, 255, 255, 0) 1px solid;
  background-color: rgb(53, 73, 255);
  color: rgb(255, 255, 255);
  box-shadow: 0 2px 5px 0px rgba(61, 70, 161, 0.664);

  padding: 0.5rem 1.5rem;
}

.variant-shadow:hover {
  background-color: rgb(0, 12, 179);
  color: rgb(255, 255, 255);
  border: rgba(0, 3, 175, 0.979) 1px solid;
  box-shadow: 0 px 5px 0px rgba(75, 99, 145, 0.5);
  overflow: hidden;

}

.sm-round {
  border-radius: 0.3rem;


}

.md-round {
  border-radius: 0.7rem;
  padding: 10px;

}

.lg-round {
  border-radius: 1.5rem;
  padding: 10px;
}

.full-round {
  border-radius: 2rem;
  padding: 10px;
}
</style>