<template>
    <div class="button-container">
      <button
        :class="[
          buttonColor || VariantColor ,
          { 'custom-button': true, 'disabled': propsData.isDisabled }
        ]"
        :disabled="propsData.isDisabled"
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
  import { buttonColors, props,VariantColor } from './props';
  
  const propsData = defineProps({
    ...props,
    isDisabled: {
      type: Boolean,
      default: false,
    },
  });
  
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
    }, 600); // Adjust timeout to match the animation duration
  };
  const buttonColor = computed(() => {
  
  if (propsData.variant) {
    return VariantColor[propsData.variant] || buttonColors[propsData.color] ; 
  }
  return  buttonColors.default; 
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
    padding: 0.5rem 2rem; 
    margin: 2rem; 
    border-radius: 0.5rem; 
    color: white; 
    position: relative; 
    transition: all 0.2s; 
    cursor: pointer; 
    z-index: 10;
    overflow: hidden; 
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
  
  .bg-blue { background: linear-gradient(45deg, rgb(0, 174, 255) 0%, rgb(0, 81, 255) 100%); }
  .bg-purple { background: linear-gradient(45deg, rgb(199, 0, 139) 0%, rgb(156, 0, 187) 100%); }
  .bg-green { background: linear-gradient(45deg, rgb(0, 207, 62) 0%, rgb(60, 190, 0) 100%); }
  .bg-red { background: linear-gradient(45deg, rgb(255, 0, 98) 0%, rgb(255, 0, 0) 100%); }
  .bg-amber { background: linear-gradient(45deg, rgb(255, 187, 0) 0%, rgb(255, 174, 0) 100%); }
  .bg-gradient {  background: linear-gradient(80deg, rgb(26, 26, 26) 0%, rgb(67, 117, 255) 100%); }
  .bg-link{

color: rgb(45, 0, 209);
border: 1px solid rgba(131, 131, 131, 0.644);

  }



  .bg-link:hover{

border: 1px solid blue;

  }
  .bg-blue:hover,
  .bg-purple:hover,
  .bg-green:hover,
  .bg-red:hover,
  .bg-amber:hover,
  .bg-link:hover,

  .bg-gradient:hover {
    box-shadow: 
      inset 0 0px 2px rgba(156, 156, 156, 0.1), 
      0 0 0 2px rgba(255, 255, 255, 0.39),
      0 0 0 4px rgba(201, 200, 200, 0.795), 
      0 0 0 6px rgba(255, 255, 255, 0.034);
  }


  .variant-link {
  background: rgb(255, 255, 255);
  color: rgb(0, 42, 231);

  position: relative; /* برای موقعیت‌یابی حاشیه */
  overflow: hidden; /* جلوگیری از بیرون زدن حاشیه */
}


.variant-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: rgb(170, 204, 255) 2px solid; 
  transform: scale(0);
  transition: transform 0.5s ease; 
  z-index: -1; 
  border-radius: 1px;
}

.variant-link:hover::before {
  transform: scale(1); 
}

  .variant-faded {
  border: rgba(126, 126, 126, 0.432) 2px solid;
  background: linear-gradient(120deg, rgb(224, 224, 224) 0%, rgb(255, 255, 255) 50%, rgb(223, 223, 223) 100%);
  color: rgb(48, 48, 160);

}

.variant-faded:hover {

  border: rgba(240, 240, 240, 0.979) 2px solid;

}


.variant-bordered{
  border: rgb(0, 73, 209) 2px solid;
  background:white;
  color: rgb(0, 42, 231);
}
.variant-bordered:hover {

border: rgb(170, 204, 255) 2px solid;



}
.variant-light{
 
background: white;
  color: rgb(1, 1, 184);
 
  

}
.variant-light:hover{
background-color: rgb(220, 228, 255);


}
  .variant-ghost {
  border: rgba(255, 255, 255, 0.432) 1px solid;
 background-color: white;
  color: rgb(48, 48, 160);

}

.variant-ghost:hover {
  background-color: rgb(0, 14, 204);
  color: rgb(255, 255, 255);

  border: rgba(0, 3, 175, 0.979) 1px solid;

}
.variant-shadow {
  border: rgba(255, 255, 255, 0.432) 1px solid;
  background-color: rgb(2, 12, 109);
  color: rgb(255, 255, 255);
  box-shadow: 0 9px 20px 1px rgba(24, 32, 143, 0.664); 

  padding: 0.5rem 1.5rem;
}

.variant-shadow:hover {
  background-color: rgb(0, 12, 179);
  color: rgb(255, 255, 255);
  border: rgba(0, 3, 175, 0.979) 1px solid;
  box-shadow: 0 12px 25px 2px rgba(62, 79, 110, 0.5); 

}

  </style>
  