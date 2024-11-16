# menu
<script setup>
import { ref } from 'vue'
const menuValue = ref(false);
const menuValueTooltip = ref("");
const menuValueVertical = ref("");
const menuValueColor = ref("");
</script>

this is default menu component:

<button  @click="menuValue = !menuValue" class="w-28 bg-black text-white rounded-lg p-2 mt-1" cleaner>Open menu</button>
<Menu v-model="menuValue" :color="'bg-teal-900'" >
<template #menu><button class="ml-4 w-20 h-10 bg-teal-500 text-white rounded-lg p-2 mt-1" cleaner>item1</button></template>
</Menu>
<br>
<br>
<br>

```vue
<Menu v-model="menuValue">
```