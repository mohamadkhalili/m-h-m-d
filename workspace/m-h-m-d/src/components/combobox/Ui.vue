<template>
  <Core
    :modelValue="modelValue"
    :items="items"
    :multiple="multiple"
    :enableChip="enableChip"
    @update:modelValue="handleModelValueChange"
    v-bind="$attrs"
  >
    <template #input>
      <slot name="input"></slot>
      <div
        v-if="showInput"
        class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus-within:ring focus-within:ring-gray-500 focus-within:border-gray-500 overflow-auto"
      >
        <div v-if="multiple && enableChip" class="flex flex-wrap gap-2 mb-1">
            <span
              v-for="(item, index) in modelValue"
              :key="index"
              class="px-2 py-1 bg-gray-500 text-white rounded-full cursor-pointer"
              @click.stop="removeItem(item)"
            >
              {{ item }}
              <span class="ml-2 text-sm font-bold">×</span>
            </span>
        </div>
        <input
          :value="enableChip ? '' : modelValue"
          :placeholder="label"
          class="w-full border-none focus:outline-none"
          @input="onInputChange"
          @focus="onFocus"
          @blur="onBlur"
        />
      </div>
    </template>
    <template #item="{ isActive, item }">
      <slot
      name="item"
      :isActive="isActive"
      :item="item"
      ></slot>
      <div
        v-if="isDropdownOpen && showItem"
        class="cursor-pointer px-4 py-2 hover:bg-gray-300 hover:text-black"
        :class="isActive ? 'bg-gray-500 text-white' : ''"
      >
        {{ item }}
      </div>
    </template>
  </Core>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from "vue";
import { uiSlots } from "./Slots";
import Core from "./Core.vue";
import { uiProps } from "./Props";

const props = defineProps(uiProps);
const emit = defineEmits(["update:modelValue"]);
const uiSlots = defineSlots<uiSlots>();
const slots = useSlots();
const showInput = computed(() => !slots.input);
const showItem = computed(() => !slots.item);
const isDropdownOpen = ref(false);

const onInputChange = () => {
  isDropdownOpen.value = true;
};

const onBlur = () => {
  setTimeout(() => {
    isDropdownOpen.value = false;
  }, 100);
};

const onFocus = () => {
  setTimeout(() => {
    isDropdownOpen.value = true;
  }, 100);
};

const removeItem = (item: string) => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    const updatedValue = props.modelValue.filter(
      (selected) => selected !== item
    );
    emit("update:modelValue", updatedValue);
  }
};
const handleModelValueChange = (newValue: string) => {
  emit("update:modelValue", newValue);
};
</script>

<style scoped>
</style>
