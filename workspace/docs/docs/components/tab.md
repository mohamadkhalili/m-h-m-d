
<script setup>
import Tab from '../../../ui/src/components/tab/Ui.vue';
const tabs = [
  { label: 'Tab 1', value: 'one', content: 'Content of tab 1' },
  { label: 'Tab 2', value: 'two', content: 'Content of tab 2' },
  { label: 'Tab 3', value: 'three', content: 'Content of tab 3' }
];
const tabsVariants = [
  { label: 'Tab 1', value: 'one', content: null },
  { label: 'Tab 2', value: 'two', content: null },
  { label: 'Tab 3', value: 'three', content: null }
];
</script>



#  Tab
<Br/>
<Br/>

<div class="  p-6 rounded-lg shadow-inner  flex justify-center items-center ">
  <Tab :tabs="tabs" color= "default" />
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
        <Tab :tabs="tabs" activeColor="bg-rose-600" color="bg-gray-200" activeTextColor="text-white" textColor="text-black" />
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
        <Tab :tabs="tabsVariants" variant="bordered"/>
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Tab :tabs="tabsVariants" variant="underline" activeTextColor="text-blue-500" />
    </div>
    </div>
