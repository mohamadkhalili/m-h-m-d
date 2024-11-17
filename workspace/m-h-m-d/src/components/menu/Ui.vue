<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handleModelValue"
    v-bind="$attrs"
    class="relative"
  >
    <template #menu>
      <div
        v-if="modelValue"
        :class="[
          modelValue
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-95 opacity-0 -translate-y-2 pointer-events-none',
          bgColorClass.onActive,
          sizeClass, // Ensure sizeClass is applied here
        ]"
        class="absolute left-0 top-full -mt-4 bg-black text-white rounded-lg shadow-lg z-50 transition-transform transition-opacity duration-300 ease-in-out transform"
      >
        <slot name="menu"></slot>
      </div>
    </template>
  </Core>
</template>

<script setup lang="ts">
import Core from "./Core.vue";
import { useSlots, computed } from "vue";
import { uiProps } from "./Props";
import { menuEmits } from "./Emits";
import { menuSlots } from "./Slots";
import {
  useColorClassName,
  useBgColorClassName,
} from "../../composables/ColorComposable";
import { useSize } from "../../composables/UseSizeProps";

const props = defineProps(uiProps);
const emit = defineEmits(menuEmits);
const uiSlots = defineSlots<menuSlots>();
const handleModelValue = (newValue: boolean) => {
  emit("update:modelValue", newValue);
};
const slots = useSlots();
const showMenu = computed(() => !slots.menu);
const bgColorClass = useBgColorClassName(props);
const sizeClass = useSize(props);
</script>

<style scoped>
</style>
