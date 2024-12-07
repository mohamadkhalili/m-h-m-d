<script setup>


const tabs = [
  { label: 'demo', value: 1, content: '' },
  { label: 'slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''}


]
</script>


## Input 



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


## Modify 



<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >

<template #content1>

<div class=" py-10 px-2 rounded-lg  shadow-inner grid  grid-cols-2 gap-12 justify-items-center">
  
<Input  prefix="➥" suffix='🗙' placeholder='search' InputClass="rounded-full ring-2  "/>
<Input prefix="👤"   placeholder="password" InputClass="shadow-blue-200 shadow-inner" />
<Input  label="User name" InputClass="shadow-[1px_4px_2px_-2px_rgba(34,_197,_94,_0.5)] " LabelInputClass=' top-12 left-[84px] rounded-full  px-2  bg-transparent '/>
<Input label="Gmail"  LabelInputClass=' top-[-10px] left-8 rounded-full bg-white  px-2  text-sm '  />


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

