# Combo Box
<script setup lang="ts">
import { ref } from 'vue'
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];
const modelValue = ref<string[]>([]);
const items = ['all', 'one', 'two'];
</script>


## Default Combo Box

**Props:**
- `v-model`: Binds the alert open/close state.

**Usage:**
- This is the basic alert that opens when the button is clicked.

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<ComboBox v-model="modelValue" :items="items" multiple/>
<p> {{modelValue}}</p>
<br>
<br>
<br>
<br>
<br>
<br>

</template>

<template #content2>

```vue
<slot name="alert"></slot>
<slot name="icon"></slot>
<slot name="title"></slot>
<slot name="text"></slot>
```

</template>
<template #content3>

```vue
<Alert v-model="alertEnable"/>
```

</template>
</Tab>