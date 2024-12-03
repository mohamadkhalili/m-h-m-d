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

</br>


## Size
</br>

you can select your size with `size` property
</br>

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

we have 7 Main color for Loader  you can see in below with `color` property!

- primary   
- warning
 - dark 
  - default
- secondary 
- error  
- light
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

another variant for loader in MHMD library !

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<div class="grid grid-cols-3 gap-3 justify-items-center">

<Loader variant="spinner" />
<Loader variant="circle" />
<Loader variant="dots" />
</div>
</template>


  <template #content2>

  ```md

<Loader variant="spinner" />
<Loader variant="circle" />
<Loader variant="dots" />



```
  </template>

</Tab>