<template>
  <div>
    <slot name="menu"></slot>
  </div>
</template>

<script setup lang="ts">
import { coreProps } from "./Props";
import { menuEmits } from "./Emits";
import { coreSlots } from "./Slots";
const props = defineProps(coreProps);
const emit = defineEmits(menuEmits);
const slots = defineSlots<coreSlots>();
</script>