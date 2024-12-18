<template>
  <Core :modelValue="modelValue" @update:modelValue="handleItemChange">
    <template #progress>
      <slot name="progress"></slot>
      <div
        v-if="showProgress"
        :class="
          adapterClass(progressClasses.progress + ' ' + progressClass).value
        "
      >
        <slot name="progressFill"></slot>
        <div
          v-if="showProgressFill"
          :class="
            adapterClass(progressClasses.progressFill + ' ' + progressFillClass)
              .value
          "
          :style="{ width: `${modelValue}%` }"
        ></div>
      </div>
    </template>
  </Core>
</template>
  
  <script setup lang="ts">
import Core from "./Core.vue";
import { uiProps } from "./Props";
import { progressEmits } from "./Emits";
import { progressClasses } from "../../styles/ProgressClasses";
import { useAdapterClass } from "../../composables/UseClass";
import { uiSlots } from "./Slots";
import { computed, useSlots } from "vue";
const uiSlots = defineSlots<uiSlots>();
const adapterClass = useAdapterClass();
const props = defineProps(uiProps);
const emit = defineEmits(progressEmits);
const slots = useSlots();
const showProgress = computed(() => !slots.progress);
const showProgressFill = computed(() => !slots.progressFill);
const handleItemChange = (newValue: Number) => {
  emit("update:modelValue", newValue);
};
</script>