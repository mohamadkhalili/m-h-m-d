<script setup lang="ts">
import { inputFileProps } from './Props';
import { inputFileEmits } from './Emits';
import Ui from './Ui.vue';

const props = defineProps(inputFileProps);
const emit = defineEmits(inputFileEmits);

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files ? Array.from(target.files) : [];
  emit('update:modelValue', files);
  emit('change', files);
};
</script>

<template>
  <Ui
    v-bind="props"
    @change="handleChange"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </Ui>
</template>

<style scoped>
</style>