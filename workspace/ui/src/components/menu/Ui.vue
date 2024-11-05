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
      <div class="menu-item" v-if="showItem">{{ item }}</div>
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

<style scoped>
.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.menu-item:hover {
  background-color: #333;
  transform: scale(1.05);
}

div {
  display: flex;
  gap: 10px; 
  flex-wrap: wrap; 
}

.menu-item-active {
  background-color: #4caf50; 
}
</style>