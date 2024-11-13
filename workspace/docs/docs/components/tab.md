
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



#  Tab
<Br/>
<Br/>

<div class="  p-6 rounded-lg shadow-inner  flex justify-center items-center ">
  <Tab :tabs="tabs"  color="bg-gray-100" />
</div>

<Br/>
<Br/>

**Customize  color !**
<Br/>
<Br/>

<div class="grid grid-cols-2 gap-4">
   
   <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Tab :tabs="tabs" activeColor="bg-blue-600" color="bg-gray-700" activeTextColor="text-white" textColor="text-white" />
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Tab :tabs="tabs" activeColor="bg-rose-700" color="bg-gray-100" activeTextColor="text-white" textColor="text-black" />
    </div>


</div>

<br/>
<br/>

*Code*

```md

<script setup>
const tabs = [
  { label: 'Tab 1', value: 'one', content: 'Content of tab 1 ' },
  { label: 'Tab 2', value: 'two', content: 'Content of tab 2 ' },
  { label: 'Tab 3', value: 'three',content:'Content of tab 3' }
];
</script>
<Tab 
:tabs="tabs" 
activeColor="bg-blue-600"
color="bg-gray-700"
activeTextColor="text-white" 
textColor="text-white"
 />
```
<br/>
<br/>

**Variants**

<br/>
<br/>

<div class="grid grid-cols-2 gap-4">
   
   <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Tab :tabs="tabsVariants" variant="bordered" />
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Tab :tabs="tabsVariants" variant="underline" activeTextColor="text-blue-500" />
    </div>
    </div>
