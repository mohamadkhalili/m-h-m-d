<template>
  <div>
    <Core
      :modelValue="modelValue"
      @update:modelValue="handleModelValue"
      v-bind="$attrs"
    >
      <template #close>
        <SvgIcon @click="handleClose" type="mdi" :path="mdiClose"></SvgIcon>
      </template>
      <template #default>
        <div class="body">
          <p>This is the modal content</p>
        </div>
      </template>
    </Core>
  </div>
</template>
  
<script setup lang="ts">
import { defineOptions, defineProps } from "vue";
import Core from "./Core.vue";
import { uiProps } from "./Props";
import { modalEmits } from "./Emits";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiClose } from "@mdi/js";
const props = defineProps(uiProps);
const emit = defineEmits(modalEmits);
defineOptions({
  inheritAttrs: false,
});
const handleModelValue = (newValue: boolean) => {
  console.log("Model value updated:", newValue);
  emit("update:modelValue", newValue);
};
function handleClose() {
  emit("update:modelValue", false);
};
</script>
<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  height: 200px;
  color: black;
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