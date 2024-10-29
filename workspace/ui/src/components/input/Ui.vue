<template>
      <input
        id="MainInput"
        :class="[inputColor, colorClass, { 'custom-input': true, disabled: propsData.isDisabled, Readonly: propsData.Readonly }]"
        :placeholder="title"
        :disabled="propsData.isDisabled"
        :readonly="propsData.Readonly"
        placeholder=
      />
      <slot></slot>
   
  </template>
  
  <script setup>
  import { computed, defineProps } from 'vue';
  import { InputColor } from './props'; 
  
  const propsData = defineProps({
    color: {
      type: String,
      default: 'default', 
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    Readonly: {
      type: Boolean,
      default: false,
    },
  });

  const colorClass = computed(() => InputColor[propsData.color] || InputColor.default);
  </script>
  
  <style >
 
  #MainInput:hover,

  #MainInput:focus {
    box-shadow: 
      inset 0 0 2px rgba(156, 156, 156, 0.1),
      0 0 0 2px rgba(255, 255, 255, 0.39),
      0 0 0 3px rgba(158, 203, 255, 0.795),
      0 0 0 5px rgba(14, 155, 190, 0.034);
    border-color: rgba(161, 161, 161, 0.719);
  }
  .custom-input {
    padding: 8px;
    border-radius: 10px;
    transition: all 200ms;
    border: 1px solid gray;
  }
  .bg-default{
    background: rgb(255, 255, 255);
    border: 1px rgb(138, 138, 138) solid;
    color: rgb(48, 48, 48);
  }
  .bg-purple {
    background: rgb(254, 234, 255);

    border: 1px rgb(144, 45, 148) solid;
    color: rgb(114, 0, 95);

  }
  .bg-green {
    background: rgb(239, 255, 244);

    border: 1px rgb(0, 179, 104) solid;
    color: rgb(0, 116, 58);
  }

  .bg-red { 
    background: rgb(255, 226, 226);

border:1px rgba(211, 0, 0, 0.829) solid ;
color: rgb(204, 0, 0);
}

  .bg-amber {  
      background: rgb(255, 251, 228);


border:1px rgb(207, 207, 115) solid ;
color: rgb(85, 85, 0);
}

  .bg-gradient {
    background: linear-gradient(40deg, rgb(164, 200, 253) 0%, rgb(209, 255, 247) 100%);
    color: rgb(55, 41, 117);
    border: 1px rgb(69, 113, 131) solid;

  }
  </style>
  