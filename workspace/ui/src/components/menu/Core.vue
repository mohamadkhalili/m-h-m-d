<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
      @click="setModelValue(item)"
    >
      <slot
        name="item"
        :index="index"
        :isActive="item == modelValue"
        :item="item"
        :vertical="vertical"
        :tooltip="tooltip"
      ></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { coreProps } from "./Props";
import { menuEmits } from "./Emits";
import { coreSlots } from "./Slots";
const props = defineProps(coreProps);
const emit = defineEmits(menuEmits);
const slots = defineSlots<coreSlots>();

const setModelValue = (temp: String) => {
  emit("update:modelValue", temp);
};
</script>