# footer
<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram } from '@mdi/js';
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'code', value: 2, content: ''},
];
const icons = [
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiInstagram
]
const footerEnable = ref(true);
</script>


## Example Footer

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<Card cardClass="bg-sky-200 text-black text-center rounded-none">
<template #description>
  <div class="p-3 text-[11px]">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
      <div class="text-[13px]">
      {{ new Date().getFullYear() }} — <strong>M-H-M-D</strong>
    </div>
</template>
</Card>
</template>

<template #content2>

```vue
<Card cardClass="bg-sky-200 text-black text-center rounded-none">
<template #description>
  <div class="p-3 text-[11px]">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
      <div class="text-[13px]">
      {{ new Date().getFullYear() }} — <strong>M-H-M-D</strong>
    </div>
</template>
</Card>
```

</template>
</Tab>


## Example Footer 2

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<Card cardClass="bg-green-300 text-black text-center rounded-none">
<template #header>
    <div class="mt-4 flex justify-center">
      <Button
        v-for="(icon, index) in icons"
        :key="index"
        buttonClass="mr-4 bg-green-300 w-10 h-10 rounded-full flex items-center justify-center "
      >
        <SvgIcon type="mdi" :path="icon" class="text-black hover:scale-150 transition-all duration-300"/>
      </Button>
    </div>
</template>
<template #description>
  <div class="text-[11px]">
      Enhance your experience with our user-friendly interface, designed to deliver seamless navigation and easy access to essential features. Stay connected and manage everything effortlessly.
  </div>
      <div class="m-2 text-[13px]">
      {{ new Date().getFullYear() }} — <strong>M-H-M-D</strong>
    </div>
</template>
</Card>
</template>

<template #content2>

```vue
<Card cardClass="bg-green-300 text-black text-center rounded-none">
<template #header>
    <div class="mt-4 flex justify-center">
      <Button
        v-for="(icon, index) in icons"
        :key="index"
        buttonClass="mr-4 bg-green-300 w-10 h-10 rounded-full 
        flex items-center justify-center"
      >
        <SvgIcon type="mdi" :path="icon"/>
      </Button>
    </div>
</template>
<template #description>
  <div class="text-[11px]">
      Enhance your experience with our user-friendly interface, designed to deliver seamless navigation and easy access to essential features. Stay connected and manage everything effortlessly.
  </div>
      <div class="m-2 text-[13px]">
      {{ new Date().getFullYear() }} — <strong>M-H-M-D</strong>
    </div>
</template>
</Card>
```

</template>
</Tab>