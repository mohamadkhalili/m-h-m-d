<template>
  <Teleport v-if="modelValue" :to="teleport">
    <div
      v-if="modelValue"
      class="modal-overlay"
      :class="mergeClasses(uiOutsideClass, outsideClass)"
      @click.self="handleOutsideClick"
    >
      <div
        class="modal-content"
        :class="mergeClasses(uiModalClass, modalClass)"
      >
        <slot name="close"></slot>
        <slot name="default"></slot>
      </div>
    </div>
  </Teleport>
</template>
    
<script setup lang="ts">
import { modalSlots } from "./Slots";
import { coreProps } from "./Props";
import { modalEmits } from "./Emits";
import { ref } from "vue";
const props = defineProps(coreProps);
const slots = defineSlots<modalSlots>();
const emit = defineEmits(modalEmits);
const uiModalClass = ref("bg-teal-900 text-white rounded-xl p-5 w-[400px] h-[200px] -translate-y-5 shadow-xl z-[1000]");
const uiOutsideClass = ref("bg-black bg-opacity-10 fixed inset-0 backdrop-blur-sm flex items-center justify-center opacity-0 z-[9999]");
function handleOutsideClick() {
  if (props.closeOnOutside) {
    const modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.classList.add("fadeOut");
      setTimeout(() => {
        emit("update:modelValue", false);
      }, 500);
    }
  }
}
const mergeClasses = (uiClassInput: string, customClassInput: string) => {
  if (!customClassInput || customClassInput.trim() === '') return uiClassInput;

  const uiClassArray = uiClassInput.split(' ').filter(Boolean); 
  const customClassArray = customClassInput.split(' ').filter(Boolean);

  const resultClassArray = [];

  // Create a map for `uiClass` to handle replacement efficiently
  const uiClassMap = new Map(
    uiClassArray.map(uiClass => [uiClass.split('-')[0], uiClass]) // Key: base name, Value: full class
  );

  // Loop through `customClass` to replace or add
  customClassArray.forEach(customClass => {
    const baseName = customClass.split('-')[0];

    // Replace in `uiClass` if it exists
    if (uiClassMap.has(baseName)) {
      uiClassMap.set(baseName, customClass); // Replace existing class with `customClass`
    } else {
      // Otherwise, append `customClass`
      resultClassArray.push(customClass);
    }
  });

  // Add all remaining `uiClass` items after applying replacements
  resultClassArray.push(...uiClassMap.values());

  // Return the merged classes as a string
  console.log(resultClassArray.join(' '))
  return resultClassArray.join(' ');
};




</script>