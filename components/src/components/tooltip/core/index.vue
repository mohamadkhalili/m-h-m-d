<template>
    <div v-tooltipl="{location: location, text: text}" class="tooltip-element">
        <slot ></slot>
    </div>
</template>

<script setup lang="ts">

import { defineProps, } from 'vue';
import { coreTooltipProps } from '../Props'
const props = defineProps(coreTooltipProps);
</script>
<style scoped>
.tooltip-element {
  display: inline-block;
  position: relative;
}
</style>