<template>
  <Teleport v-if="modelValue" :to="teleport">
    <div
      v-if="modelValue"
      class="modal-overlay"
      :class="adapterClass(mergeClasses(modalClasses.uiOutsideClass, outsideClass).value).value"
      @click.self="handleOutsideClick"
    >
      <div
        class="modal-content"
        :class="adapterClass(mergeClasses( modalClasses.uiModalClass, modalClass).value).value"
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
import { modalClasses } from "../../styles/ModalClasses";
import { useMergeClasses } from "../../composables/useMergeClasses";
const mergeClasses = useMergeClasses();
import { useAdapterClass } from "../../composables/UseClass";
const adapterClass = useAdapterClass();
import { ref } from "vue";
const props = defineProps(coreProps);
const slots = defineSlots<modalSlots>();
const emit = defineEmits(modalEmits);
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
</script>