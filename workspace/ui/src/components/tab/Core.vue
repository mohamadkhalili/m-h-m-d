<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue';
import { TabProps } from './props';
import { TabEmits } from './Emits';

const props = defineProps(TabProps);
const emit = defineEmits(TabEmits);

const activeTab = ref(props.modelValue || 0);

watch(() => props.modelValue, (newVal) => {
  activeTab.value = newVal;
});

function selectTab(index: number) {
  activeTab.value = index;
  emit('update:modelValue', index);
}

</script>

<template>
  <slot :activeTab="activeTab" :selectTab="selectTab" :tabs="props.tabs" />
</template>
