<template>
    <slot name="progress"></slot>
</template>
<script setup lang="ts">
import { coreProps } from './Props';
const props = defineProps(coreProps);
</script>