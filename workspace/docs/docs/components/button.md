# Button

<script >

import Btn from '../../../ui/src/components/button/Core.vue'; 
</script>

**Button with Custom Effect**
<div class="border-[1px] border-gray-300 p-6 m-6 rounded-lg shadow-lg bg-gray-50 flex justify-center items-center">
    <Btn color="default">Test</Btn>
</div>

**Customize the color as you like or use the default values!**
<Br/>

<div class="grid grid-cols-2 gap-4">
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Btn color="default">Default</Btn>
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Btn color="primary">Primary</Btn>
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Btn color="error">#Error !</Btn>
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Btn color="warning">Warning</Btn>
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Btn color="secondary">Second</Btn>
    </div>
    <div class="border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center">
        <Btn color="random">Random</Btn>
    </div>
</div>
<Br/>
<Br/>

#Code 



The main `<Btn>` tag can be used to selection and using Button

```md
<template>

<Btn color="warning" @click="handleError">you have notification</Btn>

<script >
const handleError = () => {
    alert("test");
}
</script>
```
Results

<div class='border-[1px] border-gray-300 p-4 rounded-lg shadow-inner bg-white flex justify-center items-center'>
  <Btn color="warning" @click="handleError">You have a notification!</Btn>
</div>

<script setup>
const handleError = () => {
  alert("Test notification triggered!");
}
</script>
