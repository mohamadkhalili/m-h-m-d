
<script setup>
import Tab from '../../../ui/src/components/tab/Ui.vue';
const tabs = [
  { label: 'Tab 1', value: 'one', content: 'Content of tab 1' },
  { label: 'Tab 2', value: 'two', content: 'Content of tab 2' },
  { label: 'Tab 3', value: 'three', content: 'Content of tab 3' }
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

**Customize the color as you like or use the default values!**
<Br/>
<Br/>

<div class="grid grid-cols-2 gap-4">
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
         <Tab :tabs="tabs" color= "default" />
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
       <Tab :tabs="tabs" color= "primary" />
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
         <Tab :tabs="tabs" color= "error" />
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
         <Tab :tabs="tabs" color= "warning" />
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Tab :tabs="tabs" color= "secondary" />
    </div>
    <div class="  p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Tab :tabs="tabs" color= "Dark" />
    </div>

</div>

<br/>
<br/>

*Code*

```md

<script setup>
import Tab from '../../../ui/src/components/tab/Ui.vue';
const tabs = [
  { label: 'Tab 1', value: 'one', content: 'Content of tab 1' },
  { label: 'Tab 2', value: 'two', content: 'Content of tab 2' },
  { label: 'Tab 3', value: 'three', content: 'Content of tab 3' }
];
</script>

<Tab :tabs="tabs" color= "default" />  
<Tab :tabs="tabs" color= "primary" />
<Tab :tabs="tabs" color= "error" />
<Tab :tabs="tabs" color= "warning" />
<Tab :tabs="tabs" color= "secondary" />
<Tab :tabs="tabs" color= "Dark" />
```




