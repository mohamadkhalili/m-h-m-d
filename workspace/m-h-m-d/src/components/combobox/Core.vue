<template>
  <div>
    <slot name="input"></slot>
  </div>
  <slot name="item"></slot>
</template>
<script setup lang="ts">
import { componentEmits } from "./Emits";
import { coreProps } from "./Props";
import { coreSlots } from "./Slots";
const props = defineProps(coreProps);
const emit = defineEmits(componentEmits);
const slots = defineSlots<coreSlots>();


</script>