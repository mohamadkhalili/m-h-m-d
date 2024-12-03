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

## Size

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="grid grid-cols-4 gap-3 justify-items-center">


<Loader color="default" size="xl" />
<Loader color="default" size="lg" />
<Loader color="default" size="md" />
<Loader color="default" size="sm" />







</div>
</template>


  <template #content2>

  ```md

<Loader color="default" size="xl" />
<Loader color="default" size="lg" />
<Loader color="default" size="md" />
<Loader color="default" size="sm" />


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

<div class="grid grid-cols-7 gap-3 justify-items-center">


<Loader color="default" />
<Loader color="secondary"/>
<Loader color="warning" />
<Loader color="error"/>
<Loader color="primary"/>
<Loader color="dark"/>
<Loader color="light"/>




</div>
</template>


  <template #content2>

  ```md

<Loader color="default" />
<Loader color="secondary"/>
<Loader color="warning" />
<Loader color="error"/>
<Loader color="primary"/>
<Loader color="dark"/>
<Loader color="light"/>



```
  </template>

</Tab>

## Variants

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<Loader variant="spinner" size="lg" />

<Loader variant="dots" size="lg" />

</template>


  <template #content2>

  ```md

<Loader color="default" />
<Loader color="secondary"/>
<Loader color="warning" />
<Loader color="error"/>
<Loader color="primary"/>
<Loader color="dark"/>
<Loader color="light"/>



```
  </template>

</Tab>