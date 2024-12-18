<script setup lang="ts">
import { computed } from 'vue';
import Core from './Core.vue';
import { dividerProps } from './props';
import { DividerClasses } from '../../styles/DividerClasses';

const props = defineProps(dividerProps);

const DividerPosition = computed(() => {
  switch (props.position) {
    case 'end':
      return DividerClasses.position.end;
    case 'start':
      return DividerClasses.position.start;
    default:
      return DividerClasses.position.none;
  }
});
</script>

<template>
  <div
    :class="[
      DividerClasses.container,
      props.direction === 'vertical' ? DividerClasses.vertical : DividerClasses.coreFullWidth,
    ]"
  >

    <template v-if="props.text !== undefined && props.direction === 'vertical'">
      <div :class=DividerClasses.verticalContainer>
        <div :class=DividerClasses.verticalText>
          <Core v-bind="props" />
        </div>
        <span
          :style="{ color: props.color }"
          :class="[props.textColor,DividerPosition,DividerClasses.text,DividerClasses.textPadding]"
        >
          {{ props.text }}
        </span>
        <div :class=DividerClasses.verticalText>
          <Core :="props" />
        </div>
      </div>
    </template>

    <!-- Simple Vertical Divider -->
    <template v-else-if="props.direction === 'vertical'">
      <Core v-bind="props" :class="[DividerClasses.coreFullHeight]" />
    </template>

    <!-- Horizontal Divider with Text -->
    <template v-if="props.text !== undefined && props.direction === 'horizontal'">
      <div :class=DividerClasses.container>
        <div :class=DividerClasses.verticalText>
          <Core v-bind="props" />
        </div>
        <!-- متن یا فضای خالی -->
        <span
          :style="{ color: props.color }"
          :class="[props.textColor,DividerClasses.text  ,props.text ==='' ? '':DividerClasses.textPadding,DividerPosition ]"
        >
          {{ props.text  }} 
        </span>
        <div :class=DividerClasses.verticalText>
          <Core v-bind="props" />
        </div>
      </div>
    </template>

    <!-- Simple Horizontal Divider -->
    <template v-else-if="props.direction === 'horizontal'">
      <Core v-bind="props" :class=DividerClasses.coreFullWidth />
    </template>
  </div>
</template>
