# footer
<script setup lang="ts">
import { ref } from 'vue'
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];
const footerEnable = ref(true);
</script>


## Default Footer

**Props:**
- `v-model`: Binds the footer open/close state.

**Usage:**
- This is the basic footer that opens when the button is clicked.

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<Footer>
<template #content>
  <div class="p-3 text-[11px]">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
  <div class="text-[13px]">
      {{ new Date().getFullYear() }} — <strong>m-h-m-d</strong>
  </div>
</template>
</Footer>
</template>

<template #content2>

```vue
<slot name="content"></slot>
```

</template>
<template #content3>

```vue
<Footer>
<template #content>
  <div class="p-3 text-[11px]">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
  <div class="text-[13px]">
      {{ new Date().getFullYear() }} — <strong>m-h-m-d</strong>
  </div>
</template>
</Footer>
```

</template>
</Tab>