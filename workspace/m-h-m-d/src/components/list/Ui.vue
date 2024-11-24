<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handlePageChange"
    :vertical="vertical"
    :tooltip="tooltip"
    v-bind="$attrs"
  >
    <slot name="list"></slot>
    <template v-if="showMenu" #item="{ index, isActive, item }">
      <slot
        name="item"
        :index="index"
        :isActive="item == modelValue"
        :item="item"
        :vertical="vertical"
        :tooltip="tooltip"
      ></slot>
      <tooltipl
        :enabled="tooltip"
        :text="item"
        :location="vertical ? 'right' : 'top'"
      >
        <div
          :class="isActive ? mergeClasses(uiActiveClass, activeClass) : mergeClasses(uiOnActiveClass, OnActiveClass)"
          v-if="showItem"
        >
          {{ item }}
        </div>
      </tooltipl>
    </template>
  </Core>
</template>
  <script setup lang="ts">
import Core from "./Core.vue";
import tooltipl from "../../components/tooltip/Core.vue";
import { useSlots, computed, ref } from "vue";
import { uiProps } from "./Props";
import { listEmits } from "./Emits";
import { uiSlots } from "./Slots";
const props = defineProps(uiProps);
const emit = defineEmits(listEmits);
const uiSlots = defineSlots<uiSlots>();
defineOptions({
  inheritAttrs: false,
});
const uiActiveClass = ref(
  "scale-110 bg-emerald-900 text-white flex justify-center items-center rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 text-sm text-center min-w-[90px] min-h-[45px] m-1"
);
const uiOnActiveClass = ref(
  "bg-gray-100 text-black flex justify-center items-center rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 text-sm text-center min-w-[90px] min-h-[45px] m-1"
);
const slots = useSlots();
const showMenu = computed(() => !slots.menu);
const showItem = computed(() => !slots.item);

const handlePageChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};
const mergeClasses = (uiClassInput: string, customClassInput: string) => {
  if (!customClassInput || customClassInput.trim() === '') return uiClassInput;

  const uiClassArray = uiClassInput.split(' ').filter(Boolean); 
  const customClassArray = customClassInput.split(' ').filter(Boolean);

  const resultClassArray = [];

  const uiClassMap = new Map(
    uiClassArray.map(uiClass => [uiClass.split('-')[0], uiClass]) 
  );

  customClassArray.forEach(customClass => {
    const baseName = customClass.split('-')[0];

    if (uiClassMap.has(baseName)) {
      uiClassMap.set(baseName, customClass); 
    } else {

      resultClassArray.push(customClass);
    }
  });

  resultClassArray.push(...uiClassMap.values());

  return resultClassArray.join(' ');
};
</script>
  
<style scoped>
</style>