<script setup>


const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Props', value: 2, content: ''}

]
</script>




# Loader

Loader express an unspecified wait time or display the length of a process.
<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="  p-6 rounded-lg   flex justify-center items-center flex-col gap-4 ">

<Loader />

</div>
</template>


  <template #content2>

  ```md

<Loader />

```
  </template>

</Tab>




## Colors

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="grid grid-cols-8 gap-3 justify-items-center">


<Loader color="primary" />
<Loader color="secondary"/>
<Loader color="warning" />
<Loader color="default"/>
<Loader color="error"/>
<Loader color="warning"/>
<Loader color="dark"/>
<Loader color="light"/>




</div>
</template>


  <template #content2>

  ```md

<Loader />

```
  </template>

</Tab>