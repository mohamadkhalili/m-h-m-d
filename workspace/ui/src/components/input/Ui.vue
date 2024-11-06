<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handleModelValue"
    v-bind="$attrs"
  >
    <template #input>
      <slot name="input"></slot>
      <div v-if="showInput" class="input-container">
        <label
          :class="{ 
            active: isFocused || modelValue,
            'underline-label': props.variant === 'underline',
            'search-label': props.variant === 'search',
          }" 
          @click="focusInput"
        >
          {{ title }}
        </label>

        <div :class="{
          'search-wrapper': props.variant === 'search',
        }">
          <input
            ref="inputRef"
            v-model="modelValue"
            :disabled="isDisabled"
            :readonly="readonly"
            required
            :class="[
              themeClass,
              props.variant === 'search' ? 'search-input' : '',
              {
                disabled: isDisabled,
                readonly: readonly,
                rtl: rtl,
              },
            ]"
            @focus="isFocused = true"
            @blur="handleBlur"

          />
          <div v-if="props.variant === 'search'">
           
            <span class="subscribe-btn">{{ submit }}</span>
          </div>
        </div>
      </div>
    </template>
  </Core>
</template>


<script setup lang="ts">
import { computed, defineProps, ref, defineOptions, useSlots } from "vue";
import { inputProps, InputVariant ,InputColor} from "./props"; 
import { inputEmits } from "./Emits";
import { InputSlots } from "../input/Slots";
import Core from "./Core.vue";

const uiSlots = defineSlots<InputSlots>();
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);

defineOptions({
  inheritAttrs: false,
});

const slots = useSlots();
const showInput = computed(() => !slots.input);
const inputRef = ref<HTMLInputElement | null>(null);
const isFocused = ref(false);

const handleModelValue = (newValue: String) => {
  emit("update:modelValue", newValue);
};



const themeClass = computed(() => {

  if (props.variant) {
    return InputVariant[props.variant];
  }
  return InputColor[props.color];
});



const handleBlur = () => {
  isFocused.value = !!props.modelValue;
};




const focusInput = () => {
  inputRef.value?.focus();
  isFocused.value = true; 
};

</script>


<style scoped>
.search-wrapper {
  display: flex;
  align-items: center;
  background-color: #292524;
  border-radius: 20px;
  padding: 5px;
  width: fit-content;
  height: 45px;
  box-sizing: content-box;
  position: relative;
}

.search-input {
  max-width: 170px;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 15px;
  background-color: #2925244f;
  color: white;
  font-size: 1em;
  margin-right: 10px; 
  border: 1px solid gray;
  border-radius: 15px;

}

.search-input:focus {
  border: 2px solid #4376c2;
}
.subscribe-btn {
  height: 100%;
  border: none;
  border-radius: 15px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  background-color: #ffffff;
  font-weight: 500;
  margin: 8px;
  padding: 12px;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s;
}
.subscribe-btn:hover {

  background-color: #002fff;
  color: white;
}

.subscribe-btn:active {
background: #001b94;

}

.search-label {
  color: gray;
  position: absolute;
  top: 12px;
  left: 4%;
  transition: 0.2s ease all;
}

.search-label.active {
  font-size: 12px;
  top: -3px;
  left: 8px;
  color: #8b8b8b;
  background: transparent;
}


#MainInput:hover,
#MainInput:focus {
  box-shadow: inset 0 0 2px rgba(156, 156, 156, 0.1),
    0 0 0 2px rgba(255, 255, 255, 0.39), 0 0 0 3px rgba(158, 203, 255, 0.795),
    0 0 0 5px rgba(14, 155, 190, 0.034);
  border-color: rgba(161, 161, 161, 0.719);
}

.custom-input {

  border-radius: 10px;
  transition: all 200ms;
  border: 1px solid gray;
}

.rtl {
  text-align: right;
  direction: rtl;
}
.bg-default {
  border: 2px rgb(93, 101, 107) solid;
  color: rgb(48, 48, 48);
}

.bg-purple {
  border: 2px rgb(191, 58, 196) solid;
  color: rgb(114, 0, 95);
}

.bg-green {
  border: 2px rgb(0, 207, 145) solid;
  color: rgb(0, 116, 58);
}

.bg-red {
  border: 2px rgba(228, 46, 0, 0.829) solid;
  color: rgb(204, 0, 0);
}

.bg-amber {
  border: 2px rgb(221, 221, 26) solid;
  color: rgb(85, 85, 0);
}

.bg-transparent {
  border: 2px solid rgb(62, 62, 253);
  transition: 0.2s all ease-in-out;
}

.bg-transparent:focus {
  border: 2px solid transparent;
  border: 2px solid rgb(255, 213, 73);

}

.v-flat {
  background: rgba(124, 124, 124, 0.315);
  border: none;
  color: rgba(0, 0, 0, 0.87);
  transition: 0.2s all;
}
.v-flat:hover{
  background: #cececea4;
}

.v-bordered {
  border-bottom: 2px solid #9f7aea;
  background-color: transparent;
}





.v-underline {
  position: relative;
  background-color: transparent;
  padding: 10px;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid #000;  
  transition: border-color 0.3s ease; 
}

.v-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: transparent; 
  transition: all 0.4s ease;  
}

.v-underline:hover::after {
  background-color: #0056d8; 
  width: 100%;  
}

.v-underline:focus {
  border-bottom: 2px solid #00bb92;  

}

.v-underline:hover {
  border-bottom: 2px solid #0056d8; 


  cursor: text; 
}

.v-faded {
  border: none;
 
  color: #000000;
  box-shadow: inset 0px 0px 50px 0px rgba(0, 0, 0, 0.233);
  transition: all 0.4s ease;  

}
.v-faded:hover {

  box-shadow: inset 0px 0px 50px 0px rgba(107, 73, 73, 0.233);
}

.disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 40%;
}

.Readonly {
  border: 10px black solid;
}

.input-container {
  position: relative;
  margin: 20px 0;
}

label {
  position: absolute;
  left: 4%;
  top: 12px;
  transition: 0.2s ease all;
  color: gray;
  padding: 2px;
}

label.active {
  left: 8;

  background: #ffffff00;
top: -3px;
  font-size: 12px;
  color: #8b8b8b;
}

input {
  padding: 12px 10px;
  border-radius: 10px;
  border: 1px solid gray;
  width: 100%;
  text-align: left;
}

input.rtl {
  text-align: right;
  direction: rtl;
}


.underline-label {
  position: absolute;
  top: 5px; 
  left: 0;
  font-size: 18px;
  color: #8b8b8b;
  transition: all 0.2s ease-in-out;
}

.underline-label.active {
  top: 45px;

  font-size: 16px;
  color: #818181;


 
 
}
</style>
