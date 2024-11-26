<script setup lang="ts">
import Core from './Core.vue';
import { dividerProps } from './props';

const props = defineProps(dividerProps);
</script>

<template>
  <div
    :class="[
      'flex items-center',
      props.direction === 'vertical' ? 'flex-col h-full w-min mx-2' : 'w-full',
    ]"
  >
    <!-- Divider with text (Vertical) -->
    <template v-if="props.text && props.direction === 'vertical'">
      <div class="flex flex-col items-center justify-center h-full">
        <div class="flex-grow w-px">
          <Core v-bind="props" />
        </div>
        <span
          :style="{ color: props.color }"
          class="px-2 text-sm"
        >
          {{ props.text }}
        </span>
        <div class="flex-grow w-px">
          <Core v-bind="props" />
        </div>
      </div>
    </template>

    <template v-else-if="props.direction === 'vertical'">
      <Core v-bind="props" class="h-full w-px mx-auto" />
    </template>

    <!-- Divider with text (Horizontal) -->
    <template v-if="props.text && props.direction === 'horizontal'">
      <div class="flex items-center justify-center w-full">
        <div class="flex-grow h-px  bg-black"></div>
        <span
          :style="{ color: props.color }"
          class="px-2 text-sm"
        >
          {{ props.text }}
        </span>
        <div class="flex-grow h-px bg-black "></div>
      </div>
    </template>

    <template v-else-if="props.direction === 'horizontal'">
      <div class="w-full h-px bg-gray-300"></div>
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
.w-px {
  width: 1px;
}
.h-px {
  height: 1px;
}
.bg-gray-300 {
  background-color: #d1d5db;
}
</style>
