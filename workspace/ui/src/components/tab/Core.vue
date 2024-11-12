<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';
import { TabProps } from './props';
import { TabEmits } from './emits';

const props = defineProps(TabProps);
const emit = defineEmits(TabEmits);

const activeTab = ref(props.modelValue || props.tabs[0]?.value);

watch(() => props.modelValue, (newVal) => {
  activeTab.value = newVal;
});

function selectTab(value) {
  activeTab.value = value;
  emit('update:modelValue', value);
}
</script>

<template>
  <div>
    <slot 
      :tabs="props.tabs"
      :activeTab="activeTab"
      :selectTab="selectTab"
    />
  </div>
</template>
