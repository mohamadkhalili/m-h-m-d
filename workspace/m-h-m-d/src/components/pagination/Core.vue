<template>
  <div @click="superPrevPage">
    <slot name="superPrev" :disabled="modelValue === 1"></slot>
  </div>
  <div @click="prevPage">
    <slot name="prev" :disabled="modelValue === 1"></slot>
  </div>
  <template v-for="(page, index) in getPages" :key="index">
    <div @click="setModelValue(page)">
      <slot name="default" :isCurrentPage="typeof page === 'number' && page !== -1" :isActive="page === modelValue"
        :page="page"></slot>
    </div>
  </template>
  <div @click="nextPage">
    <slot name="next" :disabled="modelValue === pageSize"></slot>
  </div>
  <div @click="superNextPage">
    <slot name="superNext" :disabled="modelValue === pageSize"></slot>
  </div>
  <div v-if="enableSearchPage" @click="toggleEdit" @keyup.enter="setSearchPage(searchPage)">
    <slot name="searchPage" :enabled="enableSearchPage"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { paginationProps } from "./Props";
import { paginationSlots } from "./Slots";
import { paginationEmits } from "./Emits";
const props = defineProps(paginationProps);
const slots = defineSlots<paginationSlots>();

const emit = defineEmits(paginationEmits);
const prevPage = () => {
  if (props.modelValue > 1) {
    emit("update:modelValue", props.modelValue - 1);
  }
};

const nextPage = () => {
  if (props.modelValue < props.pageSize) {
    emit("update:modelValue", props.modelValue + 1);
  }
};

const superPrevPage = () => {
  if (props.modelValue > 1) {
    emit("update:modelValue", 1);
  }
};

const superNextPage = () => {
  if (props.modelValue < props.pageSize) {
    emit("update:modelValue", props.pageSize);
  }
};

const setModelValue = (temp: number) => {
  if (temp !== -1) {
    emit("update:modelValue", temp);
  }
};
const setSearchPage = (searchnum: number) => {
  if (searchnum > 0 && searchnum <= props.pageSize) {
    emit("update:modelValue", searchnum);
  }
  emit("update:searchPage", undefined);
  if (props.isEditingSearchPage === true) {
    emit("update:isEditingSearchPage", false);
  }
};
const toggleEdit = () => {
  if (props.isEditingSearchPage === false) {
    emit("update:isEditingSearchPage", true);
  }
};

const getPages = computed(() => {
  let arrayBtn: number[] = [];
  if (props.pageSize > 6) {
    if (props.modelValue < 5) {
      for (let i = 1; i < 6; i++) {
        arrayBtn.push(i);
      }
      arrayBtn.push(-1);
      arrayBtn.push(props.pageSize);
    } else if (props.modelValue > props.pageSize - 4) {
      arrayBtn.push(1);
      arrayBtn.push(-1);
      for (let i = props.pageSize - 4; i <= props.pageSize; i++) {
        arrayBtn.push(i);
      }
    } else {
      arrayBtn.push(1);
      arrayBtn.push(-1);
      arrayBtn.push(props.modelValue - 1);
      arrayBtn.push(props.modelValue);
      arrayBtn.push(props.modelValue + 1);
      arrayBtn.push(-1);
      arrayBtn.push(props.pageSize)
    }
  } else {
    for (let i = 1; i < props.pageSize + 1; i++) {
      arrayBtn.push(i);
    }
  }
  return arrayBtn;
});
</script>