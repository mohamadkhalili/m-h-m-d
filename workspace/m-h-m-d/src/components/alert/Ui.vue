<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handleModelValueChange"
    v-bind="$attrs"
  >
    <template #alert>
      <div
        :class="alertClasses.alertClass"
      >
        <div
        >
          <slot name="icon"></slot>
          <svg-icon
            :class="alertClasses.iconClass"
            type="mdi"
            :path="mdiIcons[icon]"
          ></svg-icon>
        </div>
        <div :class="alertClasses.titelAndTextClass">
          <slot name="title"></slot>
          <div :class="alertClasses.titleClass">{{ title }}</div>
          <slot name="text"></slot>
          <div :class="alertClasses.textClass">{{ text }}</div>
        </div>
      </div>
    </template>
  </Core>
</template>
  
  <script setup lang="ts">
import * as mdiIcons from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import Core from "./Core.vue";
import { alertEmits } from "./Emits";
import { alertProps } from "./Props";
import { alertClasses } from "../../styles/AlertClasses";
import { useAdapterClass } from "../../composables/UseClass";
const adapterClass = useAdapterClass();
const props = defineProps(alertProps);
const emit = defineEmits(alertEmits);
const handleModelValueChange = (newValue: boolean) => {
  emit("update:modelValue", newValue);
};
defineOptions({
  inheritAttrs: false,
});
</script>