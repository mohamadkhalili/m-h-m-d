<template>
  <div
    class="pagination-container"
    :style="rtl ? 'direction: rtl;' : 'direction: ltr;'"
  >
    <div class="pagination-controls">
      <pagination
        :modelValue="modelValue"
        @update:modelValue="handlePageChange"
        :searchPage="searchPage"
        @update:searchPage="handleSearchPage"
        v-bind="$attrs"
      >
        <template #superPrev="{ disabled }">
          <slot name="superPrev" :disabled="disabled" :rtl="rtl"></slot>
          <button
            v-if="showDefaultSuperPrev"
            :class="[
              roundedClass,
              sizeClass,
              textColorClass.active,
              bgColorClass.active,
            ]"
            :disabled="disabled"
          >
            <svg-icon type="mdi" :path="superPrevIcon"></svg-icon>
          </button>
        </template>
        <template #prev="{ disabled }">
          <slot name="prev" :disabled="disabled" :rtl="rtl"></slot>
          <button
            v-if="showDefaultPrev"
            :class="[
              roundedClass,
              sizeClass,
              textColorClass.active,
              bgColorClass.active,
            ]"
            :disabled="disabled"
          >
            <svg-icon type="mdi" :path="prevIcon"></svg-icon>
          </button>
        </template>
        <template #default="{ isCurrentPage, isActive, page }">
          <slot
            name="default"
            :isCurrentPage="isCurrentPage"
            :isActive="isActive"
            :page="page"
          ></slot>
          <div
            v-if="isCurrentPage && showDefaultPagination"
            class="cursor-pointer elevation-1"
            :class="[
              isActive ? 'currentPageNumber' : 'pageNumber',
              roundedClass,
              sizeClass,
              isActive ? bgColorClass.active : bgColorClass.onActive,
              isActive ? textColorClass.active : textColorClass.onActive,
              borderClass,
            ]"
          >
            {{ page }}
          </div>
          <span
            v-if="page === -1 && showDefaultPagination"
            class="dot mx-2"
            :class="textColorClass.onActive"
            >...</span
          >
        </template>
        <template #next="{ disabled }">
          <slot name="next" :disabled="disabled" :rtl="rtl"></slot>
          <button
            v-if="showDefaultNext"
            :class="[
              roundedClass,
              sizeClass,
              textColorClass.active,
              bgColorClass.active,
            ]"
            :disabled="disabled"
          >
            <svg-icon type="mdi" :path="nextIcon"></svg-icon>
          </button>
        </template>
        <template #superNext="{ disabled }">
          <slot name="superNext" :disabled="disabled" :rtl="rtl"></slot>
          <button
            v-if="showDefaultSuperNext"
            :class="[
              roundedClass,
              sizeClass,
              textColorClass.active,
              bgColorClass.active,
            ]"
            :disabled="disabled"
          >
            <svg-icon type="mdi" :path="superNextIcon"></svg-icon>
          </button>
        </template>
        <template #searchPageInput="{ enabled }">
          <slot name="searchPageInput" :enabled="enabled"></slot>
          <input
            v-if="showDefaultsearchPageInput && enabled"
            :value="searchPage"
            @input="handleInput"
            class="searchPage"
            :class="[
              roundedClass,
              sizeClass,
              textColorClass.onActive,
              bgColorClass.onActive,
              borderClass,
            ]"
          />
        </template>
        <template #searchPageBtn="{ enabled }">
          <slot name="searchPageBtn" :enabled="enabled"></slot>
          <button
            v-if="showDefaultsearchPageBtn && enabled"
            :class="[
              roundedClass,
              sizeClass,
              textColorClass.active,
              bgColorClass.active,
              borderClass,
            ]"
          >
            <svg-icon type="mdi" :path="mdiMagnify"></svg-icon>
          </button>
        </template>
      </pagination>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import {
  computed,
  defineProps,
  useSlots,
  defineEmits,
  defineOptions,
  onMounted,
  defineSlots,
} from "vue";
import pagination from "./Core.vue";
import {
  useColorClassName,
  useBgColorClassName,
} from "../../composables/ColorComposable";
import { useSize } from "../../composables/UseSizeProps";
import { useRounded } from "../../composables/UseRoundedProps";
import { uiSlots } from "./Slots";
import { uiProps } from "./Props";
import { useBorder } from "../../composables/UseBorderProps";
import { paginationEmits } from "./Emits";
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiChevronDoubleRight,
  mdiChevronDoubleLeft,
  mdiChevronRight,
  mdiChevronLeft,
  mdiMagnify,
} from "@mdi/js";

const props = defineProps(uiProps);
const sizeClass = useSize(props);
const roundedClass = useRounded(props);
const textColorClass = useColorClassName(props);
const bgColorClass = useBgColorClassName(props);
const borderClass = useBorder(props);

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

const handlePageChange = (newValue: number) => {
  emit("update:modelValue", newValue);
};

const handleSearchPage = (newValue: number) => {
  emit("update:searchPage", newValue);
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target) {
    const value = target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue && Number(numericValue) >= 0) {
      emit("update:searchPage", Number(numericValue));
    }
    target.value = numericValue;
  }
};
</script>

<style scoped>
.searchPage {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}
.pagination-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.pageNumber {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.currentPageNumber {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.dot {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
  