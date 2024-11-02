<template>
    <div class="button-container">
      <button
  :class="[
    buttonColor || VariantColor,
    { 'custom-button': true, 'disabled': propsData.isDisabled, 'NoCleaner':propsData.NoCleaner }
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
    NoCleaner: {
      type: Boolean,
      default: true,
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

.custom-button:not(.NoCleaner)::before {
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
  
  .bg-blue { background: linear-gradient(45deg, rgb(0, 110, 255) 0%, rgb(68, 0, 255) 100%); border: 2px solid rgba(148, 148, 148, 0.301); }
  .bg-purple { background: linear-gradient(45deg, rgb(199, 0, 139) 0%, rgb(156, 0, 187) 100%); border: 2px solid rgba(148, 148, 148, 0.596);}
  .bg-green { background: linear-gradient(45deg, rgb(38, 189, 0) 0%, rgb(76, 168, 0) 100%); border: 2px solid rgba(148, 148, 148, 0.466);}
  .bg-red { background: linear-gradient(45deg, rgb(255, 0, 98) 0%, rgb(255, 0, 0) 100%); border: 2px solid rgba(148, 148, 148, 0.76);}
  .bg-amber { background: linear-gradient(45deg, rgb(255, 166, 0) 0%, rgb(247, 201, 0) 100%);border: 2px solid rgba(148, 148, 148, 0.76); }
  .bg-gradient {  background: linear-gradient(80deg, rgb(26, 26, 26) 0%, rgb(67, 117, 255) 100%);border: 2px solid rgba(148, 148, 148, 0.76); }
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

    filter: brightness(1.2);
    box-shadow: 
      inset 0 0px 2px rgba(156, 156, 156, 0.178), 
      0 0 0 2px rgba(255, 255, 255, 0.39),
      0 0 0 4px rgba(141, 141, 141, 0.671), 
      0 0 0 6px rgba(255, 255, 255, 0.034);
  }


  .variant-link {
  background: rgba(255, 255, 255, 0.247);
  color: rgb(60, 83, 187);


}




  .variant-faded {
  border: rgba(126, 126, 126, 0.432) 2px solid;
  background: linear-gradient(120deg, rgba(224, 224, 224, 0.815) 0%, rgba(238, 238, 238, 0.836) 50%, rgba(223, 223, 223, 0.781) 100%);
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
  border: rgba(255, 255, 255, 0) 1px solid;
  background-color: rgb(22, 32, 121);
  color: rgb(255, 255, 255);
  box-shadow: 0 8px 10px 0px rgba(61, 70, 161, 0.664); 

  padding: 0.5rem 1.5rem;
}

.variant-shadow:hover {
  background-color: rgb(0, 12, 179);
  color: rgb(255, 255, 255);
  border: rgba(0, 3, 175, 0.979) 1px solid;
  box-shadow: 0 12px 25px 2px rgba(75, 99, 145, 0.5); 

}

  </style>
  