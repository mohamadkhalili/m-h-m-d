<template>
    <div class="input-container">
      <label 
        :class="{ 'active': isFocused || inputValue }" 
        @click="focusInput"
      >{{ title }}</label>
      
      <input
        id="MainInput"
        v-model="inputValue"
        :class="[colorClass, { disabled: propsData.isDisabled, readonly: propsData.readonly }]"
        :disabled="propsData.isDisabled"
        :readonly="propsData.readonly"
        
        @blur="handleBlur"
      />
      
      <slot></slot>
    </div>
  </template>
  
  <script setup>
import { computed, defineProps, ref } from 'vue';
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
  readonly: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '', 
  },
});

const inputValue = ref('');

const colorClass = computed(() => InputColor[propsData.color] || InputColor.default);



</script>
<style>
 
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
    background: rgb(255, 246, 246);

border:1px rgba(211, 0, 0, 0.829) solid ;
color: rgb(204, 0, 0);
}

  .bg-amber {  
      background: rgb(255, 252, 237);


border:1px rgb(207, 207, 115) solid ;
color: rgb(85, 85, 0);
}

.bg-gradient {
  background: linear-gradient(100deg, 
    rgb(209, 255, 249) 0%, 
    rgb(255, 194, 194) 20%, 
    rgb(231, 255, 211) 40%, 
    rgb(207, 208, 255) 60%, 
    rgb(207, 255, 235) 80%, 
    rgb(255, 199, 222) 100%
  );
  color: rgb(55, 41, 117);
  border: 1px rgb(69, 113, 131) solid;
}

  .disabled {
    pointer-events: none; 
    opacity: 60%;
    border: none;

  }

  .Readonly{
    border: 10px black solid;
  }
  .input-container {
  position: relative;
  margin: 20px 0;  
}

label {
  position: absolute;
  left: 10px;
  top: 12px;
  transition: 0.2s ease all;
  color: gray; 
}

label.active {
  top: -2%;
  font-size: 11px;  
  color: #8b8b8b;  
}

input {
  padding: 12px 10px;  
  border-radius: 10px;
  border: 1px solid gray;  
  width: 100%;  
}

input:focus {
  outline: none;
  border-color: blue;  
}
</style>