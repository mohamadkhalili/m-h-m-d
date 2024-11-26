<script setup lang="ts">
import Core from './Core.vue';
import { dividerProps } from './props';

// پراپ‌ها
const props = defineProps(dividerProps);
</script>

<template>
  <div
    :class="[
      'flex items-center',
      props.direction === 'vertical' ? ' h-full w-min mx-2' : 'w-full',
    ]"
  >

    <template v-if="props.text">
      <div class="flex items-center justify-center ">
        <div class="flex-grow">
          <Core v-bind="props" />
        </div>
        <span :style="{ color: props.color }" class="px-2 text-sm">{{ props.text }}</span>
        <div class="flex-grow">
          <Core v-bind="props" />
        </div>
      </div>
    </template>
    <template v-else>
      <Core v-bind="props" />
    </template>
  </div>
</template>

<style scoped>

.text-sm {
  font-size: 0.875rem;
}
.flex-grow {
  flex-grow: 1;
}
</style>
