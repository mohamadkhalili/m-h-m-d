
<script setup>
import { ref } from 'vue';
const activeTab = ref(0);
</script>


# Tab






<Tab :tabs="[{ label: 'Home' }, { label: 'About' }, { label: 'Contact' }]" v-model:modelValue="activeTab">
  <template #tab-0>
    <div>Home  Content</div>
  </template>
  <template #tab-1>
    <div>About Content</div>
  </template>
  <template #tab-2>
    <div>Contact Content</div>
  </template>
</Tab>


