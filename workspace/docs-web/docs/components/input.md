## Input

The Input component provides a customizable input field that supports various use cases, such as text input, search fields, and forms with labels, prefixes, and suffixes. You can easily customize its appearance using different properties and slots.

<CodeTabs
  templateCode="
  <div class='py-10 rounded-lg shadow-inner flex justify-center items-center'>
    <Input label='name'/>
    <p>{{ modelValue }}</p>
  </div>
  "
  scriptCode="
  export default {
    data() {
      return {
        modelValue: undefined,
      };
    }
  }
  "
/>

## Modify the Styles

You can customize the appearance of the input component by modifying the following properties:

- `InputClass`: Adjusts the base styles of the input field.
- `LabelInputClass`: Modifies the styles of the input's label.
- `prefix` and `suffix`: Add any text or icon content as prefixes or suffixes.

<CodeTabs
  templateCode="
<div class='py-10 px-2 rounded-lg shadow-inner grid grid-cols-1 gap-12 justify-items-center'>
  <Input prefix='➥' suffix='🗙' placeholder='search' InputClass='rounded-full ring-2 ring-indigo-400' />
  <Input prefix='👤' placeholder='password' InputClass='shadow-indigo-200 shadow-inner ring-0 ring-indigo-400' />
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        modelValue: undefined,
      };
    }
  }
  "
/>

## Actions

### Handling Button Click Inside Input

<br/>

<CodeTabs
  templateCode="
  <div class='py-10 px-2 rounded-lg shadow-inner grid gap-2 justify-items-center'>
    <p class='text-gray-600'> click on close button for handling action</p>
    <Input>
      <template #label>
        Name
      </template>
      <template #prefix>
        <button
          type='reset'
          class='absolute right-3 -translate-y-1/2 top-1/2 p-1 animate-pulse scale-150 hover:animate-none'
          @click='toggleValue'
        >
          🗙
        </button>
      </template>
    </Input>
    <p class='text-sm'>
      The button state is:
      <span :class='[buttonState ? &quot;text-green-600&quot; : &quot;text-red-700&quot;]'>
        {{ buttonState }}
      </span>
    </p>
  </div>
  "
  scriptCode="
  export default {
    data() {
      return {
        modelValue: undefined,
        buttonState: false,
      };
    },
    methods: {
      toggleValue() {
        this.buttonState = !this.buttonState;
      }
    }
  }
  "
/>

## Input Component Features

| **Feature**             | **Description**                                                                                                              | **Usage**                                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| **Default Input**        | Basic example with default input styles. This is the simplest usage without any extra configuration.                         | Use the `<Input />` component without any additional props.                                                   |
| **Customize Input Class**| Customize the base styles of the input field, such as border, padding, and background.                                       | Use the `InputClass` prop to apply custom classes to the input field (e.g., `InputClass="rounded-full"`)       |
| **Label Customization**  | Customize the input label's position, font size, color, and other properties.                                                | Use the `LabelInputClass` prop to apply custom classes to the label (e.g., `LabelInputClass="text-gray-500"`)  |
| **Prefix**               | Add a prefix element (e.g., an icon or text) to the input field before the user’s input.                                      | Use the `prefix` slot to add content (e.g., `<template #prefix>👤</template>`)                                |
| **Suffix**               | Add a suffix element (e.g., a reset button or icon) to the input field after the user’s input.                               | Use the `suffix` slot to add content (e.g., `<template #suffix>🗙</template>`)                                |
| **Placeholder**          | Display placeholder text inside the input when the field is empty.                                                           | Use the `placeholder` prop to define the placeholder text (e.g., `placeholder="Search"`).                    |
 |**Custom Actions**       | Add custom actions like buttons or icons inside the input field (e.g., clear button, search icon).                           | Use the `prefix` and `suffix` slots to add custom buttons or icons.                                          |
