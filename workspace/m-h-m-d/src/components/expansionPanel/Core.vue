<template>
  <div @click="active = !active">
    <slot name="title" :isActive="active"></slot>
  </div>
  <slot name="text" :isActive="active"></slot>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { componentEmits } from "./Emits";
import { coreProps } from "./Props";
import { coreSlots } from "./Slots";
const props = defineProps(coreProps);
const emit = defineEmits(componentEmits);
const slots = defineSlots<coreSlots>();
const active = ref(false);
</script>