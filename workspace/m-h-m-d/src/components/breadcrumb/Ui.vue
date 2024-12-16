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
            ? adapterClass(breadcrumbClasses.uiDisableClass + ' ' + disableClass).value
            : adapterClass(breadcrumbClasses.uiOnActiveClass + ' ' + onActiveClass).value,
          modelValue === title && !disable
            ? adapterClass(breadcrumbClasses.uiActiveClass + ' ' + activeClass).value
            : '',
        ]"
      >
        <div>
          {{ title }}
        </div>
        <slot v-if="!end" name="separator"></slot>
        <div v-if="!end && showSeparator" :class="adapterClass(breadcrumbClasses.separatorClass).value">/</div>
      </div>
    </template>
  </Core>
</template>
  
  <script setup lang="ts">
import Core from "./Core.vue";
import { uiProps } from "./Props";
import { breadcrumbEmits } from "./Emits";
import { uiSlots } from "./Slots";
import { breadcrumbClasses } from "../../styles/BreadcrumbClasses";
import { useAdapterClass } from "../../composables/UseClass";
const adapterClass = useAdapterClass();
import { computed, ref, useSlots } from "vue";
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
  