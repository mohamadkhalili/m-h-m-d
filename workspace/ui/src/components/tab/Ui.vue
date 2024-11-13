<script setup>
import { defineProps, ref, computed } from 'vue';
import { TabProps, variant } from './props';
import { useBgColorClassName, useColorClassName } from '../../composables/ColorComposable';

const props = defineProps(TabProps);
const activeTab = ref(props.modelValue || props.tabs[0]?.value);

const bgColorClass = useBgColorClassName(props);
const textColorClass = useColorClassName(props);

const getButtonStyleClass = computed(() => {
  switch (props.variant) {
    case 'underline':
      return 'relative border-transparent after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 bg-transparent';
    case 'bordered':
      return 'border-2 border-blue-500 rounded-md hover:scale-105 transition-transform duration-200';
    case 'Link':
      return 'text-blue-600 underline transition-opacity duration-200 ease-in-out hover:opacity-80';
    default:
      return 'rounded-b-3xl flex gap-4 w-fit border-b-[1px] p-2 border-gray-400 transition-transform duration-300 hover:scale-95';
  }
});


function selectTab(value) {
  activeTab.value = value;
  emit('update:modelValue', value);
}
</script>

<template>
  <div>
    <Core 
    :variant="props.variant"
      :is-disabled="props.isDisabled"
      :class="['rounded-b-3xl flex gap-4',
      getButtonStyleClass=='default' && 'border-b-[1px]'
  ]"
    >
      <div v-for="tab in props.tabs" :key="tab.value" class="relative">
        <button
          @click="selectTab(tab.value)"
          :class="[
            'py-2 px-4 transition-all duration-300 ease-in-out',
            getButtonStyleClass,
            activeTab === tab.value ? bgColorClass.active : bgColorClass.onActive,
            activeTab === tab.value ? textColorClass.active : textColorClass.onActive,
          ]"
        >
          {{ tab.label }}
        </button>
      </div>
    </Core>

    <div class="mt-4">
      <div v-for="tab in props.tabs" :key="tab.value" v-show="activeTab === tab.value" class="w-full">
        <transition name="fade" mode="out-in">
          <div v-if="tab.content !=null" :key="tab.value" class="p-6 rounded-md bg-transparent mb-2">
            {{ tab.content }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
