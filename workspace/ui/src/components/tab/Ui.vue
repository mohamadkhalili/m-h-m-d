<script setup lang="ts">
import { ref } from 'vue';

const tabs = ref(['Home', 'About', 'Contact']);
const activeTab = ref(tabs.value[0]);

function selectTab(tab: string) {
  activeTab.value = tab;
}
</script>

<template>
  <div class="flex space-x-4 border-b border-gray-300">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="selectTab(tab)"
      :class="[
        'py-2 px-4 focus:outline-none',
        activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 hover:text-gray-700'
      ]"
    >
      {{ tab }}
    </button>
  </div>

  <div class="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
    <p v-if="activeTab === 'Home'">This is the Home tab content.  </p>
    <p v-else-if="activeTab === 'About'">This is the About tab content.</p>
    <p v-else>This is the Contact tab content.</p>
  </div>
</template>

<style scoped>

</style>
