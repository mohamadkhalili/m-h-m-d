<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handleItemChange"
    v-bind="$attrs"
  >
    <template #item="{ title, disable, end }">
      <slot name="item" :title="title" :disable="disable" :end="end"></slot>
      <div
        v-if="showItem"
        :class="[
          disable
            ? mergeClasses(uiDisableClass, disableClass).value
            : mergeClasses(uiOnActiveClass, onActiveClass).value,
          modelValue === title && !disable
            ? mergeClasses(uiActiveClass, activeClass).value
            : '',
        ]"
        class="inline-flex items-center space-x-2"
      >
        <div :class="{ 'font-bold': modelValue === title && !disable }">
          {{ title }}
        </div>
        <slot v-if="!end" name="separator"></slot>
        <div v-if="!end && showSeparator" class="text-xs text-gray-300">/</div>
      </div>
    </template>
  </Core>
</template>
  
  <script setup lang="ts">
import Core from "./Core.vue";
import { uiProps } from "./Props";
import { breadcrumbEmits } from "./Emits";
import { uiSlots } from "./Slots";
import { useMergeClasses } from "../../composables/useMergeClasses";
const mergeClasses = useMergeClasses();
import { computed, ref, useSlots } from "vue";
const uiActiveClass = ref("text-blue-600");
const uiOnActiveClass = ref("cursor-pointer hover:text-blue-800");
const uiDisableClass = ref("text-gray-500 cursor-not-allowed");
const props = defineProps(uiProps);
const emit = defineEmits(breadcrumbEmits);
const uiSlots = defineSlots<uiSlots>();
const slots = useSlots();
const showItem = computed(() => !slots.item);
const showSeparator = computed(() => !slots.separator);
const handleItemChange = (newValue: string) => {
  emit("update:modelValue", newValue);
};

defineOptions({
  inheritAttrs: false,
});
</script>
  