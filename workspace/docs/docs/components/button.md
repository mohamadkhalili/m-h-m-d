## Button

<script >

</script>



<div class="  p-6 rounded-lg shadow-inner  flex justify-center items-center ">
    <Button color="default">Button test </Button>
</div>

## Modify 

the color as you like or use the default values!
<Br/>

<div class="grid grid-cols-2 gap-4">
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Button color="default"  cleaner>Default</Button>
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Button color="primary" >Primary</Button>
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Button color="error"> Error !!</Button>
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Button color="warning">Warning</Button>
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Button color="secondary">Second</Button>
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Button color="dark">Gradient</Button>
    </div>
</div>
<Br/>
<Br/>




**Code**

```md
<Button color="default">   Default</Button>
<Button color="primary">   Primary</Button>
<Button color="error">     Error !!</Button>
<Button color="warning">   Warning</Button>
<Button color="secondary"> Second</Button>
<Button color="dark">  Gradient</Button>


```
<br/>



The main `<Button>` tag can be call and using Button

```md
<template>

<Button color="error" @click="handleError">notification</Button>

<script >
const handleError = () => {
    alert("test");
}
</script>
```
Results

<div class='  p-4 rounded-lg shadow-inner  flex justify-center items-center'>
  <Button color="error" @click="handleError"> Error!</Button>
</div>

<script setup>
const handleError = () => {
  alert("Test notification triggered!");
}
</script>

-----------------
## Disable

You Can use   *isDisable*  for disable your Button
<div class='  p-4 rounded-lg shadow-inner  flex justify-center items-center'>

<Button  isDisabled>Disabled </Button>


</div>

```md
<Button  isDisabled >Disabled </Button>
```
---



## Variants

<div class="grid grid-cols-2 gap-4">
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
<Button  variant='faded' > faded  </Button>
 </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
<Button  variant='link' > linked  </Button>

</div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
  <Button variant='bordered' > border</Button>


</div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
<Button  variant='light' > lighten  </Button>
 </div>
     <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
     <Button  variant='shadow' > shadow  </Button>

</div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
       <Button  variant='ghost' > ghosts  </Button>

 </div>

</div>



```md

<Button  variant='faded' > faded  </Button>
<Button  variant='link' > linked  </Button> 
<Button variant='bordered' >border </Button>
<Button  variant='light' > lighten  </Button>
<Button  variant='ghost' > ghosts   </Button>
<Button  variant='shadow' > shadow  </Button>

```


-----------------
<br/>

## CleanerEffect

<br/>

You Can use   *CleanerEffect*  for enable  cleaner effect on Button !
<div class='  p-4 rounded-lg shadow-inner  flex justify-center items-center'>

<Button  color="secondary" CleanerEffect  >Cleaner </Button>


</div>

```md
<Button  color="secondary" CleanerEffect > Cleaner </Button>

```
---





**Also You can Use with Icons**
<div class='  p-4 rounded-lg shadow-inner   justify-center items-center flex flex-row'>
    <Button color="secondary" class="rounded-xl">
        <span>on it !</span>
        <div class="scale-75">
        <svg class="animate-spin" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.71 0C8.24 3.9 6.92 6 6.64 9.14c-.01-.01-.03-.01-.04-.02-1.28-.73-2.3-2.22-2.91-3.73l-2.23.87c1.64 4.95 2.81 7.13 5.39 8.94-.02.01-.03.02-.05.03-1.27.74-3.07.89-4.68.66l-.36 2.37c5.11 1.06 7.59 1.15 10.46-.19v.06c0 1.47-.77 3.09-1.78 4.38L12.3 24c3.46-3.89 4.78-5.99 5.06-9.13.02.01.03.01.05.02 1.27.73 2.29 2.21 2.9 3.73l2.23-.87c-1.64-4.95-2.8-7.14-5.39-8.95.02-.01.03-.02.05-.03 1.27-.74 3.07-.88 4.68-.65l.36-2.38c-5.1-1.06-7.58-1.14-10.44.19v-.06c0-1.47.77-3.09 1.78-4.38L11.71 0zm.19 8.82a3.181 3.181 0 0 1 3.28 3.07 3.181 3.181 0 0 1-3.07 3.28 3.181 3.181 0 0 1-3.28-3.07 3.181 3.181 0 0 1 3.07-3.28z"/>
</svg>
</div>
</Button>
</div>

<br/>

 ## Rounded 

<br/>

 you can change your border radios  with *round* option

<div class='  p-4 rounded-lg shadow-inner   justify-around items-center flex flex-row'>
<Button round="sm" variant="bordered">small</Button>
<Button round="md" variant="bordered">medium</Button>
<Button round="lg" variant="bordered">large</Button>
<Button round="full" variant="bordered">full</Button>


</div>


**Code**

```md
<Button round="sm">small</Button>
<Button round="md">medium</Button>
<Button round="lg">large</Button>
<Button round="full">full</Button>

```
<br/>


## Size 

<br/>

 you can change your border radios  with *size* option
 
<div class='  p-4 rounded-lg shadow-inner   justify-around items-center flex flex-row'>
<Button size="xs" variant="shadow">xs</Button>
<Button size="sm" variant="shadow">sm</Button>
<Button size="md" variant="shadow">md</Button>
<Button size="lg" variant="shadow">large</Button>
<Button size="xl" variant="shadow">xl</Button>


</div>


**Code**

```md
<Button size="xs" variant="shadow">xs</Button>
<Button size="sm" variant="shadow">sm</Button>
<Button size="md" variant="shadow">md</Button>
<Button size="lg" variant="shadow">large</Button>
<Button size="xl" variant="shadow">xl</Button>

```
<br/>

## Button Component Features

| **Feature**           | **Description**                                                                                   | **Usage**                                                                                     |
|-----------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Default Button**     | A basic button with default styling for minimal designs.                                         | Use without additional props to apply the default look. Example: `<Button color="default" />` |
| **Custom Colors**      | Customize button colors with options like `default`, `primary`, `error`, `warning`, `secondary`, and `dark`. | Set the `color` prop to change the button's appearance. Example: `<Button color="primary" />` |
| **Disable**            | Disable interaction to make the button inactive.                                                 | Use the `isDisabled` prop to disable the button. Example: `<Button isDisabled />`            |
| **Variants**           | Style the button with options like `faded`, `link`, `bordered`, `light`, `ghost`, or `shadow`.    | Set the `variant` prop for unique styles. Example: `<Button variant="shadow" />`             |
| **Cleaner Effect**     | Adds smooth animation effects to enhance user experience.                                        | Enable by adding the `CleanerEffect` prop. Example: `<Button CleanerEffect />`               |
| **Icons**              | Combine icons with labels for enhanced visuals.                                                  | Add icons inside the button tag. Example: `<Button><Icon /> Label</Button>`                  |
| **Rounded Corners**    | Adjust border-radius with `sm`, `md`, `lg`, or `full` values.                                    | Use the `round` prop to set corner styles. Example: `<Button round="lg" />`                  |
| **Size Options**       | Change size with `xs`, `sm`, `md`, `lg`, or `xl` options.                                        | Use the `size` prop to modify button dimensions. Example: `<Button size="xl" />`             |
| **Event Handling**     | Trigger actions on click or other events.                                                        | Attach events using `@` syntax. Example: `<Button @click="handleClick" />`                   |
