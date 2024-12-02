<script setup>
import { ref } from 'vue';
const isActive = ref(true);
const labelActive = ref(false);
const labelActive2 = ref(false);
const labelActive3 = ref(false);
const ColorActive1 = ref(true);
const ColorActive2 = ref(true);
const ColorActive3 = ref(true);
const ColorActive4 = ref(true);
const ColorActive5 = ref(true);
const disable1 = ref(true);
const disable2 = ref(false);
const insideActive = ref(false);



const tabs = [
    { label: 'UI', value: 1, content: '' },
  { label: 'Props', value: 2, content: ''}

];
</script>

 ## CheckBox

 this is default CheckBox with Basic color
<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="  p-6 rounded-lg   flex justify-center items-center ">
<CheckBox  v-model="isActive"  />
</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const isActive = ref(false);
</script>

<CheckBox  v-model="isActive"  />

```
  </template>


</Tab>

## Label


<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="  p-6 rounded-lg   flex flex-col gap-4 justify-center place-items-center ">
<CheckBox  v-model="labelActive" class="ml-2"> Remote </CheckBox>
<CheckBox  v-model="labelActive2" > hybrid </CheckBox>
<CheckBox  v-model="labelActive3" > onsite </CheckBox>

</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const labelActive = ref(false);
const labelActive2 = ref(false);
const labelActive3 = ref(false);
</script>

<div class="  p-6 rounded-lg   flex flex-col gap-4 justify-center place-items-center ">
<CheckBox  v-model="labelActive"> Remote </CheckBox>
<CheckBox  v-model="labelActive2" > hybrid </CheckBox>
<CheckBox  v-model="labelActive3" > onsite </CheckBox>

</div>
```
  </template>


</Tab>

## Disable

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="  p-6 rounded-lg   flex flex-row gap-4 justify-center place-items-center ">
<CheckBox  v-model="disable1" isDisabled > Option </CheckBox>
<CheckBox  v-model="disable2" isDisabled > Option </CheckBox>

</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const disable1 = ref(true);
const disable2 = ref(false);
</script>

<CheckBox  v-model="disable1" isDisabled > Option </CheckBox>
<CheckBox  v-model="disable2" isDisabled > Option </CheckBox>

```
  </template>


</Tab>

## Color

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="  p-6 rounded-lg   flex flex-row gap-8 justify-center place-items-center ">

<CheckBox  v-model="ColorActive1" color="bg-green-500 text-white border-green-500" > Green </CheckBox>
<CheckBox  v-model="ColorActive2" color="bg-yellow-400 text-white border-yellow-400" > Yellow </CheckBox>
<CheckBox  v-model="ColorActive3" color="bg-pink-500 text-white border-pink-500" > pink </CheckBox>
<CheckBox  v-model="ColorActive4" color="bg-red-500 text-white border-red-500" > red </CheckBox>
<CheckBox  v-model="ColorActive5" color="bg-purple-500 text-white border-purple-500" > purple </CheckBox>

</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const ColorActive1 = ref(true);
const ColorActive2 = ref(true);
const ColorActive3 = ref(true);
const ColorActive4 = ref(true);
const ColorActive5 = ref(true);
</script>

<CheckBox  v-model="ColorActive1" color="bg-green-500 text-white border-green-500" > Green </CheckBox>
<CheckBox  v-model="ColorActive2" color="bg-yellow-400 text-white border-yellow-400" > Yellow </CheckBox>
<CheckBox  v-model="ColorActive3" color="bg-pink-500 text-white border-pink-500" > pink </CheckBox>
<CheckBox  v-model="ColorActive4" color="bg-red-500 text-white border-red-500" > red </CheckBox>
<CheckBox  v-model="ColorActive5" color="bg-purple-500 text-white border-purple-500" > purple </CheckBox>

```
  </template>


</Tab>

## Size

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="  p-6 rounded-lg   flex flex-row gap-8 justify-center place-items-center ">

<CheckBox  v-model="ColorActive1" size="sm"  > small </CheckBox>
<CheckBox  v-model="ColorActive2" size="md"  > medium </CheckBox>
<CheckBox  v-model="ColorActive3" size="lg" > large
 </CheckBox>

</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const ColorActive1 = ref(true);
const ColorActive2 = ref(true);
const ColorActive3 = ref(true);
const ColorActive4 = ref(true);
const ColorActive5 = ref(true);
</script>

<CheckBox  v-model="ColorActive1" color="bg-green-500 text-white border-green-500" > Green </CheckBox>
<CheckBox  v-model="ColorActive2" color="bg-yellow-400 text-white border-yellow-400" > Yellow </CheckBox>
<CheckBox  v-model="ColorActive3" color="bg-pink-500 text-white border-pink-500" > pink </CheckBox>
<CheckBox  v-model="ColorActive4" color="bg-red-500 text-white border-red-500" > red </CheckBox>
<CheckBox  v-model="ColorActive5" color="bg-purple-500 text-white border-purple-500" > purple </CheckBox>

```
  </template>


</Tab>