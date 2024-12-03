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
const size1 = ref(true);
const size2 = ref(true);
const size3 = ref(true);
const Radius1 = ref(true);
const LineRef = ref(false);




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

 you can add your label with default slot !

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
 you can disable your checkbox with `isDisabled` option 
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
<CheckBox  v-model="ColorActive4" color="bg-red-500 text-white border-red-500" > red </CheckBox>
<CheckBox  v-model="ColorActive5" color="bg-purple-500 text-white border-purple-500" > purple </CheckBox>
<CheckBox  v-model="ColorActive3" color="bg-gray-800 border-rose-500 text-yellow-400 border-2 " > custom </CheckBox>

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
<CheckBox  v-model="ColorActive4" color="bg-red-500 text-white border-red-500" > red </CheckBox>
<CheckBox  v-model="ColorActive5" color="bg-purple-500 text-white border-purple-500" > purple </CheckBox>
<CheckBox  v-model="ColorActive3" color="bg-gray-800 border-rose-500 text-yellow-400 border-2 " > custom </CheckBox>

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

<CheckBox  v-model="size1" size="sm"  > small </CheckBox>
<CheckBox  v-model="size2" size="md"  > medium </CheckBox>
<CheckBox  v-model="size3" size="lg" > large </CheckBox>

</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const size1 = ref(true);
const size2 = ref(true);
const size3 = ref(true);
</script>

<CheckBox  v-model="size1" size="sm"  > small </CheckBox>
<CheckBox  v-model="size2" size="md"  > medium </CheckBox>
<CheckBox  v-model="size3" size="lg" > large </CheckBox>
```
  </template>


</Tab>


## Radius

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="  p-6 rounded-lg   flex flex-row gap-8 justify-center place-items-center ">

<CheckBox  v-model="Radius1" radius="none"  >none </CheckBox>
<CheckBox  v-model="Radius1" radius="sm"  >small  </CheckBox>
<CheckBox  v-model="Radius1" radius="md" >medium </CheckBox>
<CheckBox  v-model="Radius1" radius="lg" >large </CheckBox>
<CheckBox  v-model="Radius1" radius="full">full  </CheckBox>


</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const Radius1 = ref(true);


</script>

<CheckBox  v-model="Radius1" radius="none"  >none </CheckBox>
<CheckBox  v-model="Radius1" radius="sm"  >small  </CheckBox>
<CheckBox  v-model="Radius1" radius="md" >medium </CheckBox>
<CheckBox  v-model="Radius1" radius="lg" >large </CheckBox>
<CheckBox  v-model="Radius1" radius="full">full  </CheckBox>


```
  </template>


</Tab>

## Line Through

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="  p-6 rounded-lg   flex flex-row gap-8 justify-center place-items-center ">

<CheckBox  v-model="LineRef" lineThrough  >option </CheckBox>

</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const LineRef = ref(false);

</script>

<CheckBox  v-model="LineRef" lineThrough  >option </CheckBox>



```
  </template>


</Tab>


## Control

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="  p-6 rounded-lg   flex flex-col gap-4 justify-center place-items-center ">

<CheckBox  v-model="LineRef" lineThrough  >option </CheckBox> <br/>
<label>control : {{LineRef}}</label>


</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const LineRef = ref(false);

</script>

<CheckBox  v-model="LineRef" lineThrough  >option </CheckBox>


```
  </template>


</Tab>



## CheckBox Component Features

| **Feature**           | **Description**                                                                                     | **Usage**                                                                                     |
|-----------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Default CheckBox**   | A basic checkbox with default styling.                                                              | Use without additional props for a basic checkbox. Example: `<CheckBox />`                    |
| **Colors**             | Customize the checkbox colors with options.                                                        | Use the `color` prop to customize the checkbox color. Example: `<CheckBox color="bg-blue-500" />` |
| **Disable**            | Disable interaction to make the checkbox inactive.                                                  | Use the `isDisabled` prop to disable the checkbox. Example: `<CheckBox isDisabled />`          |                                                 
| **Label**              | Add custom label text for the checkbox.                                                             | Use the default slot to provide custom label text. Example: `<CheckBox>Accept Terms</CheckBox>`  |
| **Size**               | Adjust the size of the checkbox with `sm`, `md`, `lg`, or `xl` options.                             | Use the `size` prop to change the size. Example: `<CheckBox size="lg" />`                      |
| **Radius**               | Adjust the radius of the checkbox with `sm`, `md`, `lg`,  `full` or `none` options.                             | Use the `radius` prop to change the size. Example: `<CheckBox radius="lg" />`                      |
| **Event Handling**     | Trigger actions when the checkbox state changes.                                                   | Use `@change` event listener to capture checkbox state changes. Example: `<CheckBox @change="handleChange" />` |
| **Line Through**       | Apply a line-through style to the label when the checkbox is checked.                               | Use the `lineThrough` prop to apply a line-through effect. Example: `<CheckBox lineThrough />`  |
