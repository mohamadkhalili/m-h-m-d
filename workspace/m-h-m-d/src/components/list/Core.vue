<template>
  <div class="inline-flex p-[10px] rounded-[8px]" :class="{ 'flex flex-col min-w-[100px] min-h-[40px]': vertical }">
    <div v-for="(item, index) in items" :key="index" @click="handleClick(item)">
      <slot
        name="item"
        :index="index"
        :isActive="item == modelValue"
        :item="item"
      ></slot>
      <br />
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { coreProps } from "./Props";
import { listEmits } from "./Emits";
import { coreSlots } from "./Slots";
const props = defineProps(coreProps);
const emit = defineEmits(listEmits);
const slots = defineSlots<coreSlots>();
  const handleClick = (item: string ) => {
  emit("update:modelValue", item);
};
</script>