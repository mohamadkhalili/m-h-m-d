<template>
  <Core
    :modelValue="modelValue"
    :="$attrs"
  >
    <template #input>
      <div class="relative ">
          <label
            :class="[
              inputClass.uiLabelClass,
              adapterClass(UiLabelInputClass+' '+ LabelInputClass).value ,
            ]"
            for="input-id"
          >
          <div v-if="!$slots.label" >
            {{ props.label }}
          </div>
          <slot name="label"/>
          </label>
          
          <div v-if="!$slots.prefix">
          <button  :class=inputClass.uiButtonClass >
            {{ prefix }}
          </button>
          </div>
          <slot name="prefix" />
          <input
            id="input-id"
            :placeholder="props.placeholder || ''"
            v-model="localValue"
            :class="[
             inputClass.uiInputBaseClass ,
              adapterClass(UiInputClass + ' ' + InputClass).value ,
            ]"
            type="text"
            aria-label="Input field"
            @focus="isFocused = true"
            @blur="handleBlur"
          />

          <div v-if="!$slots.suffix">
          <button  type="reset" :class=inputClass.uiButtonSuffixClass>
            {{ suffix }}
          </button>
          <slot name="suffix"/>
        </div>
      </div>
    </template>
  </Core>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { InputProps, InputVariant } from "./props";
import { inputEmits } from "./Emits";
import Core from "./Core.vue";
import { inputClass } from "../../styles/InputClasses";
import { useAdapterClass } from "../../composables/UseClass";
const adapterClass = useAdapterClass();
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
  return `${isFocused.value || hasValue  ? adapterClass(inputClass.UiLabelActiveClass).value : adapterClass(inputClass.UiLabelNotActiveClass).value}`;
});


const UiInputClass = computed(() => {
  const hasValue = !!localValue.value; 
  return `${isFocused.value || hasValue  ? adapterClass(inputClass.UiInputActiveClass).value : adapterClass(inputClass.UiInputNotActiveClass).value}`;
});
</script>

<style scoped>

</style>
