<template>
  <div>
    <div v-for="(item, index) in items" :key="index" @click="setModelValue(item.title)">
      <slot
        name="item"
        :title="item.title"
        :disable="item.disable"
      ></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { coreProps } from "./Props";
import { breadcrumbEmits } from "./Emits";
const props = defineProps(coreProps);
const emit = defineEmits(breadcrumbEmits);
const setModelValue = (title : string) => {
  emit("update:modelValue", title);
}
</script>