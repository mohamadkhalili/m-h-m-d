# menu
<script setup>
import { ref } from 'vue'
const menuValue = ref(false);
const menuValueColor = ref(false);
const menuValueSize = ref(false);
</script>

this is default menu component:

<button  @click="menuValue = !menuValue" class="w-28 bg-black text-white rounded-lg p-2 mt-1" cleaner>Open menu</button>
<Menu v-model="menuValue"  >
</Menu>
<br>

```vue
<Menu v-model="menuValue">
```

this is menu component with set color:

<button  @click="menuValueColor = !menuValueColor" class="w-28 bg-black text-white rounded-lg p-2 mt-1" cleaner>Open menu</button>
<Menu v-model="menuValueColor" :color="'bg-teal-900'" >
</Menu>
<br>

```vue
<Menu v-model="menuValueColor" :color="'bg-teal-900'" >
```

this is menu component with set size and create button in menu:

<button  @click="menuValueSize = !menuValueSize" class="w-28 bg-black text-white rounded-lg p-2 mt-1" cleaner>Open menu</button>
<Menu v-model="menuValueSize" :color="'bg-teal-900'" :size="'w-28 h-20'" >
<template #menu><button class="ml-4 size-9 text-xs bg-teal-500 text-white rounded-lg mt-1" cleaner>item1</button></template>
</Menu>
<br>
<br>
<br>

```vue
<Menu v-model="menuValueSize" :color="'bg-teal-900'" :size="'w-28 h-20'" >
<template #menu><button class="ml-4 size-9 text-xs bg-teal-500 text-white rounded-lg mt-1" 
cleaner>item1</button></template>
```