<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';
import { TabProps } from './props';
import { TabEmits } from './Emits';

const props = defineProps(TabProps);
const emit = defineEmits(TabEmits);

const activeTab = ref(props.modelValue || props.tabs[0]?.value);

watch(() => props.modelValue, (newVal) => {
  activeTab.value = newVal;
})

function selectTab(value) {
  activeTab.value = value;
  emit('update:modelValue', value);
}
</script>

<template>
  <div>
    <div class="flex flex-row gap-4 w-fit p-2 border-b-2 border-gray-300">
      <div v-for="tab in props.tabs" :key="tab.value" class="relative">
        <button
          @click="selectTab(tab.value)"
          :class="{
            'text-blue-500': activeTab === tab.value,
            'text-gray-600': activeTab !== tab.value,
            'hover:bg-gray-200': activeTab !== tab.value,

            'border-b-2 border-blue-500': activeTab === tab.value,
            'bg-white': activeTab !== tab.value,
            'bg-blue-100': activeTab === tab.value,
            'rounded-full': true,
            'py-2 px-4': true,
            'transition-all duration-300 ease-in-out': true
          }"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div class="mt-4">
      <div v-for="tab in props.tabs" :key="tab.value" v-show="activeTab === tab.value" class="w-72">
        <transition name="fade" mode="out-in">
          <div :key="tab.value" class="p-6 rounded-2xl bg-white shadow-inner">
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
