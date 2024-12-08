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
<div class="grid grid-cols-2 gap-3 justify-items-center">

<Loader variant="spinner" />
<Loader variant="circle" />
</div>
</template>


  <template #content2>

  ```md
<Loader variant="spinner" />
<Loader variant="circle" />
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


## customize 

you can mix `spinner` and `circle` variants with colors  and use it 

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<div class="grid grid-cols-2 gap-8 justify-items-center">

<Loader variant="circle" color="primary" />
<Loader variant="circle"  color="error"/>
<Loader variant="spinner"  color="warning"/>
<Loader variant="spinner"  color="secondary"/>
</div>
</template>


  <template #content2>

  ```md
<Loader variant="circle" color="primary" />
<Loader variant="circle"  color="error"/>
<Loader variant="spinner"  color="warning"/>
<Loader variant="spinner"  color="secondary"/>
```
  </template>

</Tab>


## Loader Component Features

| **Feature**             | **Description**                                                                                                   | **Usage**                                                                                   |
|-------------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Default Loader**      | Basic example displaying a loader with default styling. This is the simplest usage, without any extra configuration. | Pass the `Loader` component without any additional props.                                  |
| **Size**                | Customize the size of the loader.                                                                                  | Set the `size` prop to one of `xl`, `lg`, `md`, or `sm`.                                    |
| **Variants**            | Different types of loader animations: spinner, circle, or dots.                                                   | Set the `variant` prop to `spinner`, `circle`, or `dots`.                                   |
| **Colors**              | Customize the color of the loader.                                                                                 | Set the `color` prop to one of `primary`, `warning`, `dark`, `default`, `secondary`, `error`, or `light`. |
| **Customize Variants**  | Mix different variants with colors for more customization.                                                        | Combine `variant` and `color` props for customized loaders.                                 |

