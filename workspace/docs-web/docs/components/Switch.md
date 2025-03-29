## Switch

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg flex justify-center items-center'>
  <Switch v-model='isActive' />
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

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg flex justify-center items-center flex-col gap-4'>
  <Switch v-model='labelActive' label1='No' label2='Yes' />
  <Switch v-model='labelActive2' label1='0' label2='1' />
  <Switch v-model='labelActive3' label1='×' label2='✓' />
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

## Color

<CodeTabs
  templateCode="
<div class='grid grid-cols-1 gap-3 justify-items-center'>
  <Switch v-model='ColorActive2' activeColor='bg-indigo-700' inactiveColor='bg-indigo-300' />
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        ColorActive2: false,
      };
    }
  }
  "
/>

## disable

<CodeTabs
  templateCode="
<div class='grid grid-cols-2 gap-3 justify-items-center'>
  <h7 class='text-xs'>Disable in left side</h7>
  <h7 class='text-xs'>Disable in right side</h7>
  <Switch v-model='disable1' :isDisabled='true' activeColor='bg-indigo-500' inactiveColor='bg-indigo-950'/>
  <Switch v-model='disable2' :isDisabled='true' activeColor='bg-indigo-500' inactiveColor='bg-indigo-950'/>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        disable1: true,
        disable2 : false,
      };
    }
  }
  "
/>

## Size

<CodeTabs
  templateCode="
<div class='flex flex-row gap-14 items-center justify-center'>
  <Switch v-model='isActive' size='sm' label2='sm' />
  <Switch v-model='isActive' size='md' label2='md' />
  <Switch v-model='isActive' size='lg' label2='lg' />
  <Switch v-model='isActive' size='xl' label2='xl'/>
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

## Switch Component Features

| **Feature**           | **Description**                                                                                     | **Usage**                                                                                     |
|-----------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Default Switch**     | A basic switch with default styling for simple designs.                                              | Use without additional props to apply the default appearance. Example: `<Switch />`            |
| **Colors**      | Customize the switch colors with options  | Use the `activeColor` and `inactiveColor` props to customize the colors. Example: `<Switch activeColor="bg-blue-500" inactiveColor="bg-gray-300" />` |
| **Disable**            | Disable interaction to make the switch inactive.                                                     | Use the `isDisabled` prop to disable the switch. Example: `<Switch isDisabled />`       |
| **Label Customization**| Add custom labels for the active and inactive states of the switch.                                  | Use the `label1` and `label2` props for active and inactive labels. Example: `<Switch v-model="isActive" label1="No" label2="Yes" />` |
| **Size Options**       | Change the size of the switch with `sm`, `md`, `lg`, or `xl` options.                                | Use the `size` prop to change the size of the switch. Example: `<Switch size="lg" />`           |
| **Event Handling**     | Trigger actions on click or other events.                                                           | Attach events using the `@` syntax. Example: `<Switch @change="handleChange" />`               |
