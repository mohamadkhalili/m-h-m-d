<template>
  <Core
    :modelValue="modelValue"
    :items="items"
    :multiple="multiple"
    :enableChip="enableChip"
    @update:modelValue="handleModelValueChange"
    v-bind="$attrs"
  >
    <template #input>
      <slot name="input"></slot>
      <div
        v-if="showInput"
        :class="
          adapterClass(comboboxClasses.container + ' ' + containerClass).value
        "
      >
        <div
          v-if="multiple && enableChip"
          :class="
            adapterClass(
              comboboxClasses.chipContainer + ' ' + chipContainerClass
            ).value
          "
        >
          <span
            v-for="(item, index) in modelValue"
            :key="index"
            :class="adapterClass(comboboxClasses.chip + ' ' + chipClass).value"
            @click.stop="removeItem(item)"
          >
            {{ item }}
            <span
              :class="
                adapterClass(comboboxClasses.chipClose + ' ' + chipCloseClass)
                  .value
              "
              >×</span
            >
          </span>
        </div>
        <input
          :value="enableChip ? '' : modelValue"
          :placeholder="label"
          :class="adapterClass(comboboxClasses.input + ' ' + inputClass).value"
          @input="onInputChange"
          @focus="onFocus"
          @blur="onBlur"
        />
      </div>
    </template>
    <template #item="{ isActive, item }">
      <slot name="item" :isActive="isActive" :item="item"></slot>
      <div
        v-if="isDropdownOpen && showItem"
        :class="[
          adapterClass(comboboxClasses.dropdownItem + ' ' + dropdownItemClass)
            .value,
          isActive
            ? adapterClass(
                comboboxClasses.dropdownItemActive +
                  ' ' +
                  dropdownItemActiveClass
              ).value
            : '',
        ]"
      >
        {{ item }}
      </div>
    </template>
  </Core>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from "vue";
import { uiSlots } from "./Slots";
import Core from "./Core.vue";
import { uiProps } from "./Props";
import { comboboxClasses } from "../../styles/ComboboxClasses";
import { useAdapterClass } from "../../composables/UseClass";
const adapterClass = useAdapterClass();

const props = defineProps(uiProps);
const emit = defineEmits(["update:modelValue"]);
const uiSlots = defineSlots<uiSlots>();
const slots = useSlots();
const showInput = computed(() => !slots.input);
const showItem = computed(() => !slots.item);
const isDropdownOpen = ref(false);

const onInputChange = () => {
  isDropdownOpen.value = true;
};

const onBlur = () => {
  setTimeout(() => {
    isDropdownOpen.value = false;
  }, 100);
};

const onFocus = () => {
  setTimeout(() => {
    isDropdownOpen.value = true;
  }, 100);
};

const removeItem = (item: string) => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    const updatedValue = props.modelValue.filter(
      (selected) => selected !== item
    );
    emit("update:modelValue", updatedValue);
  }
};
const handleModelValueChange = (newValue: string) => {
  emit("update:modelValue", newValue);
};
</script>

<style scoped>
</style>
