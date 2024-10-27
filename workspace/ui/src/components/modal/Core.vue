<template>
    <div v-if="modelValue == true">
        <slot name="close"></slot>
    </div>
    <div v-if="modelValue == true">
        <slot name="default"></slot>
    </div>
</template>
<script setup lang="ts">
import { coreSlots } from './Slots';
import { coreProps } from './Props';
import { defineProps, defineSlots } from 'vue';
import { modalEmits } from "./Emits";
const emit = defineEmits(modalEmits);
const props = defineProps(coreProps);
const slots = defineSlots<coreSlots>();
</script>