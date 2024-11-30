/* eslint-disable */

<template>
  <div :dir="rtl ? 'rtl' : 'ltr'" class="w-fit">
    <div class="flex items-center gap-4">
      <pagination :modelValue="modelValue" @update:modelValue="handlePageChange" :searchPage="searchPage"
        @update:searchPage="handleSearchPage" :isEditingSearchPage="isEditingSearchPage"
        @update:isEditingSearchPage="handleIsEditingSearchPage" :page-size="pageSize" v-bind="$attrs">
        <template #superPrev="{ disabled }">
          <slot name="superPrev" :disabled="disabled" :rtl="rtl"></slot>
          <button v-if="showDefaultSuperPrev" :class="mergeClasses(uiButtonClass, buttonClass).value"
            :disabled="disabled">
            <svg-icon type="mdi" :path="superPrevIcon"></svg-icon>
          </button>
        </template>
        <template #prev="{ disabled }">
          <slot name="prev" :disabled="disabled" :rtl="rtl"></slot>
          <button v-if="showDefaultPrev" :class="mergeClasses(uiButtonClass, buttonClass).value" :disabled="disabled">
            <svg-icon type="mdi" :path="prevIcon"></svg-icon>
          </button>
        </template>
        <template #default="{ isCurrentPage, isActive, page }">
          <slot name="default" :isCurrentPage="isCurrentPage" :isActive="isActive" :page="page"></slot>
          <div v-if="isCurrentPage && showDefaultPagination" class="cursor-pointer elevation-1" :class="[
            isActive
              ? mergeClasses(uiActiveClass, activeClass).value
              : mergeClasses(uiOnActiveClass, onActiveClass).value,
          ]">
            {{ page }}
          </div>
          <span v-if="page === -1 && showDefaultPagination" class="select-none mx-3" :class="separatorClass">...</span>
        </template>
        <template #next="{ disabled }">
          <slot name="next" :disabled="disabled" :rtl="rtl"></slot>
          <button v-if="showDefaultNext" :class="mergeClasses(uiButtonClass, buttonClass).value" :disabled="disabled">
            <svg-icon type="mdi" :path="nextIcon"></svg-icon>
          </button>
        </template>
        <template #superNext="{ disabled }">
          <slot name="superNext" :disabled="disabled" :rtl="rtl"></slot>
          <button v-if="showDefaultSuperNext" :class="mergeClasses(uiButtonClass, buttonClass).value"
            :disabled="disabled">
            <svg-icon type="mdi" :path="superNextIcon"></svg-icon>
          </button>
        </template>
        <template #searchPage="{ enabled }">
          <slot name="searchPage" :enabled="enabled"></slot>
          <div class="inline-block w-[100px] max-w-[100px] h-[40px] mr-[-30px] mt-[7px] box-border"
            style="perspective: 1000px" :class="{ 'is-flipped': isEditingSearchPage }">
            <div class="flipper">
              <div class="front">
                <button v-if="showDefaultsearchPageBtn && enabled"
                  :class="mergeClasses(uiButtonClass, buttonClass).value">
                  <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
                </button>
              </div>
              <div class="back">
                <input v-if="showDefaultsearchPageInput && enabled" ref="searchInput" :value="searchPage"
                  @input="handleInput" :class="mergeClasses(uiInputClass, onActiveClass).value" />
              </div>
            </div>
          </div>
        </template>
      </pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, onMounted, watch, nextTick, ref } from "vue";
import pagination from "./Core.vue";
import { uiSlots } from "./Slots";
import { uiProps } from "./Props";
import { useBorder } from "../../composables/UseBorderProps";
import { paginationEmits } from "./Emits";
import SvgIcon from "@jamescoyle/vue-icon";
import { useMergeClasses } from "../tools/useMergeClasses";
const mergeClasses = useMergeClasses();
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
const uiInputClass = ref(
  "text-center flex justify-center items-center outline-none size-10 rounded-full bg-slate-200 text-black"
);
const uiButtonClass = ref("size-10 rounded-full bg-slate-950 text-white");
const uiActiveClass = ref(
  "cursor-pointer elevation-1 text-center flex justify-center items-center select-none size-10 rounded-full bg-slate-950 text-white"
);
const uiOnActiveClass = ref(
  "cursor-pointer elevation-1 text-center flex justify-center items-center select-none size-10 rounded-full bg-slate-200 text-black"
);
const slots = useSlots();
const showDefaultPagination = computed(() => !slots.default);
const showDefaultPrev = computed(() => !slots.prev);
const showDefaultNext = computed(() => !slots.next);
const showDefaultSuperPrev = computed(() => !slots.superPrev);
const showDefaultSuperNext = computed(() => !slots.superNext);
const showDefaultsearchPageInput = computed(() => !slots.superPrev);
const showDefaultsearchPageBtn = computed(() => !slots.superNext);
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
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flipper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform-origin: center;
}

.flip-container.is-flipped .flipper {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.front {
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}
</style>