<template>
  <Core>
    <template #menu>
      <slot name="menu"></slot>
    </template>
  </Core>
</template>
<script setup lang="ts">
import Core from "./Core.vue";
import tooltipl from "../../components/tooltip/Core.vue";
import { useSlots, computed } from "vue";
import { uiProps } from "./Props";
import { menuEmits } from "./Emits";
import { uiSlots } from "./Slots";
import {
  useColorClassName,
  useBgColorClassName,
} from "../../composables/ColorComposable";
import { useSize } from "../../composables/UseSizeProps";
const props = defineProps(uiProps);
const emit = defineEmits(menuEmits);
const uiSlots = defineSlots<uiSlots>();
defineOptions({
  inheritAttrs: false,
});
const slots = useSlots();
const showMenu = computed(() => !slots.menu);
const showItem = computed(() => !slots.item);
const textColorClass = useColorClassName(props);
const bgColorClass = useBgColorClassName(props);
const shadowColorClass = computed(() => {
  return {
    active: bgColorClass.value.active.replace("bg-", "shadow-sm shadow-"),
  };
});
const sizeClass = useSize(props);

const handlePageChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};
</script>

<style scoped>
</style>