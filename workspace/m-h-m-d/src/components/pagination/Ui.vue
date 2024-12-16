/* eslint-disable */

<template>
  <div :class="adapterClass(paginationClasses.uiContainerClass).value" :dir="rtl ? 'rtl' : 'ltr'">
    <pagination :modelValue="modelValue" @update:modelValue="handlePageChange" :searchPage="searchPage"
      @update:searchPage="handleSearchPage" :isEditingSearchPage="isEditingSearchPage"
      @update:isEditingSearchPage="handleIsEditingSearchPage" :page-size="pageSize" v-bind="$attrs">
      <template #superPrev="{ disabled }">
        <slot name="superPrev" :disabled="disabled" :rtl="rtl"></slot>
        <Button v-if="showDefaultSuperPrev" :buttonClass="adapterClass(paginationClasses.uiButtonClass + ' ' + buttonClass).value
          " :disabled="disabled">
          <svg-icon type="mdi" :path="superPrevIcon"></svg-icon>
        </Button>
      </template>
      <template #prev="{ disabled }">
        <slot name="prev" :disabled="disabled" :rtl="rtl"></slot>
        <Button v-if="showDefaultPrev" :buttonClass="adapterClass(paginationClasses.uiButtonClass + ' ' + buttonClass).value
          " :disabled="disabled">
          <svg-icon type="mdi" :path="prevIcon"></svg-icon>
        </Button>
      </template>
      <template #default="{ isCurrentPage, isActive, page }">
        <slot name="default" :isCurrentPage="isCurrentPage" :isActive="isActive" :page="page"></slot>
        <div v-if="isCurrentPage && showDefaultPagination" :class="[
          isActive
            ? adapterClass(paginationClasses.uiActiveClass + ' ' + activeClass).value
            : adapterClass(paginationClasses.uiOnActiveClass + ' ' + onActiveClass).value,
        ]">
          {{ page }}
        </div>
        <span v-if="page === -1 && showDefaultPagination" :class="adapterClass(paginationClasses.uiSeparatorClass + ' ' + separatorClass).value
          ">...</span>
      </template>
      <template #next="{ disabled }">
        <slot name="next" :disabled="disabled" :rtl="rtl"></slot>
        <Button v-if="showDefaultNext" :buttonClass="adapterClass(paginationClasses.uiButtonClass + ' ' + buttonClass).value
          " :disabled="disabled">
          <svg-icon type="mdi" :path="nextIcon"></svg-icon>
        </Button>
      </template>
      <template #superNext="{ disabled }">
        <slot name="superNext" :disabled="disabled" :rtl="rtl"></slot>
        <Button v-if="showDefaultSuperNext" :buttonClass="adapterClass(paginationClasses.uiButtonClass + ' ' + buttonClass).value
          " :disabled="disabled">
          <svg-icon type="mdi" :path="superNextIcon"></svg-icon>
        </Button>
      </template>
      <template #searchPage="{ enabled }">
        <slot name="searchPage" :enabled="enabled"></slot>
        <div v-click-outside="handleClickOutside">
          <div v-if="showDefaultsearchPage && enabled && !isEditingSearchPage || isEditingSearchPage == undefined">
            <Button :buttonClass="adapterClass(paginationClasses.uiButtonClass + ' ' + buttonClass).value">
              <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
            </Button>
          </div>

          <input v-if="showDefaultsearchPage && isEditingSearchPage" ref="searchInput" :value="searchPage"
            @input="handleInput" :class="adapterClass(paginationClasses.uiInputClass + ' ' + onActiveClass).value" />
        </div>
      </template>


    </pagination>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, onMounted, watch, nextTick, ref } from "vue";
import pagination from "./Core.vue";
import { uiSlots } from "./Slots";
import { uiProps } from "./Props";
import { paginationClasses } from "../../styles/PaginatioinClasses";
import { useBorder } from "../../composables/UseBorderProps";
import { paginationEmits } from "./Emits";
import SvgIcon from "@jamescoyle/vue-icon";
import { useAdapterClass } from "../../composables/UseClass";
const adapterClass = useAdapterClass();

import {
  mdiChevronDoubleRight,
  mdiChevronDoubleLeft,
  mdiChevronRight,
  mdiChevronLeft,
  mdiMagnify,
} from "@mdi/js";

const props = defineProps(uiProps);

defineOptions({
  inheritAttrs: false,
});

const uiSlots = defineSlots<uiSlots>();
const emit = defineEmits(paginationEmits);
const superPrevIcon = computed(() =>
  props.rtl ? mdiChevronDoubleRight : mdiChevronDoubleLeft
);
const prevIcon = computed(() => (props.rtl ? mdiChevronRight : mdiChevronLeft));
const superNextIcon = computed(() =>
  props.rtl ? mdiChevronDoubleLeft : mdiChevronDoubleRight
);
const nextIcon = computed(() => (props.rtl ? mdiChevronLeft : mdiChevronRight));
const slots = useSlots();
const showDefaultPagination = computed(() => !slots.default);
const showDefaultPrev = computed(() => !slots.prev);
const showDefaultNext = computed(() => !slots.next);
const showDefaultSuperPrev = computed(() => !slots.superPrev);
const showDefaultSuperNext = computed(() => !slots.superNext);
const showDefaultsearchPage = computed(() => !slots.searchPage);
let timeoutId: number | undefined;
const searchInput = ref<HTMLInputElement | null>(null);
const handlePageChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};

const handleSearchPage = (newValue: number) => {
  emit("update:searchPage", newValue);
};

const handleIsEditingSearchPage = (newValue: boolean) => {
  emit("update:isEditingSearchPage", newValue);
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target) {
    const value = target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    let limitedValue = numericValue.slice(0, 3);
    if (limitedValue && Number(limitedValue) >= 0) {
      emit("update:searchPage", Number(limitedValue));

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        if (
          Number(limitedValue) > 0 &&
          Number(limitedValue) <= props.pageSize
        ) {
          emit("update:modelValue", Number(limitedValue));
        }
        emit("update:searchPage", undefined);
      }, 700);
    }

    target.value = limitedValue;
  }
};
watch(
  () => props.isEditingSearchPage,
  (newValue) => {
    if (newValue) {
      nextTick(() => {
        searchInput.value?.focus();
      });
    }
  }
);
const handleClickOutside = (event: Event) => {
  if (props.isEditingSearchPage === true) {
    emit("update:isEditingSearchPage", false);
  }
};
</script>

<style scoped></style>