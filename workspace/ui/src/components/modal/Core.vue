<template>
  <Teleport v-if="modelValue" :to="teleport">
    <div
      v-if="modelValue"
      class="modal-overlay"
      @click.self="handleOutsideClick"
    >
      <div
        class="modal-content"
        :class="[bgColorClass.active, textColorClass.active]"
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
import { defineProps, defineSlots, defineEmits, watchEffect } from "vue";
import { modalEmits } from "./Emits";
import {
  useBgColorClassName,
  useColorClassName,
} from "../../composables/ColorComposable";

const props = defineProps(coreProps);
const slots = defineSlots<modalSlots>();
const emit = defineEmits(modalEmits);
const textColorClass = useColorClassName(props);
const bgColorClass = useBgColorClassName(props);
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