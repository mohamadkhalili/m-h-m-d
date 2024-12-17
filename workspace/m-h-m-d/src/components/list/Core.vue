<template>
  <div :class="herizontal ? adapterClass(listClasses.herizontalClass).value : adapterClass(listClasses.verticalClass).value ">
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
import { useAdapterClass } from "../../composables/UseClass";
const adapterClass = useAdapterClass();
import { listClasses } from "../../styles/ListClasses";
const props = defineProps(coreProps);
const emit = defineEmits(listEmits);
const slots = defineSlots<coreSlots>();
  const handleClick = (item: string ) => {
  emit("update:modelValue", item);
};
</script>