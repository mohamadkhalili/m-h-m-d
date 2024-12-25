<template>
    <slot v-if="modelValue == true" name="alert"></slot>
</template>
<script setup lang="ts">
import { alertEmits } from './Emits';
import { alertProps } from './Props';
import { coreSlots } from './Slots';
const props = defineProps(alertProps);
const emit = defineEmits(alertEmits);
const slots = defineSlots<coreSlots>();
</script>