# input
<script >
import {ref} from 'vue'
const inputValue = ref('');
const inputValuedefault = ref('');
const inputValuePrimary = ref('');
const inputValueError = ref('');
const inputValueWarning = ref('');
const inputValueSecondary = ref('');
const inputValueTransparent = ref('');
const inputValueDisable = ref('');
const inputValueReadonly = ref('');
const inputValueRtl = ref('');

</script>

**Input with Custom Effect**
<div class="  p-6 rounded-lg shadow-inner flex justify-center items-center">
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
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Input v-model="inputValueDefault" color="default" title="default" />
    </div>
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Input v-model="inputValuePrimary" color="primary" title="primary"/>
    </div>
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Input v-model="inputValueError" color="error" title="error"/> 
    </div>
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Input v-model="inputValueWarning" color="warning" title="warning"/>
    </div>
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Input v-model="inputValueSecondary" color="secondary" title="secondary"/>
    </div>
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center">
        <Input v-model="inputValueTransparent" color="transparent" title="Transparent"/>
    </div>
     
</div>


**Code** 

```md

<Input color="default" title="default" />
<Input color="primary" title="primary" />
<Input color="error" title="error" />
<Input color="warning" title="warning" />
<Input color="secondary" title="secondary" />
<Input color="transparent" title="Transparent" />


```

----

**Disable**
<br/>

 You can easy Disable your input  with  **IsDisabled**


<div class="   p-6 rounded-lg shadow-inner  flex justify-center items-center">

<Input v-model="inputValueDisable" color="secondary" title="Disabled" isDisabled/>

</div>

**code**
```md
<Input color="secondary" title="Disabled" isDisabled/>
```
---
**Read Only**
<br/>

also can make Read Only with  **Readonly** feature ! 

<div class="   p-6 rounded-lg shadow-inner  flex justify-center items-center">
<Input v-model="inputValueReadonly" color="primary"  readonly="true"   title="ReadOnly Activated"  /> 

</div>

```md
<Input  readonly="true" title="ReadOnly Activated"  /> 


```
---
**Variant themes**
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

<Input variant="shadow" title="shadow" />
</div>
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center">

<Input variant="underline" title="underline"  />
</div>
    <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center ">

<Input variant="flat" title="flat"/>
</div>
 <div class="   p-4 rounded-lg shadow-inner  flex justify-center items-center ">

<Input variant="search"  submit="search" />

</div>
</div>
</div>

```md
<Input variant="faded"      title="faded"    />
<Input variant="bordered"   title="bordered" />
<Input variant="shadow"    title="shadow"    />
<Input variant="underline"  title="underline"/>
<Input variant="flat"       title="flat"/>
<Input variant="search"     submit="🔒"  />


```

---
**Size**

you can choice your size
<div class="   p-6 rounded-lg shadow-inner  flex-col flex gap-4 justify-center items-center">

<Input variant="shadow"   title="xl size" size="xl"/>
<Input variant="shadow"   title="lg size" size="lg"/>
<Input variant="shadow"   title="md size" size="md"/>
<Input variant="shadow"   title="sm size" size="sm" />
</div>


**code**

```md
<Input variant="shadow"   title="xl size" size="xl"/>
<Input variant="shadow"   title="lg size" size="lg"/>
<Input variant="shadow"   title="md size" size="md"/>
<Input variant="shadow"   title="sm size" size="sm" />
```


---
**RTL**
<br/>

 can use **RTL** for align text ! 

<div class="   p-6 rounded-lg shadow-inner  flex justify-center items-center">
<Input v-model="inputValueRtl" color="warning"  title="نام خانوادگی"   rtl /> 

</div>

```md
<Input  color="warning" title="نام خانوادگی" rtl /> 


```