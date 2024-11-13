<template>
  <div class="menu" :class="{ 'vertical-menu': vertical }" @click="handleClick">
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
import { defineProps } from "vue";
import { coreProps } from "./Props";
import { menuEmits } from "./Emits";
import { coreSlots } from "./Slots";
import { useBgColorClassName } from "../../composables/ColorComposable";
const props = defineProps(coreProps);
const emit = defineEmits(menuEmits);
const slots = defineSlots<coreSlots>();
const handleClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("menu-item")) {
    const itemValue = target.textContent?.trim();
    emit("update:modelValue", itemValue);
  }
};
</script>