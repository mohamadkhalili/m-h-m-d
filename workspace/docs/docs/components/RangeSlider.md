
<script setup>
import { ref } from 'vue';

const rangeValueLight = ref(20);
const rangeValueLight2 = ref(24);
const rangeValueLight3 = ref(60);
const rangeValueLight4 = ref(50);
const rangeValueLight5 = ref(34);
const rangeValueLight6 = ref(10);
const rangeValueLight7 = ref(5);
const rangeValueLight8 = ref(95);
const rangeValueLight9 = ref(85);





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
/>
<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueLight4"
     thumbColor="#fc4"
  thumbBorderColor="#fcaE44"
  linkFieldColor="bg-yellow-500"
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




## Step

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
  min="0"
  max="100"
  v-model="rangeValueLight6"
  thumbColor="#FFFF"
  thumbBorderColor="#F21114"
  linkFieldColor="bg-rose-500"
  step="10"
/>
<p> with 10 step => {{rangeValueLight6}}</p>
<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueLight7"
  step="5"
/>
<p> with 5 step => {{rangeValueLight7}}</p>



</div


</div>

</template>

  <template #content2>

  ```md

<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueLight7"
  step="5"
/>
/>

```
  </template>


</Tab>


## Variant

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
  min="0"
  max="100"
  v-model="rangeValueLight8"
  thumbColor="#FFFF"
  thumbBorderColor="#000"
  linkFieldColor="bg-green-400"
  variant='inside'
/>
<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueLight9"
/>



</div


</div>

</template>

  <template #content2>

  ```md

<RangeSlider
  min="0"
  max="100"
  v-model="rangeValueLight8"
  thumbColor="#FFFF"
  thumbBorderColor="#000"
  linkFieldColor="bg-green-400"
  variant='inside'
/>


```
  </template>


</Tab>








