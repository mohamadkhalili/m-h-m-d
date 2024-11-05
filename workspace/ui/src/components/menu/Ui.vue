<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handlePageChange"
    v-bind="$attrs"
  >
    <slot name="menu"></slot>
    <template v-if="showMenu" #item="{ index, isActive, item }">
      <slot
        name="item"
        :index="index"
        :isActive="item == modelValue"
        :item="item"
        :vertical="vertical"
        :tooltip="tooltip"
      ></slot>
      <div v-if="showItem">{{ item }}</div>
    </template>
  </Core>
</template>
<script setup lang="ts">
import Core from "./Core.vue";
import { defineProps, useSlots, computed } from "vue";
import { uiProps } from "./Props";
import { menuEmits } from "./Emits";
import { uiSlots } from "./Slots";
const props = defineProps(uiProps);
const emit = defineEmits(menuEmits);
const uiSlots = defineSlots<uiSlots>();
defineOptions({
  inheritAttrs: false,
});
const slots = useSlots();
const showMenu = computed(() => !slots.menu);
const showItem = computed(() => !slots.item);
const handlePageChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};
</script>