
<script setup>
import { ref } from 'vue';
import Tab from '../../../ui/src/components/tab/Ui.vue';

const tabs = [
  { label: 'Tab 1', value: 'one', content: 'Content of tab 1' },
  { label: 'Tab 2', value: 'two', content: 'Content of tab 2' },
  { label: 'Tab 3', value: 'three', content: 'Content of tab 3' },
  { label: 'Tab 4', value: '4', content: 'Content of tab 4' }
];
const activeTab = ref('one');
</script>



  <Tab :tabs="tabs" />




