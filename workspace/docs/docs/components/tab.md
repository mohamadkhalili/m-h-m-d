<script setup>
const tabs = [
  { label: 'Tab 1', value: 1, content: 'Content of tab 1' },
  { label: 'Tab 2', value: 2, content: 'Content of tab 2' },
  { label: 'Tab 3', value: 3, content: 'Content of tab 3' }
];

const tabsVariants = [
  { label: 'Tab 1', value: 1, content: null },
  { label: 'Tab 2', value: 2, content: null },
  { label: 'Tab 3', value: 3, content: null }
];
</script>

---

## Default Tab

**Simple tabs with default configurations**  
This example demonstrates horizontally aligned tabs with default styling.

<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
  <Tab 
    :tabs="tabs" 
    activeColor="bg-gray-800" 
    color="bg-gray-200" 
    activeTextColor="text-white" 
    textColor="text-black"
  >
    <template #label="{ tab }">
      <span>{{ tab.label }}</span>
    </template>
    <template #content="{ tab }">
      <p>{{ tab.content }}</p>
    </template>
  </Tab>
</div>

<br/>
<br/>

**Code**


```md
<script setup>
const tabs = [
  { label: 'Tab 1', value: 1, content: 'Content of tab 1' },
  { label: 'Tab 2', value: 2, content: 'Content of tab 2' },
  { label: 'Tab 3', value: 3, content: 'Content of tab 3' }
];
</script>

<Tab 
    :tabs="tabs" 
    activeColor="bg-gray-800" 
    color="bg-gray-200" 
    activeTextColor="text-white" 
    textColor="text-black"
  >
    <template #label="{ tab }">
      <span>{{ tab.label }}</span>
    </template>
    <template #content="{ tab }">
      <p>{{ tab.content }}</p>
    </template>
  </Tab>


```
<br/>
<br/>


## Modify
 the colors for active and inactive tabs
The following examples show how you can customize the background and text colors for active and inactive states.
<br/>
<br/>

<div class="grid grid-cols-2 gap-4"> 
<div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
 <Tab :tabs="tabsVariants" activeColor="bg-blue-600" color="bg-gray-700" activeTextColor="text-white" textColor="text-white" > 
 <template #label="{ tab }"> 
 <span>{{ tab.label }}</span>
  </template>
   <template #content="{ tab }">
    <p>{{ tab.content }}</p> 
    </template>
    </Tab> 
    </div> 
    <div class="p-4 rounded-lg shadow-inner flex justify-center items-center"> 
    <Tab :tabs="tabsVariants" activeColor="bg-rose-700" color="bg-gray-100" activeTextColor="text-white" textColor="text-black" >
     <template #label="{ tab }"> 
     <span>{{ tab.label }}</span> 
     </template>
      <template #content="{ tab }"> 
      <p>{{ tab.content }}</p> 
      </template> 
      </Tab>
       </div>
       </div>




## Vertical Tabs

<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
  <Tab 
    :tabs="tabsVariants" 
    activeColor="bg-purple-600" 
    color="bg-purple-200" 
    activeTextColor="text-white" 
    textColor="text-black"
    vertical
  >
    <template #label="{ tab }">
      <span>{{ tab.label }}</span>
    </template>
  </Tab>
</div>

```md

 <Tab 
    :tabs="tabsVariants" 
    activeColor="bg-purple-600" 
    color="bg-purple-200" 
    activeTextColor="text-white" 
    textColor="text-black"
    vertical      <!-- add this -->
  >
```

---


## Variants
<br/>

<div class="flex justify-around">
<h5 class="text-orange-800">bordered</h5>
<h5 class="text-blue-950">underline</h5>

</div>
<br/>

<div class="grid grid-cols-2 gap-4">
  <div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
    <Tab 
      :tabs="tabsVariants" 
      variant="bordered"
       activeTextColor="text-orange-500"
      activeColor="bg-purple-600"
    >
      <template #label="{ tab }">
        <span>{{ tab.label }}</span>
      </template>
    </Tab>
  </div>

  <div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
    <Tab 
      :tabs="tabsVariants" 
      variant="underline" 
      activeTextColor="text-blue-700"
      activeColor="bg-purple-600"
    >
    </Tab>
  </div>
   <div class="p-4 my-10 rounded-lg shadow-inner flex justify-center items-center">
    <Tab 
      :tabs="tabsVariants" 
     variant="mirror"
      activeTextColor="text-rose-500"
      activeColor="bg-rose-600"
    >
    </Tab>
  </div>

  <div class="p-4 rounded-lg my-10  shadow-inner flex justify-center items-center">


  <Tab 
      :tabs="tabsVariants" 
      activeTextColor="text-teal-500"
      activeShadow="shadow-teal-500" 
      shadow="shadow-gray-300" 
      variant="shadow" 
    >
    </Tab>
    
  </div>
  
</div>
<div class="flex justify-around">
<h5 class="text-rose-900">mirror</h5>
<h5 class="text-cyan-900">shadow</h5>

</div>
<br/>

---

**code**
```md
 <Tab 
      :tabs="tabsVariants" 
      activeTextColor="text-teal-500"
      activeShadow="shadow-teal-500" 
      shadow="shadow-gray-300" 
      variant="shadow"   <!-- You can choice 1 of 4 variants  -->
    >
```
<br/>
<br/>


## Disable
 you can disable your Tab with `isDisable` option!

 <div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
  <Tab 
     :tabs="tabsVariants" 
      activeTextColor="text-teal-500"
      activeShadow="shadow-teal-500" 
      textColor="shadow-gray-300" 
      variant="bordered" 
    isDisabled 
  >
  </Tab>
</div>

**Code**
```md
 <Tab 
     :tabs="tabsVariants" 
      activeTextColor="text-teal-500"
      activeShadow="shadow-teal-500" 
      textColor="shadow-gray-300" 
      variant="bordered" 
     isDisabled    <!-- add this -->
  >
```



## Size

Adjust the size of the tabs using the `size` prop. The available options are `sm`, `md`, `lg`, and `xl`. Below are examples for each size option:

<div class="p-6 rounded-lg shadow-inner flex flex-col justify-center items-center">



<div class="flex items-center space-x-4">
  <Tab 
     :tabs="tabsVariants" 
     activeTextColor="text-rose-500"
     activeShadow="shadow-teal-500" 
     textColor="shadow-gray-300" 
     variant="bordered"
     size="xl" 
  >
  </Tab>
</div>



<div class="flex items-center space-x-4">
  <Tab 
     :tabs="tabsVariants" 
     activeTextColor="text-orange-500"
     activeShadow="shadow-teal-500" 
     textColor="shadow-gray-300" 
     variant="bordered"
     size="lg" 
  >
  </Tab>
</div>



<div class="flex items-center space-x-4">
  <Tab 
     :tabs="tabsVariants" 
     activeTextColor="text-blue-500"
     activeShadow="shadow-teal-500" 
     textColor="shadow-gray-300" 
     variant="bordered"
     size="md" 
  >
  </Tab>
</div>


<div class="flex items-center space-x-4">
  <Tab 
     :tabs="tabsVariants" 
     activeTextColor="text-purple-500"
     activeShadow="shadow-teal-500" 
     textColor="shadow-gray-300" 
     variant="bordered"
     size="sm" 
  >
  </Tab>
</div>

</div>

## Tab Component Features

| **Feature**         | **Description**                                                                                                   | **Usage**                                                                                   |
|---------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Default Tab**      | Basic example with default styles. This is the simplest usage, without any extra configuration.                 | Pass an array of tabs with labels and content. Set the `variant` prop to `'default'`.       |
| **Customize Colors** | Customize the text and background colors of both active and inactive tabs. Can be applied using `createColorProp()` and `createBgColorProp()`. | Set the `textColor` and `activeColor` props to modify the colors of the tabs.               |
| **Vertical Tabs**    | Displays the tabs in a vertical orientation instead of horizontal, useful for space-constrained areas.            | Set the `vertical` prop to `true`.                                                           |
| **Variants**         | Different tab styles that can be applied using the `variant` prop. Options include `'underline'`, `'bordered'`, `'shadow'`, and `'default'`. | Use the `variant` prop to set the desired tab style (`'underline'`, `'bordered'`, etc.).      |
| **Disabled Tab**     | Prevent users from interacting with specific tabs by disabling them.                                              | Use the `isDisabled` prop to disable all tabs or specific ones.                             |
| **Custom Content**   | Customize the content that appears when a tab is selected. This is managed via slots for content and labels.      | Use `#content` and `#label` slots to customize the tab label and content dynamically.        |
| **Customize Shadow Colors** | Customize the shadow colors of both active and inactive tabs.                                              | Set the `activeShadow` and `shadow` props to modify the shadow of the tabs.                 |
| **Size**             | Change the size of the tabs. Sizes available are `sm`, `md`, `lg`, and `xl`.                                     | Set the `size` prop to one of the following: `'sm'`, `'md'`, `'lg'`, `'xl'`.                  |
