<!-- ui.vue -->
<script setup lang="ts">
import Core from './Core.vue';
import { ref } from 'vue';

const tabs = [
  { title: 'first Tab', value: 'first' },
  { title: 'second Tab', value: 'second' },
  { title: 'third Tab', value: 'third' },
];

const activeTab = ref('first');
</script>

<template>
  <Core :tabs="tabs" v-model:modelValue="activeTab">
    <template #default="{ tabs, activeTab, selectTab }">
      <!-- تب‌ها -->
      <div class="tab-titles flex space-x-4 border-b-2">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          :class="[
            'tab-title py-2 px-4 cursor-pointer',
            activeTab === tab.value ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'
          ]"
          @click="selectTab(tab.value)"
        >
          {{ tab.title }}
        </button>
      </div>

      <div class="tab-content mt-4">
        <template v-for="tab in tabs" :key="tab.value">
          <div v-if="activeTab === tab.value">
            <slot :name="tab.value">{{ tab.title }} Content</slot>
          </div>
        </template>
      </div>
    </template>
  </Core>
</template>

<style scoped>
.tab-title {
  transition: color 0.3s, border-color 0.3s;
}
.tab-title:hover {
  color: #4a90e2;
}
</style>
