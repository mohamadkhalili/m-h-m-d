<template>
    <Core
      :modelValue="modelValue"
      :items="items"
      :multiple="multiple"
      @update:modelValue="handleModelValueChange"
      v-bind="$attrs"
    >
      <template #input>
        <div
          class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus-within:ring focus-within:ring-blue-500 focus-within:border-blue-500"
        >
          <!-- Display selected items when multiple is true -->
          <div
            v-if="multiple && Array.isArray(modelValue)"
            class="flex flex-wrap gap-2 mb-1"
          >
            <span
              v-for="(item, index) in modelValue"
              :key="index"
              class="px-2 py-1 bg-blue-500 text-white rounded-full cursor-pointer"
              @click.stop="removeItem(item)"
            >
              {{ item }}
              <span class="ml-2 text-sm font-bold">×</span>
            </span>
          </div>
          <input
            v-model="modelValue"
            :placeholder="label"
            class="w-full border-none focus:outline-none"
            @input="onInputChange"
            @focus="onFocus"
            @blur="onBlur"
          />
        </div>
      </template>
      <template #item="{ isActive, item }">
        <div
          v-if="isDropdownOpen"
          class="cursor-pointer px-4 py-2 hover:bg-blue-100"
          :class="isActive ? 'bg-blue-500 text-white' : ''"
        >
          {{ item }}
        </div>
      </template>
    </Core>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Core from "./Core.vue";
import { uiProps } from "./Props";

const props = defineProps(uiProps);
const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(""); 
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

// Watch for changes in `modelValue` to update inputValue for single mode
watch(
  () => props.modelValue,
  (newValue) => {
    if (!props.multiple) {
      inputValue.value = (newValue as string) ?? "";
    }
  }
);
const removeItem = (item: string) => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    const updatedValue = props.modelValue.filter((selected) => selected !== item);
    emit("update:modelValue", updatedValue);
  }
};
const handleModelValueChange = (newValue: string) => {
  emit("update:modelValue", newValue);
};
</script>

<style scoped>
</style>
