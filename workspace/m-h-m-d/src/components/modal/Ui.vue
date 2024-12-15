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
        <div :class="adapterClass(modalClasses.contentClass).value">
          <slot name="default"></slot>
          <p v-if="showDefault">This is the modal content</p>
        </div>
      </template>
    </Core>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from "vue";
import Core from "./Core.vue";
import { uiProps } from "./Props";
import { modalEmits } from "./Emits";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiClose } from "@mdi/js";
import { useAdapterClass } from "../../composables/UseClass";
const adapterClass = useAdapterClass();
import { modalClasses } from "../../styles/ModalClasses";

const props = defineProps(uiProps);
const emit = defineEmits(modalEmits);
const slots = useSlots();
const showClose = computed(() => !slots.close);
const showDefault = computed(() => !slots.default);

const handleModelValue = (newValue: boolean) => {
  emit("update:modelValue", newValue);
};

function handleClose() {
  const modalOverlay = document.querySelector(".modal-overlay");
  if (modalOverlay) {
    modalOverlay.classList.add("fadeOut"); 
    setTimeout(() => {
      emit("update:modelValue", false);
    }, 500); 
  }
}
</script>

<style>
.modal-overlay {
  animation: fadeIn 0.5s forwards; 
}

.modal-content {
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

@keyframes fadeOut {
  from {
    opacity: 1; 
  }
  to {
    opacity: 0; 
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0); 
    opacity: 1; 
  }
  to {
    transform: translateY(-20px); 
    opacity: 0; 
  }
}

.fadeOut {
  animation: fadeOut 0.5s forwards, slideOut 0.5s forwards; 
}
</style>
