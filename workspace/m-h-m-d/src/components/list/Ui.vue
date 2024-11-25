<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handlePageChange"
    :herizontal="herizontal"
    :tooltip="tooltip"
    v-bind="$attrs"
  >
    <slot name="list"></slot>
    <template v-if="showList" #item="{ index, isActive, item }">
      <slot
        name="item"
        :index="index"
        :isActive="item == modelValue"
        :item="item"
        :vertical="herizontal"
        :tooltip="tooltip"
      ></slot>
      <tooltipl
        v-if="showItem"
        :enabled="tooltip"
        :text="item"
        :location="herizontal ? 'top' : 'right'"
      >
        <div
          :class="
            isActive
              ? mergeClasses(uiActiveClass, activeClass)
              : mergeClasses(uiOnActiveClass, OnActiveClass)
          "
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
  "bg-gray-900 hover:bg-gray-800 transition-colors duration-300 delay-80 text-white flex justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out select-none transform text-sm text-center w-24 h-10"
);
const uiOnActiveClass = ref(
  "bg-gray-100 hover:bg-gray-200 text-black flex justify-center items-center cursor-pointer transition-colors duration-300 select-none ease-in-out delay-80 transform text-sm text-center w-24 h-10"
);
const slots = useSlots();
const showList = computed(() => !slots.list);
const showItem = computed(() => !slots.item);

const handlePageChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};
const mergeClasses = (uiClassInput: string, customClassInput: string) => {
  if (!customClassInput || customClassInput.trim() === "") return uiClassInput;

  const uiClassArray = uiClassInput.split(" ").filter(Boolean);
  const customClassArray = customClassInput.split(" ").filter(Boolean);

  const resultClassArray = [];

  const uiClassMap = new Map(
    uiClassArray.map((uiClass) => [uiClass.split("-")[0], uiClass])
  );

  customClassArray.forEach((customClass) => {
    const baseName = customClass.split("-")[0];

    if (uiClassMap.has(baseName)) {
      uiClassMap.set(baseName, customClass);
    } else {
      resultClassArray.push(customClass);
    }
  });

  resultClassArray.push(...uiClassMap.values());

  return resultClassArray.join(" ");
};
</script>
  
<style scoped>
</style>