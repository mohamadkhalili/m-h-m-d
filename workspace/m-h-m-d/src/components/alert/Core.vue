<template>
    <slot v-if="modelValue == true" name="alert"></slot>
</template>
<script setup lang="ts">
import { coreProps } from './Props';
const props = defineProps(coreProps);
</script>