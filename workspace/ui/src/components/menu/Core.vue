<template>
  <slot name="menu"></slot>
  <template v-for="(item, index) in items" :key="index">
    <div @click="setModelValue(item)">
    </div>
  </template>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { coreProps } from './Props';
import { menuEmits } from './Emits';
const props = defineProps(coreProps);
const emit = defineEmits(menuEmits);

const setModelValue = (temp: String) => {
    emit("update:modelValue", temp);
};

</script>