<template>
  <Core
    :modelValue="modelValue"
    :="$attrs"
  >
    <template #input>
      <div class="relative ">
          <label
            :class="[
              'absolute left-4  transition-all duration-300 ease-in-out ',
              mergeClasses(UiLabelInputClass, LabelInputClass).value || InputVariant,
            ]"
            for="input-id"
          >
            {{ props.label }}
          </label>

          <button v-if="props.variant === InputVariant.search" class="absolute left-2 -translate-y-1/2 top-1/2  pr-8">
            {{ prefix }}
          </button>

          <input
            id="input-id"
            :placeholder="props.placeholder || ''"
            v-model="localValue"
            :class="[
              '   px-10 py-3  transition-all duration-300 ',
              mergeClasses(UiInputClass, InputClass).value ,
            ]"
            type="text"
            aria-label="Input field"
            @focus="isFocused = true"
            @blur="handleBlur"
          />

          <button v-if="props.variant === InputVariant.search" type="reset" class="absolute right-3 -translate-y-1/2 top-1/2 p-1">
            {{ suffix }}
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
  return `${isFocused.value || hasValue  ? " top-[-25px]  top-0 text-gray-800" : " bg-transparent top-3 text-gray-400 "}`;
});


const UiInputClass = computed(() => {
  const hasValue = !!localValue.value; 
  return `${isFocused.value || hasValue  ? "  rounded-lg ring-2 ring-gray-600 " : "  ring-2 ring-gray-400 rounded-lg p-2 "}`;
});
</script>

<style scoped>

</style>
