<script setup>


const tabs = [
  { label: 'demo', value: 1, content: '' },
  { label: 'slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''}


]

import { ref } from 'vue';

const buttonState = ref(false);

const toggleValue = () => {
  buttonState.value = !buttonState.value; 
};
</script>


## Input 

The Input component provides a customizable input field that supports various use cases, such as text input, search fields, and forms with labels, prefixes, and suffixes. You can easily customize its appearance using different properties and slots.


<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >

<template #content1>

<div class=" py-10  rounded-lg shadow-inner flex justify-center items-center">
  
<Input label="name"/>
</div


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



## Modify the Styles

You can customize the appearance of the input component by modifying the following properties:

- `InputClass`: Adjusts the base styles of the input field.
- `LabelInputClass`: Modifies the styles of the input's label.
- `prefix` and `suffix`: Add any text or icon content as prefixes or suffixes.

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >

<template #content1>

<div class=" py-10 px-2 rounded-lg  shadow-inner grid  grid-cols-2 gap-12 justify-items-center">
  
<Input  prefix="➥" suffix='🗙' placeholder='search' InputClass=" rounded-full ring-2 ring-blue-600 " />
<Input prefix="👤"   placeholder="password" InputClass="shadow-blue-200 shadow-inner ring-0 ring-transparent"  />
<Input  label="User name" InputClass="shadow-[1px_4px_2px_-2px_rgba(34,_197,_94,_0.5)] ring-0" LabelInputClass=' -top-[-56px] left-[33px] rounded-full  bg-transparent text-green-600' />


<Input label="Gmail"  LabelInputClass=' top-[-13px] left-8 rounded-full bg-white  px-2  text-sm '  />


</div>

</template>

  <template #content2>

  ```md

<Input  placeholder="Search">
  <template #prefix>
 <button  class="absolute left-2 -translate-y-1/2 top-1/2  pr-8">
➥
 </button>
</template>
  <template #suffix>
           <button  type="reset" class="absolute right-3 -translate-y-1/2 top-1/2 p-1">
            🗙
          </button>
  </template>
  </input>

```
  </template>
    <template #content3>

  ```md

<Input  prefix="➥" suffix='🗙' placeholder='search' InputClass="rounded-full ring-2  "/>
<Input prefix="👤"   placeholder="password" InputClass="shadow-blue-200 shadow-inner" />
<Input  label="User name" InputClass="shadow-[1px_4px_2px_-2px_rgba(34,_197,_94,_0.5)] " LabelInputClass=' top-12 left-[84px] rounded-full  px-2  bg-transparent '/>
<Input label="Gmail"  LabelInputClass=' top-[-10px] left-8 rounded-full bg-white  px-2  text-sm '  />


```
  </template>

</Tab>



## Actions

### Handling Button Click Inside Input

<br/>

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >

<template #content1>

<div class=" py-10 px-2 rounded-lg  shadow-inner grid gap-2   justify-items-center">

<p class="text-gray-600"> click on  close button for handling action</p>
<Input>
  <template #label>
    Name
  </template>

  <template #prefix>
    <button
      type="reset"
      class="absolute right-3 -translate-y-1/2 top-1/2 p-1 animate-pulse scale-150 hover:animate-none"
      @click="toggleValue"
    >
      🗙
    </button>
  </template>
</Input>

 <p class="text-sm">
      The button state is: 
      <span :class="[buttonState ? 'text-green-600' : 'text-red-700']">
        {{ buttonState }}
      </span>
    </p>
</div>

</template>

  <template #content2>

  ```md

<script>
import { ref } from 'vue';

const buttonState = ref(false);

const toggleValue = () => {
  buttonState.value = !buttonState.value; 
};
</script>


<Input>
  <template #label>
    Name
  </template>

  <template #prefix>
    <button
      type="reset"
      class="absolute right-3 -translate-y-1/2 top-1/2 p-1"
      @click="toggleValue"
    >
      🗙
    </button>
  </template>
</Input>

 <p class="text-sm">
      The button state is: 
      <span :class="[buttonState.value ? 'text-green-600' : 'text-red-700']">
        {{ buttonState }}
      </span>
    </p>

```
  </template>
    <template #content3>

  ```md

<Input label="name" suffix="X" />

```
  </template>

</Tab>


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
