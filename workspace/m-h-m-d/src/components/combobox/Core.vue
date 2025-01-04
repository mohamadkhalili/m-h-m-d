<template>
  <div>
    <slot name="input" ></slot>
  </div>
  <div v-for="(item, index) in items" :key="index" @click="handleClick(item)">
    <slot
      name="item"
      :isActive="multiple ? modelValue?.indexOf(item) != -1 : item == modelValue"
      :item="item"
    ></slot>
  </div>
</template>
<script setup lang="ts">
import { componentEmits } from "./Emits";
import { coreProps } from "./Props";
import { coreSlots } from "./Slots";
const props = defineProps(coreProps);
const emit = defineEmits(componentEmits);
const slots = defineSlots<coreSlots>();

const handleClick = (item: string) => {
  if (props.multiple) {
    const updatedValue = [...props.modelValue || []];
    const itemIndex = updatedValue.indexOf(item);

    if (itemIndex !== -1) {
      updatedValue.splice(itemIndex, 1);
    } else {
      updatedValue.push(item);
    }
    emit("update:modelValue", updatedValue);
  } else {
    emit("update:modelValue", item);
  }
};
</script>