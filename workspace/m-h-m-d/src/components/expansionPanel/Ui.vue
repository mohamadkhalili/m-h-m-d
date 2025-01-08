<template>
  <Core v-bind="$attrs">
    <template #title="{ isActive }">
      <slot name="title" :isActive="isActive"></slot>
      <div
        v-if="showTitle"
        :class="
          isActive
            ? adapterClass(expansionPanelClasses.activeTitle + ' ' + activeTitleClass).value
            : adapterClass(expansionPanelClasses.onActiveTitle + ' ' + onActiveTitleClass).value
        "
      >
        <div :class="adapterClass(expansionPanelClasses.titleClass).value">
          {{ title }}
        </div>

        <svg-icon
          :class="adapterClass(expansionPanelClasses.iconClass).value"
          type="mdi"
          :path="isActive ? mdiChevronDown : mdiChevronUp"
        >
        </svg-icon>
      </div>
    </template>
    <template #text="{ isActive }">
      <slot name="text" :isActive="isActive"></slot>
      <div
        v-if="showText"
        :class="
          isActive
            ? adapterClass(expansionPanelClasses.activeText + ' ' + activeTextClass).value
            : adapterClass(expansionPanelClasses.onActiveText + ' ' + onActiveTextClass).value
        "
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
import { expansionPanelClasses } from "../../styles/ExpansionPanelClasses";
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
