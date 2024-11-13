<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handlePageChange"
    :vertical="vertical"
    :tooltip="tooltip"
    v-bind="$attrs"
    :class="bgColorClass.onActive"
  >
    <slot name="menu"></slot>
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
          class="menu-item"
          :class="[
            isActive ? 'menu-item-active' : '',
            isActive ? bgColorClass.active : bgColorClass.onActive,
            isActive ? textColorClass.active : textColorClass.onActive,
            sizeClass,
            shadowColorClass.active,
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
import { defineProps, useSlots, computed } from "vue";
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
console.log(shadowColorClass.value.active);
const sizeClass = useSize(props);

const handlePageChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};
</script>

<style scoped>
.menu-item {
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

.menu-item:hover {
  transform: scale(1.05);
}
.menu-item-active {
  transform: scale(1.1);
}
</style>
<style >
.vertical-menu {
  flex-direction: column;
  min-width: 100px;
  min-height: 40px;
}
.menu{
  display: inline-flex;
  padding: 10px;
  border-radius: 8px;
}
</style>