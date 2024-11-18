<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handleModelValue"
    v-bind="$attrs"
    class="relative"
  >
    <template #menu>
      <transition
        name="menu-transition"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div
          v-click-outside="handleClickOutside"
          v-show="modelValue"
          :class="[bgColorClass.onActive, sizeClass, roundedClass]"
          class="absolute left-0 top-full -mt-4 bg-black text-white shadow-lg z-50 transform"
        >
          <slot name="menu"></slot>
        </div>
      </transition>
    </template>
  </Core>
</template>

<script setup lang="ts">
import Core from "./Core.vue";
import { useSlots, computed, ref, watch } from "vue";
import { uiProps } from "./Props";
import { menuEmits } from "./Emits";
import { menuSlots } from "./Slots";
import {
  useColorClassName,
  useBgColorClassName,
} from "../../composables/ColorComposable";
import { useRounded } from "../../composables/UseRoundedProps";

const props = defineProps(uiProps);
const emit = defineEmits(menuEmits);
const uiSlots = defineSlots<menuSlots>();
const enableOutside = ref(false);
const handleModelValue = (newValue: boolean) => {
  emit("update:modelValue", newValue);
};
watch(
  () => props.modelValue, 
  (newValue) => {
    if (newValue) {
      setTimeout(() => {
        enableOutside.value = true;
      }, 5); 
    } else{
      enableOutside.value = false;
    }
  }
);
const slots = useSlots();
const showMenu = computed(() => !slots.menu);
const bgColorClass = useBgColorClassName(props);
const sizeClass = props.size;
const roundedClass = props.rounded;
const handleClickOutside = (event: Event) => {
  if (props.modelValue && enableOutside.value && props.closeOutside) {
    handleModelValue(false);
    enableOutside.value = false;
  }
};
const beforeEnter = (el: HTMLElement) => {
  el.style.transform = "scale(0.95)";
  el.style.opacity = "0";
  el.style.transition = "none";
};

const enter = (el: HTMLElement, done: Function) => {
  el.offsetHeight;
  el.style.transition =
    "transform 300ms ease-in-out, opacity 300ms ease-in-out";
  el.style.transform = "scale(1)";
  el.style.opacity = "1";
  done();
};

const leave = (el: HTMLElement, done: Function) => {
  el.style.transition =
    "transform 300ms ease-in-out, opacity 300ms ease-in-out";
  el.style.transform = "scale(0.95)";
  el.style.opacity = "0";
  el.addEventListener("transitionend", () => done(), { once: true });
};
</script>

<style scoped>
</style>
