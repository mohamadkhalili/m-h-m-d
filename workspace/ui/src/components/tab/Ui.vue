<!-- ui.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import Core from './Core.vue';

const tabs = [
  { label: 'Item One', value: 'one', content: 'This is custom content for Item One tab.' },
  { label: 'Item Two', value: 'two', content: 'Custom content for Item Two tab.' },
  { label: 'Item Three', value: 'three', content: 'Content for Item Three tab.' },
];

const activeTab = ref('one');
</script>

<template>
  <Core :tabs="tabs" v-model:modelValue="activeTab">
    <template #default="{ tabs, activeTab, selectTab }">
      <div class="tab-titles flex space-x-4 border-b-[1px]">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          :class="[
            'tab-title py-2 px-4 cursor-pointer',
            activeTab === tab.value ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'
          ]"
          @click="selectTab(tab.value)"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="tab-content mt-4">
        <div v-for="tab in tabs" :key="tab.value" v-if="activeTab === tab.value">
          <Tab :color="tab.color" :variant="tab.variant">{{ tab.content }}</Tab>
        </div>
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
