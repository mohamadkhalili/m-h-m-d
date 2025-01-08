<template>
  <Core v-bind="$attrs">
    <template #title="{ isActive }">
      <slot name="title" :isActive="isActive"></slot>
      <div
        v-if="showTitle"
        :class="{
          'flex justify-between items-center cursor-pointer px-4 bg-gray-100 hover:bg-gray-200 select-none transition-all duration-200 ease-in-out h-14':
            !isActive, // Default height when inactive
          'flex justify-between items-center cursor-pointer px-4 bg-gray-100 hover:bg-gray-200 select-none transition-all duration-200 ease-in-out h-20':
            isActive, // Slightly taller when active
        }"
      >
        <div class="text-left">
          {{ title }}
        </div>

        <svg-icon
          class="text-right"
          type="mdi"
          :path="isActive ? mdiChevronUp : mdiChevronDown"
        >
        </svg-icon>
      </div>
    </template>
    <template #text="{ isActive }">
      <slot name="text" :isActive="isActive"></slot>
      <div
        v-if="showText"
        :class="{
          'px-6 py-4 bg-gray-100 overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0':
            !isActive,
          'px-6 py-4 bg-gray-100 overflow-hidden transition-all duration-300 ease-in-out max-h-[1000px] opacity-100':
            isActive,
        }"
      >
        {{ text }}
      </div>
    </template>
  </Core>
</template>

<script setup lang="ts">
import Core from "./Core.vue";
import { componentEmits } from "./Emits";
import { uiProps } from "./Props";
import { alertClasses } from "../../styles/AlertClasses";
import { useAdapterClass } from "../../composables/UseClass";
import { uiSlots } from "./Slots";
import { computed, useSlots } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronUp, mdiChevronDown } from "@mdi/js";
const uislots = defineSlots<uiSlots>();
const adapterClass = useAdapterClass();
const props = defineProps(uiProps);
const emit = defineEmits(componentEmits);
const slots = useSlots();
const showTitle = computed(() => !slots.title);
const showText = computed(() => !slots.title);
const handleModelValueChange = (newValue: boolean) => {
  emit("update:modelValue", newValue);
};
defineOptions({
  inheritAttrs: false,
});
</script>
