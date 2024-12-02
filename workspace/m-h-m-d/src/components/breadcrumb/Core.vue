<template>
  <div class="inline-flex items-center space-x-2">
    <div
      v-for="(item, index) in items"
      :key="index"
      @click="setModelValue(item.title, item.disable)"
      class="cursor-pointer"
    >
      <slot
        name="item"
        :title="item.title"
        :disable="item.disable"
        :end="index == items.length - 1"
      ></slot>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { coreProps } from "./Props";
import { breadcrumbEmits } from "./Emits";

const props = defineProps(coreProps);
const emit = defineEmits(breadcrumbEmits);

const setModelValue = (title: string, disable: boolean) => {
  if (!disable) {
    emit("update:modelValue", title);
  }
};
</script>
  