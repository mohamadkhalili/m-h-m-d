<template>
  <div>
    <slot name="menu"></slot>
  </div>
</template>

<script setup lang="ts">
import { coreProps } from "./Props";
import { menuEmits } from "./Emits";
import { menuSlots } from "./Slots";
const props = defineProps(coreProps);
const emit = defineEmits(menuEmits);
const slots = defineSlots<menuSlots>();
</script>