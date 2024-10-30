<template>
  <div>
    <Core
      :modelValue="modelValue"
      @update:modelValue="handleModelValue"
      v-bind="$attrs"
    >
      <template #close>
        <slot name="close"></slot>
        <SvgIcon
          v-if="showClose"
          @click="handleClose"
          type="mdi"
          :path="mdiClose"
        ></SvgIcon>
      </template>
      <template #default>
        <div class="body">
          <slot name="default"></slot>
          <p v-if="showDefault">This is the modal content</p>
        </div>
      </template>
    </Core>
  </div>
</template>

<script setup lang="ts">
import { defineOptions, defineProps, useSlots, computed, defineSlots } from "vue";
import { modalSlots } from "./Slots";
import Core from "./Core.vue";
import { uiProps } from "./Props";
import { modalEmits } from "./Emits";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiClose } from "@mdi/js";
const props = defineProps(uiProps);
const emit = defineEmits(modalEmits);
const uiSlots = defineSlots<modalSlots>();
defineOptions({
  inheritAttrs: false,
});
const slots = useSlots();
const showClose = computed(() => !slots.close);
const showDefault = computed(() => !slots.default);
const handleModelValue = (newValue: boolean) => {
  console.log("Model value updated:", newValue);
  emit("update:modelValue", newValue);
};
function handleClose() {
  emit("update:modelValue", false);
}
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1); 
  backdrop-filter: blur(5px); 
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0; 
  animation: fadeIn 0.5s forwards; 
  transition: opacity 0.5s ease;
}

.modal-content {
  background-color: rgba(255, 255, 255, 0.9); 
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  height: 200px;
  color: black;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-20px); 
  animation: slideIn 0.5s forwards; 
}

@keyframes fadeIn {
  from {
    opacity: 0; 
  }
  to {
    opacity: 1; 
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0; 
  }
  to {
    transform: translateY(0); 
    opacity: 1; 
  }
}

.body {
  margin-top: 30px;
}
</style>
