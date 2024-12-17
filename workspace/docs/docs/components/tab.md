<script setup>
const tabs = [
  { label: 'Tab 1', value: 1, content: ' Content of tab 1!' },
  { label: 'Tab 2', value: 2, content: 'Content of tab 2' },
  { label: 'Tab 3', value: 3, content: 'Content of tab 3' },


];
const tabsView = [
  { label: 'Ui', value: 1, content: '' },
  { label: 'Code', value: 2, content: '' }


];

const tabsVariants = [
  { label: 'Tab 1', value: 1, content: null },
  { label: 'Tab 2', value: 2, content: null },
  { label: 'Tab 3', value: 3, content: null }
];
</script>



##  Tab






This example demonstrates horizontally aligned tabs with default styling.


<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabsView" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 "
    notActiveColor='text-gray-700'
    contentColor='text-red-600 '
  >
    <template #content1>

<div class="p-8 rounded-xl shadow-inner flex justify-center items-center">
  <Tab 
   class="gap-3 border-[1px] rounded-md w-fit"
    :tabs="tabs" 
    variant="bordered"
    activeColor="text-blue-500"
  >
    <template #label="{ tab }">
      <span>{{ tab.label }}</span>
    </template>
    <template #content="{ tab }" >
      <p>{{ tab.content }}</p>
    </template>
  </Tab>
</div>


</template>


  <template #content2>

  ```md
<script setup>
const tabs = [
  { label: 'Tab 1', value: 1, content: 'Content of tab 1' },
  { label: 'Tab 2', value: 2, content: 'Content of tab 2' },
  { label: 'Tab 3', value: 3, content: 'Content of tab 3' }
];
</script>

  <Tab 
   class="gap-3 border-[1px] rounded-md w-fit"
    :tabs="tabs" 
    variant="bordered"
    activeColor="text-blue-500 shadow-blue-300"
  >
    <template #label="{ tab }">
      <span>{{ tab.label }}</span>
    </template>
    <template #content="{ tab }">
      <p>{{ tab.content }}</p>
    </template>
  </Tab>
```
  </template>
</Tab>



## Modify
 the colors for active and inactive tabs
The following examples show how you can customize the background and text colors for active and inactive states.
<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabsView" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class="grid grid-cols-2 gap-2"> 
<div class="p-8 rounded-lg   justify-center items-center shadow-inner">
 <Tab :tabs="tabs" 
    variant="default"
activeColor="bg-blue-700 text-white" 
   contentColor="text-blue-600"
     notActiveColor="text-gray-700"> 
    </Tab> 
    </div> 
    <div class="p-8 rounded-lg shadow-inner  justify-center items-center"> 
    <Tab :tabs="tabs" 
   variant="default"
  activeColor="bg-rose-700 text-white" 
   contentColor="text-red-600"
     notActiveColor="text-gray-700" >
     <template #label="{ tab }"> 
     <span>{{ tab.label }}</span> 
     </template>
      <template #content="{ tab }"> 
      <p>{{ tab.content }}</p> 
      </template> 
      </Tab>
       </div>
       </div>


</template>


  <template #content2>

  ```md
 <Tab :tabs="tabs" 
    variant="default"
activeColor="bg-blue-700 text-white" 
   contentColor="text-blue-600"
     notActiveColor="text-gray-700"> 
    </Tab> 
```
  </template>
</Tab>



## Vertical Tabs



<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabsView" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500  "
  >
    <template #content1>

<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
  <Tab 
    :tabs="tabsVariants" 
    activeColor="bg-purple-600 text-white" 
    color="bg-purple-200" 
    vertical
   variant="default"
  >
    <template #label="{ tab }">
      <span>{{ tab.label }}</span>
    </template>
  </Tab>
</div>

</template>


  <template #content2>

  ```md
 <Tab 
    :tabs="tabsVariants" 
     activeColor="bg-purple-600 text-white" 
    color="bg-purple-200" 
   variant="default"
    vertical      <!-- add this -->
  >
```
  </template>
</Tab>





## Variants



<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabsView" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>

<div class="flex justify-around">
<h5 class="text-green-600">bordered</h5>
<h5 class="text-blue-600">underline</h5>

</div>
<br/>

<div class="grid grid-cols-2 gap-4">
  <div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
    <Tab 
    class="gap-3 border-2  w-fit"
      :tabs="tabs" 
      variant="bordered"
       activeColor="text-green-800 bg-transparent border-t-green-600    " 
      color=" text-gray-400   bg-transparent  "
    >
      <template #label="{ tab }">
        <span>{{ tab.label }}</span>
      </template>
    </Tab>
  </div>

  <div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
    <Tab 
    class="gap-3 border-2 rounded-xl w-96"
  :tabs="tabs" 
  variant="underline"
  activeColor="bg-transparent"
  color="bg-transparent"
  TextColor="text-gray-500"
  activeTextColor="text-blue-500"
>
</Tab>

  </div>
   <div class="p-4 my-10 rounded-lg shadow-inner flex justify-center items-center">
    <Tab 
    class="gap-3 border-2  w-fit bg-gray-200"
      :tabs="tabs" 
     variant="mirror"
       activeColor=" text-rose-600 bg-gray-200  " 
      color=" text-gray-800   bg-gray-200 bg-white   "
    >
    </Tab>
  </div>

  <div class="p-4 rounded-lg my-10  shadow-inner flex justify-center items-center">
 

  <Tab 
  class="gap-3 border-2 rounded-xl min-w-full "
      :tabs="tabs" 
      activeColor="bg-gray-200  text-black" 
      color=" text-gray-400  bg-white   "
      variant="shadow" 
    >
    </Tab>
    
  </div>
  
</div>
<div class="flex justify-around">
<h5 class="text-rose-600">mirror</h5>
<h5 class="text-yellow-600">shadow</h5>

</div>
<br/>

</template>


  <template #content2>

  ```md
 <Tab 
  :tabs="tabsVariants" 
  activeColor="bg-transparent"
  color="bg-transparent"
  TextColor="text-gray-500"
  activeTextColor="text-blue-500"
  variant="underline"        <!-- You can choice 1 of 4 variants  -->
    >
```
  </template>
</Tab>


## Position
Adjust the position of the tabs using the `position` prop. The available options are `top`, `right`, `left`, and `bottom`. Below are examples for each position option:




<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabsView" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class="flex justify-around">
<h5>bottom</h5>
<h5>top</h5>

</div>
<br/>

<div class="grid grid-cols-2 gap-4">
  <div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
     <Tab 
    :tabs="tabs" 
   activeColor="bg-transparent shadow-rose-400 text-rose-700" 
    textColor="text-gray-400  bg-transparent"
    variant="bordered"
    position="bottom"
  >
    <template #label="{ tab }">
      <span>{{ tab.label }}</span>
    </template>
    <template #content="{ tab }">
      <p>{{ tab.content }}</p>
    </template>
  </Tab>
  </div>

   <div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
     <Tab 
    :tabs="tabs" 
   activeColor="bg-transparent shadow-sky-400 text-sky-700" 
    textColor="text-gray-400  bg-transparent "
    variant="bordered"
    position="top"
  >
    <template #label="{ tab }">
      <span>{{ tab.label }}</span>
    </template>
    <template #content="{ tab }">
      <p>{{ tab.content }}</p>
    </template>
  </Tab>


  </div>
   <div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
     <Tab 
    :tabs="tabs" 
   activeColor="bg-transparent shadow-violet-400 text-violet-700" 
    textColor="text-gray-400  bg-transparent"
    variant="bordered"
    position="left"
     vertical
  >
    <template #label="{ tab }">
      <span>{{ tab.label }}</span>
    </template>
    <template #content="{ tab }">
      <p>{{ tab.content }}</p>
    </template>
  </Tab>
  </div>

  <div class="p-4 rounded-lg my-10  shadow-inner flex justify-center items-center">


   <Tab 
    :tabs="tabs" 
    activeColor="bg-transparent  shadow-lime-400 text-lime-700" 
    textColor="text-gray-400  bg-transparent"
    variant="bordered"
     position="right"
     vertical
  >
    <template #label="{ tab }" >
      <span>{{ tab.label }}</span>
    </template>
    <template #content="{ tab }">
      <p>{{ tab.content }}</p>
    </template>
  </Tab>
    
  </div>
  
</div>
<div class="flex justify-around">
<h5>left</h5>
<h5>right</h5>

</div>

</template>


  <template #content2>

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
    activeColor="bg-transparent  shadow-lime-400 text-lime-700" 
    textColor="text-gray-400  bg-transparent"
    variant="bordered"
     vertical     <!-- when you select right or left better use vertical -->
     position="right"    <!-- You can choice 1 of 4 side  -->
  >
    <template #label="{ tab }">
      <span>{{ tab.label }}</span>
    </template>
    <template #content="{ tab }">
      <p>{{ tab.content }}</p>
    </template>
  </Tab>
```
  </template>
</Tab>





## Disable
 you can disable your Tab with `isDisable` option!


<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabsView" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>

 <div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
  <Tab 
     :tabs="tabsVariants" 
      activeTextColor="text-gray-600  " 
      color="shadow-gray-300 text-teal-500" 
      variant="bordered" 
    isDisabled 
  >
  </Tab>
</div>


</template>


  <template #content2>

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
  </template>
</Tab>


## Justify
 you can select justify your Tab with `justify` option!

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabsView" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    justify="start"
    activeColor="text-blue-500 shadow-blue-500"
  >
</tab>
<br/>
<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
</tab>
<br/>

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    justify="end"
    activeColor="text-blue-500 shadow-blue-500"
  >
</tab>


</template>


  <template #content2>

  ```md
<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    justify="start" <!-- change this -->
    activeColor="text-blue-500 shadow-blue-500"
  >
</tab>
```
  </template>
</Tab>


## Size

Adjust the size of the tabs using the `size` prop. The available options are `sm`, `md`, `lg`, and `xl`. Below are examples for each size option:


<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabsView" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class=" rounded-lg shadow-inner grid grid-cols gap-1 ">
  <Tab 
     :tabs="tabsVariants" 
     activeTextColor="text-rose-500"
     activeColor="bg-transparent"
     textColor="shadow-gray-300 shadow-rose-300" 
     color="bg-transparent"
     variant="shadow"
     size="xl" 
  >
  </Tab>
  <Tab 
     :tabs="tabsVariants" 
     variant="shadow"
     activeColor="bg-transparent shadow-yellow-500 text-yellow-500 "
     color="shadow-yellow-400"
     size="lg" 
  >
  </Tab>
  <Tab 
     :tabs="tabsVariants" 
     variant="shadow"
     activeColor="bg-transparent "
     color="shadow-blue-400"
     size="md" 
  >
  </Tab>

<br/>

  <Tab 
     :tabs="tabsVariants" 
     variant="shadow"
     activeColor="bg-transparent shadow-green-500 text-green-700 "
     color="shadow-green-400"
     size="sm" 
  >
  </Tab>

</div>


</template>


  <template #content2>

  ```md
  <Tab 
     :tabs="tabsVariants" 
     variant="shadow"
     activeColor="bg-transparent shadow-green-500 text-green-700 "
     color="shadow-green-400"
     size="sm"     <!-- You can choice 1 of 4 sizes  -->
  >
  </Tab>
```
  </template>
</Tab>





## Tab Component Features

| **Feature**         | **Description**                                                                                                   | **Usage**                                                                                   |
|---------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Default Tab**      | Basic example with default styles. This is the simplest usage, without any extra configuration.                 | Pass an array of tabs with labels and content. Set the `variant` prop to `'default'`.       |
| **Customize Colors** | Customize the text and background colors of both active and inactive tabs. Can be applied using `activeColor` and `notActiveColor` and `ContentColor`. | Set the `textColor` and `activeColor` props to modify the colors of the tabs.               |
| **Vertical Tabs**    | Displays the tabs in a vertical orientation instead of horizontal, useful for space-constrained areas.            | Set the `vertical` prop to `true`.                                                           |
| **Variants**         | Different tab styles that can be applied using the `variant` prop. Options include `'underline'`, `'bordered'`, `'shadow'`, and `'default'`. | Use the `variant` prop to set the desired tab style (`'underline'`, `'bordered'`, etc.).      |
| **Disabled Tab**     | Prevent users from interacting with specific tabs by disabling them.                                              | Use the `isDisabled` prop to disable all tabs or specific ones.                             |
| **Custom Content**   | Customize the content that appears when a tab is selected. This is managed via slots for content and labels.      | Use `#content` and `#label` slots to customize the tab label and content dynamically.        |
| **Customize Shadow Colors** | Customize the shadow colors of both active and inactive tabs.                                              | Set the `activeShadow` and `shadow` props to modify the shadow of the tabs.                 |
| **Size**             | Change the size of the tabs. Sizes available are `sm`, `md`, `lg`, and `xl`.                                     | Set the `size` prop to one of the following: `'sm'`, `'md'`, `'lg'`, `'xl'`.                  |
| **Position**             | Change the Position of the tabs. Position available are `left`, `right`, `bottom`, and `top`.                                     | Set the `Position` prop to one of the following: `'left'`, `'right'`, `'bottom'`, `'top'`.                  |
| **Justify**             | Change the justify the tabs. justify available are `start`, `default`, and `end`.                                     | Set the `justify` prop to one of the following: `start`, `default`, and `end`.                  |
| **Content Color**         | Change the color of content `contentColor`                     | use the `contentColor ='text-blue-500'` in tab tag`                |