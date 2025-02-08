## CheckBox

 this is default CheckBox with Basic color

 <CodeTabs
  templateCode="
  <div class='p-6 rounded-lg flex justify-center items-center'>
    <CheckBox v-model='isActive' />
  </div>
  "
  scriptCode="
  export default {
    data() {
      return {
        isActive: true,
      };
    }
  }
  "
/>

## Label

 you can add your label with default slot !

 <CodeTabs
  templateCode="
<div class='p-6 rounded-lg flex flex-col gap-4 justify-center place-items-center'>
  <CheckBox v-model='labelActive' class='ml-2'> Remote </CheckBox>
  <CheckBox v-model='labelActive2'> hybrid </CheckBox>
  <CheckBox v-model='labelActive3'> onsite </CheckBox>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        labelActive: false,
        labelActive2: false,
        labelActive3: false,
      };
    }
  }
  "
/>

## Disable

 you can disable your checkbox with `isDisabled` option

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg flex flex-row gap-4 justify-center place-items-center'>
  <CheckBox v-model='disable1' isDisabled> Option </CheckBox>
  <CheckBox v-model='disable2' isDisabled> Option </CheckBox>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        disable1: true,
        disable2: false,
      };
    }
  }
  "
/>

## Color

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg flex flex-row gap-8 justify-center place-items-center'>
  <CheckBox v-model='ColorActive3' color='bg-indigo-700 border-indigo-500 text-white border-2'> custom </CheckBox>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        ColorActive3: true,
      };
    }
  }
  "
/>

## Size

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg flex flex-row gap-8 justify-center place-items-center'>
  <CheckBox v-model='size1' size='sm'> small </CheckBox>
  <CheckBox v-model='size2' size='md'> medium </CheckBox>
  <CheckBox v-model='size3' size='lg'> large </CheckBox>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        size1: true,
        size2: true,
        size3: true,
      };
    }
  }
  "
/>

## Radius

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg flex flex-row gap-8 justify-center place-items-center'>
  <CheckBox v-model='Radius1' radius='none'>none</CheckBox>
  <CheckBox v-model='Radius1' radius='sm'>small</CheckBox>
  <CheckBox v-model='Radius1' radius='md'>medium</CheckBox>
  <CheckBox v-model='Radius1' radius='lg'>large</CheckBox>
  <CheckBox v-model='Radius1' radius='full'>full</CheckBox>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        Radius1: true,
      };
    }
  }
  "
/>

## Line Through

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg flex flex-row gap-8 justify-center place-items-center'>
  <CheckBox v-model='LineRef' lineThrough>option</CheckBox>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        LineRef: false,
      };
    }
  }
  "
/>

## Control

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg flex flex-col gap-4 justify-center place-items-center'>
  <CheckBox v-model='controlRef' lineThrough>option</CheckBox> <br/>
  <label>control: {{ controlRef }}</label>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        controlRef: false,
      };
    }
  }
  "
/>

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
