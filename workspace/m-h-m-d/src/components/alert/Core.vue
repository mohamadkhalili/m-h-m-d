<template>
    <slot v-if="modelValue == true" name="alert"></slot>
</template>
<script setup lang="ts">
import { alertEmits } from './Emits';
import { alertProps } from './Props';
const props = defineProps(alertProps);
const emit = defineEmits(alertEmits);
</script>