<template>
    <div
      v-if="isVisible"
      class="flex justify-center items-center"
      :class="[sizeClasses, colorClasses]"
    >
    <span v-if="variant === 'default'" class="loader"></span>
      <span v-else-if="variant === 'spinner'" class="loader-spinner"></span>
      <span v-else-if="variant === 'circle'" class="loader-circle"></span>

      <div v-else-if="variant === 'dots'" class="loader-dots"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>


</div>

  </template>
  
  <script setup >
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
  
  const colorClasses = computed(() => {
    return props.color ? `text-${props.color}` : 'text-gray-500';
  });
  </script>
  
  <style scoped>
  .loader-spinner {
    width: 3rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 5px solid #0000;
  border-right-color: #f3c443;
  position: relative;
  animation: l24 1s infinite linear;
  }
  
  .loader-spinner:before,
  .loader-spinner:after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: inherit;
    animation: inherit;
    animation-duration: 2s;
  }
  .loader-spinner:after {
    animation-duration: 4s;
  }
  @keyframes l24 {
    100% {transform: rotate(1turn)}
  }




  

  .loader-dots {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
  row-gap: 0px;
  scale: 0.8;
  width: 72px;
  height: 72px;
  justify-content: center;
  align-items: center;
}

.loader-dots div {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: currentColor;
  animation: loader-dots 1.2s linear infinite;
}

.loader-dots div:nth-child(1) {
  animation-delay: 0s;
}
.loader-dots div:nth-child(2) {
  animation-delay: -0.4s;
}
.loader-dots div:nth-child(3) {
  animation-delay: -0.8s;
}
.loader-dots div:nth-child(4) {
  animation-delay: -0.4s;
}
.loader-dots div:nth-child(5) {
  animation-delay: -0.8s;
}
.loader-dots div:nth-child(6) {
  animation-delay: -1.2s;
}
.loader-dots div:nth-child(7) {
  animation-delay: -0.8s;
}
.loader-dots div:nth-child(8) {
  animation-delay: -1.2s;
}
.loader-dots div:nth-child(9) {
  animation-delay: -1.6s;
}

@keyframes loader-dots {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}




.loader {
  width: 3rem;
  scale: 1.5;
  height: 32px;
  
      position: relative;
      animation: rotate 1s linear infinite
    }
    .loader::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset:0px;
      border-radius: 50%;
      border: 3px solid #bb0606;
      animation: prixClipFix 2s linear infinite ;
    }

    @keyframes rotate {
      100%   {transform: rotate(360deg)}
    }

    @keyframes prixClipFix {
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        99% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
        100%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}

    }


    .loader-circle {
  width: 3rem;
  position: absolute;
  height: 3rem;

  border-radius: 50%;
  border: 5px solid rgb(136, 135, 135); /* Base color */
  border-top-color: rgb(52, 111, 201); /* Highlighted side */
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


  </style>

