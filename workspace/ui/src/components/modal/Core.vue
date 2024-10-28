<template>
  <Teleport v-if="modelValue" :to="teleport">
    <transition name="fade">
      <div v-if="modelValue" class="modal-overlay" @click.self="handleOutsideClick">
        <div class="modal-content">
          <slot name="close"></slot>
          <slot name="default"></slot>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
    
<script setup lang="ts">
import { modalSlots } from "./Slots";
import { coreProps } from "./Props";
import { defineProps, defineSlots, defineEmits } from "vue";
import { modalEmits } from "./Emits";

const props = defineProps(coreProps);
const slots = defineSlots<modalSlots>();
const emit = defineEmits(modalEmits);

function handleOutsideClick() {
  if (props.closeOnOutside) {
    emit("update:modelValue", false);
  }
}
</script>