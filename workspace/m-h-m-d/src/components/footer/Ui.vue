<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handleModelValueChange"
    v-bind="$attrs"
  >
    <template #footer>
      <slot name="footer"></slot>
      <div v-if="showFooter && modelValue" :class="adapterClass(footerClasses.generalClass + ' ' + footerClass)">

      </div>
    </template>
  </Core>
</template>
  
  <script setup lang="ts">
import Core from "./Core.vue";
import { componentEmits } from "./Emits";
import { uiProps } from "./Props";
import { footerClasses } from "../../styles/FooterClasses";
import { useAdapterClass } from "../../composables/UseClass";
import { uiSlots } from "./Slots";
import { computed, useSlots } from "vue";
const uislots = defineSlots<uiSlots>();
const adapterClass = useAdapterClass();
const props = defineProps(uiProps);
const emit = defineEmits(componentEmits);
const slots = useSlots();
const showFooter = computed(() => !slots.footer);
const handleModelValueChange = (newValue: boolean) => {
  emit("update:modelValue", newValue);
};
defineOptions({
  inheritAttrs: false,
});
</script>