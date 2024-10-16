<template>
  <div v-tooltipl="{ location: location, text: text }" class="tooltip-element">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineSlots } from "vue";
import { coreTooltipProps } from "./Props";
import { tooltipSlots } from "./Slots";
const props = defineProps(coreTooltipProps);
const slots = defineSlots<tooltipSlots>();
</script>
<style scoped>
.tooltip-element {
  display: inline-block;
  position: relative;
}
</style>