<script setup>


const tabs = [
  { label: 'demo', value: 1, content: '' },
  { label: 'slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''}


]
</script>


## Input 



<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >

<template #content1>

<div class=" py-10  rounded-lg shadow-inner flex justify-center items-center">
  
<Input label="name" LabelInputClass="" />

</div>

</template>

  <template #content2>

  ```md

<Input>
<template #label >
name
</template>
</Input>

```
  </template>
    <template #content3>

  ```md

<Input label="name" />


```
  </template>

</Tab>


## Modify 



<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >

<template #content1>

<div class=" py-10 rounded-lg  shadow-inner grid  grid-cols-2 gap-12 justify-items-center">
  
<Input variant="search" icon1="➥" icon2='🗙' placeholder='search' InputClass="rounded-full ring-2  "/>
<Input variant="search" icon1="👤 "  placeholder="password" InputClass="shadow-blue-200 shadow-inner" />
<Input  label="User name" InputClass="shadow-[1px_4px_2px_-2px_rgba(34,_197,_94,_0.5)] " LabelInputClass=' top-12 left-[84px] rounded-full  px-2  bg-transparent '/>
<Input label="Gmail"  LabelInputClass=' -top-[12px] left-[22px] rounded-full  px-2  bg-white  '  />


</div>

</template>

  <template #content2>

  ```md

<Input>
<template #label >
name
</template>
</Input>

```
  </template>
    <template #content3>

  ```md

<Input label="name" />


```
  </template>

</Tab>

