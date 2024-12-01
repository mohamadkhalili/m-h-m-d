
## Using Core Component



  <Switch v-model="isActiveSm" activeColor="bg-blue-500" inactiveColor="bg-gray-300" size="sm"  variant="flat"/>
  <Switch v-model="isActiveMd" activeColor="bg-blue-500" inactiveColor="bg-gray-300" size="md"  variant="shadow"/>
  <Switch v-model="isActiveLg" activeColor="bg-blue-500" inactiveColor="bg-gray-300" size="lg"  variant="rounded"/>
  <Switch v-model="isActiveXl" activeColor="bg-blue-500" inactiveColor="bg-gray-300" size="xl"  variant="inside"/>


<script setup>
import { ref } from 'vue';
const isActiveSm = ref(false);
const isActiveMd = ref(false);
const isActiveLg = ref(false);
const isActiveXl = ref(false);
const isActive = ref(false);
</script>
