<script setup>
import { defineProps, computed, ref } from 'vue';
import { TabProps, TabColors } from './props';
import { useBgColorClassName, useColorClassName } from '../../composables/ColorComposable';
const props = defineProps(TabProps);
const activeTab = ref(props.modelValue || props.tabs[0]?.value);
const bgColorClass = useBgColorClassName(props);
const textColorClass = useColorClassName(props);
const getTabColor = (tabValue) => {
  const isActive = activeTab.value === tabValue; 
  if (isActive) {
    return TabColors[`active${capitalize(props.color)}`] || TabColors.activeDefault;
  } else {
 
    return TabColors[props.color] || TabColors.default;
  }
};
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function selectTab(value) {
  activeTab.value = value;
  emit('update:modelValue', value);
}
</script>

<template>
  <div>
    <Core 

      :is-disabled="props.isDisabled"
     
      class="flex flex-row gap-4 w-fit  border-b-[1px] p-2 border-gray-400 "
    >
      <div v-for="tab in props.tabs" :key="tab.value" class="relative">
        <button
    @click="selectTab(tab.value)"
    :class="[
          'py-2 px-4 transition-all duration-300 ease-in-out rounded-b-3xl   ',
          getTabColor(tab.value),
          activeTab==tab.value ? bgColorClass.active : bgColorClass.onActive,
          activeTab==tab.value ? textColorClass.active : textColorClass.onActive,
        ]"
  >
    {{ tab.label }}
  </button>
      </div>
    </Core>

    <div class="mt-4">
      <div v-for="tab in props.tabs" :key="tab.value" v-show="activeTab === tab.value" class="w-full">
        <transition name="fade" mode="out-in">
          <div :key="tab.value" class="p-6 rounded-md bg-transparent mb-2 ">
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
