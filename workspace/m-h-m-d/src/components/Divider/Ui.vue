<script setup lang="ts">
import { computed } from 'vue';
import Core from './Core.vue';
import { dividerProps } from './props';

const props = defineProps(dividerProps);

const DividerPosition = computed(() => {
  switch (props.position) {
    case 'end':
      return 'order-first';
    case 'start':
      return 'order-last';
    default:
      return 'order-none';
  }
});
</script>

<template>
  <div
    :class="[
      'flex items-center',
      props.direction === 'vertical' ? 'flex-col h-full w-min mx-2' : 'w-full',
    ]"
  >

    <template v-if="props.text !== undefined && props.direction === 'vertical'">
      <div class="flex flex-col items-center justify-center h-full">
        <div class="flex-grow">
          <Core v-bind="props" />
        </div>
        <span
          :style="{ color: props.color }"
          :class="[props.textColor,DividerPosition]"
          class="px-2 text-sm"
        >
          {{ props.text }}
        </span>
        <div class="flex-grow">
          <Core v-bind="props" />
        </div>
      </div>
    </template>

    <!-- Simple Vertical Divider -->
    <template v-else-if="props.direction === 'vertical'">
      <Core v-bind="props" :class="['h-full mx-auto']" />
    </template>

    <!-- Horizontal Divider with Text -->
    <template v-if="props.text !== undefined && props.direction === 'horizontal'">
      <div class="flex items-center  mx-auto">
        <div class="flex-grow">
          <Core v-bind="props" />
        </div>
        <!-- متن یا فضای خالی -->
        <span
          :style="{ color: props.color }"
          :class="[props.textColor,' text-sm flex-grow-0 ',props.text ==='' ? '':'px-1',DividerPosition ]"
        >
          {{ props.text  }} 
        </span>
        <div class="flex-grow">
          <Core v-bind="props" />
        </div>
      </div>
    </template>

    <!-- Simple Horizontal Divider -->
    <template v-else-if="props.direction === 'horizontal'">
      <Core v-bind="props" class="w-full" />
    </template>
  </div>
</template>
