<template>
  <Core
    :modelValue="modelValue"
    :="$attrs"
  >
    <template #input>
      <div class="relative">
        <form v-if="props.variant === InputVariant.search" class="form relative">
          <label type="label" class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
            {{ icon1 }}
          </label>
          <input
          :placeholder= props.placeholder
            v-model="localValue"
            class="input bg-white rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            
            type="text"
          />
          <button type="reset" class="absolute right-3 -translate-y-1/2 top-1/2 p-1">
            {{ icon2 }}
          </button>
        </form>

        
        <div v-else :class="'relative'">
          <input
            v-model="localValue"
            :class="[mergeClasses(UiInputClass, InputClass).value || InputVariant]"
            @focus="isFocused = true"
            @blur="handleBlur"
          />
          <label
            for="input-id"
            :class="[mergeClasses(UiLabelInputClass, LabelInputClass).value || InputVariant]"
          >
            {{ label }}
            <slot name="label"></slot>
          </label>
        </div>
      </div>
    </template>
  </Core>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { InputProps, InputVariant } from "./props";
import { inputEmits } from "./Emits";
import { useMergeClasses } from "../../composables/useMergeClasses";
import Core from "./Core.vue";

const mergeClasses = useMergeClasses();
const props = defineProps(InputProps);
const emit = defineEmits(inputEmits);

defineOptions({
  inheritAttrs: false,
});

const isFocused = ref(false);
const localValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    localValue.value = newValue;
  }
);

const handleBlur = () => {
  isFocused.value = !!localValue.value;
};

const UiInputClass = computed(() => {
  switch (props.variant) {
    case InputVariant.search:
      return " rounded-full p-2 px-4"; 
    case InputVariant.underline:
      return "border-b-2 border-gray-300 focus:border-blue-500 transition-all duration-300";
    case InputVariant.highlight:
      return "ring-2 ring-yellow-400 rounded-lg p-2 focus:ring-yellow-500 transition-all duration-300";
    case InputVariant.express:
      return "ring-2 ring-red-400 rounded-lg p-2 focus:ring-red-500 transition-all duration-300";
    case InputVariant.defaultNew:
      return "ring-2 ring-green-400 rounded-lg p-2 focus:ring-green-500 transition-all duration-300";
    default:
      return "ring-2 ring-blue-400 rounded-lg p-2 focus:ring-green-500 transition-all duration-300"; 
  }
});

const UiLabelInputClass = computed(() => {
  const hasValue = !!localValue.value; 
  switch (props.variant) {
    case InputVariant.search:
      return ""; // No label styling needed for search variant
    case InputVariant.underline:
      return "";
    case InputVariant.highlight:
      return "";
    case InputVariant.express:
      return "";
    case InputVariant.defaultNew:
      return "";
    default:
      return `absolute left-2 transition-all duration-200 ease-in-out bg-transparent ${
        isFocused.value || hasValue
          ? "scale-90 top-[-30px] text-gray-500" 
          : "top-2 text-gray-400"
      }`; 
  }
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
