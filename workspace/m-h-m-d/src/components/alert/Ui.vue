<template>
    <Core>
        <template #alert>
            <slot name="icon"></slot>
            <slot name="title"></slot>
            <slot name="text"></slot>
        </template>
    </Core>
</template>
<script setup lang="ts">
import Core from "./Core.vue"
</script>