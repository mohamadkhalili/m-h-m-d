
<script setup>
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'code', value: 2, content: ''}
];


</script>




## Button

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class='  p-4 rounded-lg shadow-inner  flex justify-center items-center'>
  <Button >button</Button>
</div>

</template>


  <template #content2>

  ```md
  <Button  >button</Button>
```
  </template>
</Tab>










## modify

<div class="grid grid-cols-2 gap-4">
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
<Button  CleanerEffect > faded  </Button>
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
