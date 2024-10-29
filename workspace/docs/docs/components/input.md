
# input
<script >

import Input from '../../../ui/src/components/input/Core.vue'; 
</script>

**Input with Custom Effect**
<div class="border-[1px] border-gray-300 p-6 rounded-lg shadow-inner bg-white flex justify-center items-center">
<Input  title="input"/>
</div>
<Br/>

you can easy import and use it!

```md
<Input  title="input"/>



```

**Customize the color as you like or use the default values!**

<Br/>

<div class="grid grid-cols-2 gap-4">
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input color="default" title="default" />
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input color="primary" title="primary"/>
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input color="error" title="error"/> 
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input color="warning" title="warning"/>
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input color="secondary" title="secondary"/>
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Input color="gradient" title="gradient"/>
    </div>
     
</div>


**Code** 

```md

<Input color="default" title="default" />
<Input color="primary" title="primary"/>
<Input color="error" title="error"/> 
<Input color="warning" title="warning"/>
<Input color="secondary" title="secondary"/>
<Input color="gradient" title="gradient"/>

```

----

**Disable**



<div class="border-[1px] border-gray-300 p-6 rounded-lg shadow-inner bg-white flex justify-center items-center">

<Input color="secondary" title="Disabled" isDisabled/>

</div>

**code**
```md
<Input color="secondary"  title="Disabled" isDisabled/>
```
---
**Read Only**

<div class="border-[1px] border-gray-300 p-6 rounded-lg shadow-inner bg-white flex justify-center items-center">
<Input color="primary"  Readonly="true"   title="ReadOnly Activated"  /> 

</div>

```md
<Input color="primary"  title="ReadOnly Activated"  /> 

```
---