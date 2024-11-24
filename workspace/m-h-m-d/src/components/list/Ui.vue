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
            class="list-item"
            :class="[
              isActive ? 'list-item-active' : '',
            ]"
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
  import { useSlots, computed } from "vue";
  import { uiProps } from "./Props";
  import { listEmits } from "./Emits";
  import { uiSlots } from "./Slots";
  const props = defineProps(uiProps);
  const emit = defineEmits(listEmits);
  const uiSlots = defineSlots<uiSlots>();
  defineOptions({
    inheritAttrs: false,
  });
  const slots = useSlots();
  const showMenu = computed(() => !slots.menu);
  const showItem = computed(() => !slots.item);
  
  const handlePageChange = (newValue: number) => {
    emit("update:modelValue", newValue);
  };
  </script>
  
  <style scoped>
  .list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    font-size: 80%;
    text-align: center;
    min-width: 90px;
    min-height: 45px;
    margin: 5px;
  }
  
  .list-item:hover {
    transform: scale(1.05);
  }
  .list-item-active {
    transform: scale(1.1);
  }
  </style>
  <style >
  .vertical-list {
    flex-direction: column;
    min-width: 100px;
    min-height: 40px;
  }
  .list{
    display: inline-flex;
    padding: 10px;
    border-radius: 8px;
  }
  </style>