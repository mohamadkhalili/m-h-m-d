# Navbar

<script setup lang="ts">
import { ref } from 'vue'
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''}
];
const footerEnable = ref(true);
</script>

## Usage
- This is the basic footer that opens when the button is clicked.

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">

<Card cardClass="flex items-center justify-between  w-full bg-white shadow-md">
<template #description >
    <div class="flex items-center w-full justify-around space-x-16 ">
<div class="mr-4">
<h5>MHMD</h5>
</div>
    <div class="flex gap-4 text-sm">
    <label>Home</label>
    <label>Product</label>
    <label>About</label>
    </div>
    <div class="scale-90">
    <Input  prefix="➥" suffix='🗙' placeholder='search' InputClass="rounded-full bg-black  w-44  h-10  "/>
    </div>
 </div>


</template>

  </Card>
</div>

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

