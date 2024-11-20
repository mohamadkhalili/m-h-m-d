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
          :class="mergeClasses(uiClass, menuClass)"
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

const props = defineProps(uiProps);
const emit = defineEmits(menuEmits);
const uiSlots = defineSlots<menuSlots>();
const enableOutside = ref(false);
const handleModelValue = (newValue: boolean) => {
  emit("update:modelValue", newValue);
};
const uiClass = ref("absolute left-0 top-full -mt-4 bg-teal-200 rounded-lg w-28 h-20 shadow-lg z-50 transform");
const mergeClasses = (uiClassInput: string, customClassInput: string) => {
  if (!customClassInput || customClassInput.trim() === '') return uiClassInput;

  const uiClassArray = uiClassInput.split(' ').filter(Boolean); 
  const customClassArray = customClassInput.split(' ').filter(Boolean);

  const resultClassArray = [];

  // Create a map for `uiClass` to handle replacement efficiently
  const uiClassMap = new Map(
    uiClassArray.map(uiClass => [uiClass.split('-')[0], uiClass]) // Key: base name, Value: full class
  );

  // Loop through `customClass` to replace or add
  customClassArray.forEach(customClass => {
    const baseName = customClass.split('-')[0];

    // Replace in `uiClass` if it exists
    if (uiClassMap.has(baseName)) {
      uiClassMap.set(baseName, customClass); // Replace existing class with `customClass`
    } else {
      // Otherwise, append `customClass`
      resultClassArray.push(customClass);
    }
  });

  // Add all remaining `uiClass` items after applying replacements
  resultClassArray.push(...uiClassMap.values());

  // Return the merged classes as a string
  console.log(resultClassArray.join(' '))
  return resultClassArray.join(' ');
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
const menuClass = props.menuClass;
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
