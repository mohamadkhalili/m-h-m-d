<template>
  <div v-tooltipl="{ location: location, text: text, enabled: enabled }" class="tooltip-element">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
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