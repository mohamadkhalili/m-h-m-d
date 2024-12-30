<script setup>
import { defineProps, defineEmits } from 'vue';
import { skeletonClasses } from '../../styles/SkeletonClasses';
import { skeletonProps } from './Props';
import { skeletonEmits } from './Emits';

const props = defineProps(skeletonProps);
const emit = defineEmits(skeletonEmits);

const style = {
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
    height: typeof props.height === 'number' ? `${props.height}px` : props.height,
};
</script>

<template>
    <div :class="[skeletonClasses.base, skeletonClasses[props.variant], { [skeletonClasses.animated]: props.animated }]" :style="style">
        <slot />
    </div>
</template>

<style scoped>
</style>