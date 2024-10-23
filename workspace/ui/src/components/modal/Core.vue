<template>
    <div>
        <slot name="close"></slot>
    </div>
    <div>
        <slot name="default"></slot>
    </div>
</template>
<script setup lang="ts">
import { coreSlots } from './Slots'
import { coreProps } from './Props';
import { DefineProps } from 'vue';
const props = defineProps(coreProps);
const slots = defineSlots<coreSlots>();
</script>