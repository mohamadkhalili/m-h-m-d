<template>
  <Core
    :modelValue="modelValue"
    @update:modelValue="handlePageChange"
    :herizontal="herizontal"
    :tooltip="tooltip"
    v-bind="$attrs"
  >
    <slot name="list"></slot>
    <template v-if="showList" #item="{ index, isActive, item }">
      <slot
        name="item"
        :index="index"
        :isActive="item == modelValue"
        :item="item"
        :vertical="herizontal"
        :tooltip="tooltip"
      ></slot>
      <tooltipl
        v-if="showItem"
        :enabled="tooltip"
        :text="item"
        :location="herizontal ? 'top' : 'right'"
      >
        <div
          :class="
            isActive
              ? adapterClass(listClasses.uiActiveClass + ' ' + activeClass).value
              : adapterClass(listClasses.uiOnActiveClass + ' ' + onActiveClass).value
          "
          v-if="showItem"
        >
          {{ item }}
        </div>
      </tooltipl>
    </template>
  </Core>
</template>
  <script setup lang="ts">
import Core from "./Core.vue";
import tooltipl from "../../components/tooltip/Core.vue";
import { useMergeClasses } from "../../composables/useMergeClasses";
const mergeClasses = useMergeClasses();
import { useSlots, computed, ref, onActivated } from "vue";
import { uiProps } from "./Props";
import { listEmits } from "./Emits";
import { uiSlots } from "./Slots";
import { listClasses } from "../../styles/ListClasses";
import { useAdapterClass } from "../../composables/UseClass";
const adapterClass = useAdapterClass();
const props = defineProps(uiProps);
const emit = defineEmits(listEmits);
const uiSlots = defineSlots<uiSlots>();
defineOptions({
  inheritAttrs: false,
});
const slots = useSlots();
const showList = computed(() => !slots.list);
const showItem = computed(() => !slots.item);

const handlePageChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};
</script>
  
<style scoped>
</style>