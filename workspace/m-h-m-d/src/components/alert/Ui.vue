<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handleModelValueChange"
    v-bind="$attrs"
  >
    <template #alert>
      <div
        :class="adapterClass(alertClasses.alertClass).value"
      >
        <div
        >
          <slot name="icon"></slot>
          <svg-icon
            :class="adapterClass(alertClasses.iconClass + ' ' + iconClass).value"
            type="mdi"
            :path="mdiIcons[icon]"
          ></svg-icon>
        </div>
        <div :class="adapterClass(alertClasses.titelAndTextClass).value">
          <slot name="title"></slot>
          <div :class="adapterClass(alertClasses.titleClass + ' ' + titleClass).value">{{ title }}</div>
          <slot name="text"></slot>
          <div :class="adapterClass(alertClasses.textClass + ' ' + textClass).value">{{ text }}</div>
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