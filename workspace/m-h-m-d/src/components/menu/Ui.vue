<template>
  <Core
  v-bind="$attrs">
    <template #menu>
      <div
        v-if="modelValue"
        class="relative overflow-hidden transform transition-all duration-300 ease-in-out max-h-0 bg-black"
        :class="{
          'max-h-[500px] opacity-100': modelValue,
          'opacity-0': !modelValue,
        }"
      >
        <slot name="menu"></slot>
      </div>
    </template>
    
  </Core>
  <p>{{modelValue}}</p>
</template>

<script setup lang="ts">
import Core from "./Core.vue";
import { useSlots, computed } from "vue";
import { uiProps } from "./Props";
import { menuEmits } from "./Emits";
import { menuSlots } from "./Slots";
import {
  useColorClassName,
  useBgColorClassName,
} from "../../composables/ColorComposable";
import { useSize } from "../../composables/UseSizeProps";

const props = defineProps(uiProps);
const emit = defineEmits(menuEmits);
const uiSlots = defineSlots<menuSlots>();
defineOptions({
  inheritAttrs: false,
});

const slots = useSlots();
const showMenu = computed(() => !slots.menu);
const textColorClass = useColorClassName(props);
const bgColorClass = useBgColorClassName(props);

const shadowColorClass = computed(() => {
  return {
    active: bgColorClass.value.active.replace("bg-", "shadow-sm shadow-"),
  };
});

const sizeClass = useSize(props);
</script>

<style scoped>
</style>
