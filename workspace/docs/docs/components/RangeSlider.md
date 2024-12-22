
<script setup>
import { ref } from 'vue';

const rangeValueLight = ref(20);
const rangeValueLight2 = ref(24);
const rangeValueLight3 = ref(60);
const rangeValueLight4 = ref(50);
const rangeValueLight5 = ref(34);




const tabs = [
  { label: 'demo', value: 1, content: '' },
  { label: 'props', value: 2, content: ''},


]
</script>




## Example:

### Light Theme



<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >

<template #content1>

<div class=" py-10  rounded-lg  flex flex-col justify-center items-center">
  
<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueLight"
  name="rangeSliderLight"
/>

<p>Selected Value: {{ rangeValueLight }}</p>

</div


</div>

</template>

  <template #content2>

  ```md

<RangeSlider
  :min="0"
  :max="100"
  v-model="ref"
  name="rangeSliderLight"
/>

```
  </template>
</Tab>

## Customize

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >

<template #content1>

<div class=" py-10  rounded-lg  gap-4 grid  grid-cols-2 justify-items-center">

  
<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueLight2"
  thumbColor="#FFFF"
  thumbBorderColor="#F21114"
  linkFieldColor="bg-rose-500"
/>
<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueLight3"
  thumbColor="#0cc0C4"
  thumbBorderColor="#fff"
  linkFieldColor="bg-cyan-500"
  baseColor='bg-gray-400'
/>
<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueLight4"
     thumbColor="#fc4"
  thumbBorderColor="#fcaE44"
  linkFieldColor="bg-yellow-500"
  baseColor='bg-gray-400'
/>
<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueLight5"
  thumbColor="#b4afff"
  thumbBorderColor="#bd26f0"
  linkFieldColor="bg-purple-500"
  baseColor='bg-purple-200'
/>

</div


</div>

</template>

  <template #content2>

  ```md

<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueLight5"
  thumbColor="#b4afff"
  thumbBorderColor="#bd26f0"
  linkFieldColor="bg-purple-500"
  baseColor='bg-purple-200'
/>

```
  </template>


</Tab>











