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

<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
  
<Input label="name" />
<!-- <template #label >
name
</template> -->
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