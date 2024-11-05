
# input
<script >
import {ref} from 'vue'
const inputValue = ref('');
const inputValuedefault = ref('');
const inputValuePrimary = ref('');
const inputValueError = ref('');
const inputValueWarning = ref('');
const inputValueSecondary = ref('');
const inputValueGradient = ref('');
const inputValueDisable = ref('');
const inputValueReadonly = ref('');
const inputValueRtl = ref('');

</script>

**Input with Custom Effect**
<div class="border-[1px] border-gray-300 p-6 rounded-lg shadow-inner bg-white flex justify-center items-center">
<Input v-model="inputValue"  title="input" />
</div>
<Br/>

you can easy import and use it!

```md
<Input v-model="inputValue"  title="input" />



```

**Customize the color as you like or use the default values!**

<Br/>

<div class="grid grid-cols-2 gap-4">
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input v-model="inputValueDefault" color="default" title="default" />
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input v-model="inputValuePrimary" color="primary" title="primary"/>
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input v-model="inputValueError" color="error" title="error"/> 
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input v-model="inputValueWarning" color="warning" title="warning"/>
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input v-model="inputValueSecondary" color="secondary" title="secondary"/>
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input v-model="inputValueGradient" color="gradient" title="gradient"/>
    </div>
     
</div>


**Code** 

```md
<Input v-model="inputValueDefault" color="default" title="default" />
<Input v-model="inputValuePrimary" color="primary" title="primary"/>
<Input v-model="inputValueError" color="error" title="error"/> 
<Input v-model="inputValueWarning" color="warning" title="warning"/>
<Input v-model="inputValueSecondary" color="secondary" title="secondary"/>
<Input v-model="inputValueGradient" color="gradient" title="gradient"/>
```

----

**Disable**
<br/>
 You can easy Disable your input  with  **IsDisabled**


<div class="border-[1px] border-gray-300 p-6 rounded-lg shadow-inner bg-white flex justify-center items-center">

<Input v-model="inputValueDisable" color="secondary" title="Disabled" isDisabled/>

</div>

**code**
```md
<Input v-model="inputValueDisable" color="secondary" title="Disabled" isDisabled/>
```
---
**Read Only**
<br/>

also can make Read Only with  **Readonly** feature ! 

<div class="border-[1px] border-gray-300 p-6 rounded-lg shadow-inner bg-white flex justify-center items-center">
<Input v-model="inputValueReadonly" color="primary"  readonly="true"   title="ReadOnly Activated"  /> 

</div>

```md
<Input v-model="inputValueReadonly" color="primary"  readonly="true"   title="ReadOnly Activated"  /> 


```
----
Variant themes
<br/>
<br/>

You can use any variants for your theme it's already ready !

<div class="   p-6 rounded-lg shadow-inner  flex justify-center items-center">
<div class="flex w-full flex-col col-span-1 gap-4">
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center">

<Input variant="faded" title="faded"/>
</div>
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center">

<Input variant="bordered" title="bordered" />
</div>
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center">

<Input variant="default" title="default" />
</div>
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center">

<Input variant="underline" title="Name"  rtl/>
</div>
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center ">

<Input variant="flat" title="flat"/>
</div>
 
</div>
</div>
---
**RTL**
<br/>

 can use **RTL** for align text ! 

<div class="border-[1px] border-gray-300 p-6 rounded-lg shadow-inner bg-white flex justify-center items-center">
<Input v-model="inputValueRtl" color="warning"  title="نام خانوادگی"   rtl /> 

</div>

```md
<Input v-model="inputValueRtl" color="warning"  title="نام خانوادگی"   rtl /> 


```