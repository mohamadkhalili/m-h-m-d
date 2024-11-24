<template>
    <div class="list" :class="{ 'vertical-list': vertical }" @click="handleClick">
      <div v-for="(item, index) in items" :key="index">
        <slot
          name="item"
          :index="index"
          :isActive="item == modelValue"
          :item="item"
        ></slot>
        <br />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { coreProps } from "./Props";
  import { listEmits } from "./Emits";
  import { coreSlots } from "./Slots";
  const props = defineProps(coreProps);
  const emit = defineEmits(listEmits);
  const slots = defineSlots<coreSlots>();
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("list-item")) {
      const itemValue = target.textContent?.trim();
      emit("update:modelValue", itemValue);
    }
  };
  </script>