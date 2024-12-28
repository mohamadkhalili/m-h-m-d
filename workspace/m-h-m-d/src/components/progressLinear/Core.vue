<template>
    <slot name="progress"></slot>
</template>
<script setup lang="ts">
import { coreProps } from './Props';
import { progressEmits } from './Emits';
import { coreSlots } from './Slots';
import { onMounted, onUnmounted } from 'vue';
const slots = defineSlots<coreSlots>();
const emit = defineEmits(progressEmits);
const props = defineProps(coreProps);
</script>