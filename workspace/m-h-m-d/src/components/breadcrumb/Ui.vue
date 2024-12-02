<template>
  <Core>
    <template #item="{ title, disable }">
      <slot name="item" :title="title" :disable="disable"></slot>
      <div>{{ title }}</div>
    </template>
  </Core>
</template>
<script setup lang="ts">
import Core from "./Core.vue";
import { uiProps } from "./Props";
import { breadcrumbEmits } from "./Emits";
const props = defineProps(uiProps);
const emit = defineEmits(breadcrumbEmits);
</script>