<template>
  <div class="modal">
    <modal>
      <template #close></template>
      <template #default>
        <p>this is modal</p>
      </template>
    </modal>
  </div>
</template>
  
<script setup lang="ts">
import modal from "./Core.vue";
import { uiProps } from "./Props";
import { modalEmits } from "./Emits";
const props = defineProps(uiProps);
const emit = defineEmits(modalEmits);
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