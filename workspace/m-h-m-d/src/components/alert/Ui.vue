<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handleModelValueChange"
    v-bind="$attrs"
  >
    <template #alert>
      <slot name="alert"></slot>
      <div
        v-if="showAlert"
        :class="adapterClass(alertClasses.alertClass + ' ' + alertClass).value"
      >
        <slot name="icon"></slot>
        <svg-icon
          v-if="showIcon"
          :class="adapterClass(alertClasses.iconClass + ' ' + iconClass).value"
          type="mdi"
          :path="mdiIcons[icon]"
        ></svg-icon>
        <div :class="adapterClass(alertClasses.titelAndTextClass).value">
          <slot name="title"></slot>
          <div
            v-if="showTitle"
            :class="
              adapterClass(alertClasses.titleClass + ' ' + titleClass).value
            "
          >
            {{ title }}
          </div>
          <slot name="text"></slot>
          <div
            v-if="showText"
            :class="
              adapterClass(alertClasses.textClass + ' ' + textClass).value
            "
          >
            {{ text }}
          </div>
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
import { uiSlots } from "./Slots";
import { computed, useSlots } from "vue";
const uislots = defineSlots<uiSlots>();
const adapterClass = useAdapterClass();
const props = defineProps(alertProps);
const emit = defineEmits(alertEmits);
const slots = useSlots();
const showAlert = computed(() => !slots.alert);
const showIcon = computed(() => !slots.icon);
const showTitle = computed(() => !slots.title);
const showText = computed(() => !slots.text);
const handleModelValueChange = (newValue: boolean) => {
  emit("update:modelValue", newValue);
};
defineOptions({
  inheritAttrs: false,
});
</script>