<template>
 <Core
  v-if="isVisible"
  class="flex justify-center items-center"
  :class="[
    sizeClasses,
    variant === 'spinner' && props.color === 'default' ? 'border-r-blue-500' : '',
    variant === 'spinner' && props.color === 'error' ? 'border-r-red-500' : '',
    variant === 'spinner' && props.color === 'warning' ? 'border-r-yellow-500' : '',
    variant === 'spinner' && props.color === 'secondary' ? 'border-r-purple-600' : '',
    variant === 'spinner' && props.color === 'primary' ? 'border-r-green-500' : '',
    variant === 'spinner' && props.color === 'dark' ? 'border-r-gray-600' : '',
    variant === 'spinner' && props.color === 'light' ? 'border-r-gray-200' : '',

    variant === 'circle' && props.color === 'default' ? 'border-r-blue-500' : '',
    variant === 'circle' && props.color === 'error' ? 'border-r-red-500' : '',
    variant === 'circle' && props.color === 'warning' ? 'border-r-yellow-500' : '',
    variant === 'circle' && props.color === 'secondary' ? 'border-r-purple-600' : '',
    variant === 'circle' && props.color === 'primary' ? 'border-r-green-500' : '',
    variant === 'circle' && props.color === 'dark' ? 'border-r-gray-600' : '',
    variant === 'circle' && props.color === 'light' ? 'border-r-gray-200' : ''
  ]"
>

  <span v-if="variant === 'default'" :class="['loader',props.color]"></span>
    <span v-else-if="variant === 'spinner'" :class="['loader-spinner']"></span>
    <span v-else-if="variant === 'circle'" :class="['loader-circle']"></span>

</Core>

</template>

<script setup >
import { computed } from 'vue';
import { loaderProps } from './props';

const props = defineProps(loaderProps);

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-8 h-8 scale-[0.7]';
    case 'md':
      return 'w-8 h-8';
    case 'lg':
      return 'scale-125 w-8 h-8';
      case 'xl':
      return 'scale-150 w-8 h-8';
    default:
      return 'w-8 h-8';
  }
});

</script>

<style scoped>
.loader-spinner {
  width: 3rem;
aspect-ratio: 1;
scale: 1.4;
border-radius: 50%;
border: 4px solid #0000;
border-right-color: inherit;
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


.loader  {
width: 3rem;
scale: 1.3;
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
    border: 3px solid #1371ec;
    animation: prixClipFix 2s linear infinite ;
  }

  .secondary::before {

    border: 3px solid #af0baf;

  }

  .primary::before {

    border: 3px solid #47ce12;

  }


  .warning::before {

    border: 3px solid #e6b820;

  }

  .error::before {

    border: 3px solid #f81010;

  }
 
  .dark::before {
    border: 3px solid #2e2e2e;
  }

  .light::before {

    border: 3px solid #e4e4e4;

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
border: 5px solid rgba(65, 65, 65, 0.678); 
border-right-color: inherit;
animation: spin 1s linear infinite;
}

@keyframes spin {
to {
  transform: rotate(360deg);
}
}


</style>

