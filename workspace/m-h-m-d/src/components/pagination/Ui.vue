/* eslint-disable */

<template>
  <div class="flex items-center gap-4 w-fit" :dir="rtl ? 'rtl' : 'ltr'">
    <pagination :modelValue="modelValue" @update:modelValue="handlePageChange" :searchPage="searchPage"
      @update:searchPage="handleSearchPage" :isEditingSearchPage="isEditingSearchPage"
      @update:isEditingSearchPage="handleIsEditingSearchPage" :page-size="pageSize" v-bind="$attrs">
      <template #superPrev="{ disabled }">
        <slot name="superPrev" :disabled="disabled" :rtl="rtl"></slot>
        <Button v-if="showDefaultSuperPrev" :buttonClass="mergeClasses(paginationClasses.uiButtonClass, buttonClass).value"
          :disabled="disabled">
          <svg-icon type="mdi" :path="superPrevIcon"></svg-icon>
      </Button>
      </template>
      <template #prev="{ disabled }">
        <slot name="prev" :disabled="disabled" :rtl="rtl"></slot>
        <Button v-if="showDefaultPrev" :buttonClass="mergeClasses(paginationClasses.uiButtonClass, buttonClass).value" :disabled="disabled">
          <svg-icon type="mdi" :path="prevIcon"></svg-icon>
        </Button>
      </template>
      <template #default="{ isCurrentPage, isActive, page }">
        <slot name="default" :isCurrentPage="isCurrentPage" :isActive="isActive" :page="page"></slot>
        <div v-if="isCurrentPage && showDefaultPagination" :class="[
          isActive
            ? mergeClasses(paginationClasses.uiActiveClass, activeClass).value
            : mergeClasses(paginationClasses.uiOnActiveClass, onActiveClass).value,
        ]">
          {{ page }}
        </div>
        <span v-if="page === -1 && showDefaultPagination"  :class="mergeClasses(paginationClasses.uiSeparatorClass, separatorClass).value">...</span>
      </template>
      <template #next="{ disabled }">
        <slot name="next" :disabled="disabled" :rtl="rtl"></slot>
        <Button v-if="showDefaultNext" :buttonClass="mergeClasses(paginationClasses.uiButtonClass, buttonClass).value" :disabled="disabled">
          <svg-icon type="mdi" :path="nextIcon"></svg-icon>
        </Button>
      </template>
      <template #superNext="{ disabled }">
        <slot name="superNext" :disabled="disabled" :rtl="rtl"></slot>
        <Button v-if="showDefaultSuperNext" :buttonClass="mergeClasses(paginationClasses.uiButtonClass, buttonClass).value"
          :disabled="disabled">
          <svg-icon type="mdi" :path="superNextIcon"></svg-icon>
        </Button>
      </template>
      <template #searchPage="{ enabled }">
        <slot name="searchPage" :enabled="enabled"></slot>
        <div class="flip-container"
          style="perspective: 1000px" :class="{ 'is-flipped': isEditingSearchPage }">
          <div class="flipper">
            <div class="front">
              <Button v-if="showDefaultsearchPageBtn && enabled"
                :buttonClass="mergeClasses(paginationClasses.uiButtonClass, buttonClass).value">
                <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
              </Button>
            </div>
            <div class="back">
              <input v-if="showDefaultsearchPageInput && enabled" ref="searchInput" :value="searchPage"
                @input="handleInput" :class="mergeClasses(paginationClasses.uiInputClass, onActiveClass).value" />
            </div>
          </div>
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
import { paginationClasses } from "./PaginatioinClasses";
import { useBorder } from "../../composables/UseBorderProps";
import { paginationEmits } from "./Emits";
import SvgIcon from "@jamescoyle/vue-icon";
import { useMergeClasses } from "../../composables/useMergeClasses";
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

.flip-container {
  perspective: 1000px; 
  display: inline-block; 
  width: 100px; 
  max-width: 100px;
  height: 40px; 
  margin-right: -30px;
  margin-top: 7px;
  box-sizing: border-box; 
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