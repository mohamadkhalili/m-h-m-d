<template>
  <Core
    :modelValue="modelValue"
    :="$attrs"
  >
    <template #input>
      <div class="relative">
          <!-- برچسب با انیمیشن -->
          <label
            :class="[
              'absolute left-3  transition-all duration-200 ease-in-out ',
              mergeClasses(UiLabelInputClass, LabelInputClass).value || InputVariant,
            ]"
            for="input-id"
          >
            {{ props.label }}
          </label>

          <button v-if="props.variant === InputVariant.search" class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
            {{ icon1 }}
          </button>

          <input
            id="input-id"
            :placeholder="props.placeholder || ''"
            v-model="localValue"
            :class="[
              '   px-8 py-3  focus:outline-none  transition-all duration-300 ',
              UiInputClass
            ]"
            type="text"
            aria-label="Input field"
            @focus="isFocused = true"
            @blur="handleBlur"
          />

          <button v-if="props.variant === InputVariant.search" type="reset" class="absolute right-3 -translate-y-1/2 top-1/2 p-1">
            {{ icon2 }}
          </button>
       
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

const UiLabelInputClass = computed(() => {
  const hasValue = !!localValue.value; 
  return `${isFocused.value || hasValue ? "scale-90 top-[-25px] text-gray-500 top-0" : " bg-transparent top-2 text-gray-400"}`;
});

const UiInputClass = computed(() => {
  switch (props.variant) {
    case InputVariant.search:
      return "rounded-full bg-white"; 
    case InputVariant.underline:
      return "border-b-2 border-gray-300 focus:border-blue-500 transition-all duration-300";
    case InputVariant.highlight:
      return "rounded-none bg-transparent  shadow-[inset_0px_-2px_0px_0px_rgba(0,_0,_0,_0.9)]";
    case InputVariant.express:
      return "ring-2 ring-red-400 rounded-lg p-2 focus:ring-red-500 transition-all duration-300";
    default:
      return "ring-2 ring-blue-400 rounded-lg p-2 focus:ring-green-500 transition-all duration-300"; 
  }
});
</script>

<style scoped>

</style>
