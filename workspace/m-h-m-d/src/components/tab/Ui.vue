<script setup>
import { ref, computed } from 'vue';
import { TabProps } from './props';
import { useBgColorClassName, useColorClassName } from '../../composables/ColorComposable';
import Core from './Core.vue';

const props = defineProps(TabProps);
const activeTab = ref(props.modelValue || props.tabs[0]?.value);
const emit = defineEmits(['update:modelValue']);
const bgColorClass = useBgColorClassName(props);
const textColorClass = useColorClassName(props);

const getButtonStyleClass = computed(() => {
  switch (props.variant) {
    case 'underline':
      return 'relative  after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-0 after:left-0  after:transition-transform after:duration-300 hover:after:scale-x-100 bg-transparent';
    case 'bordered':
      return ' border-blue-800 shadow-gray-400   shadow-inner transition-transform duration-200';
    case 'Link':
      return 'text-blue-600 underline transition-opacity duration-200 ease-in-out hover:opacity-80';
    default:
      return '';
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
      :class="'rounded-b-3xl flex'"
    >
      <div v-for="(tab, index) in props.tabs" :key="tab.value" class="relative">
        <button
          @click="selectTab(tab.value)"
          :class="[
            'py-2 px-4 transition-all hover:animate-pulse duration-300 ease-in-out border-x-8  ',
            getButtonStyleClass,
            activeTab === tab.value ? bgColorClass.active : bgColorClass.onActive,
            activeTab === tab.value ? textColorClass.active : textColorClass.onActive,
           props.variant ==='underline' && activeTab === tab.value ? 'after:scale-x-100' : 'after:scale-x-0' ,
            props.variant ==='default' && index === 0 ? 'rounded-l-full' : '',
            props.variant ==='default' && index === props.tabs.length - 1 ? 'rounded-r-full' : '',
            activeTab === tab.value ? '' : '',
          ]"
        >
          {{ tab.label }}
        </button>
      </div>
    </Core>

    <div class="mt-4">
      <div v-for="tab in props.tabs" :key="tab.value" v-show="activeTab === tab.value" class="w-full">
        <transition name="fade" mode="out-in">
          <div v-if="tab.content != null" :key="tab.value" class="p-6 rounded-lg bg-transparent shadow-inner">
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
