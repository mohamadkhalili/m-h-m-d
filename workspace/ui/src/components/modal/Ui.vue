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
  background: rgba(0, 0, 0, 0.2); 
  backdrop-filter: blur(5px); 
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  height: 200px;
  color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.body {
  margin-top: 30px;
}
</style>