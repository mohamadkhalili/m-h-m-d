# Navbar

<script setup lang="ts">
import { ref } from 'vue'
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''}
];
const footerEnable = ref(true);
</script>

## Usage
- This is the basic Navbar that opens when the button is clicked.

<Tab 
     class="gap-3 border-[1px] rounded-md w-full mx-auto"
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<div class="p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center">

<Card cardClass="flex items-center justify-between w-full bg-white shadow-md">
<template #description>
        <div class="flex items-center w-full justify-around space-x-16">
<div class="mr-4">
<h5>MHMD</h5>
</div>
    <div class="flex gap-4 text-sm">
    <label class="cursor-pointer hover:text-gray-400 transition-all duration-300">Home</label>
    <label class="cursor-pointer hover:text-gray-400 transition-all duration-300">Product</label>
    <label class="cursor-pointer hover:text-gray-400 transition-all duration-300">About</label>
    </div>
    <div class="scale-90">
    <Input prefix="➥" suffix='🗙' placeholder='search' InputClass="rounded-full w-44 h-10"/>
    </div>
 </div>
</template>
  </Card>
</div>
</template>

<template #content2>

 ```md
 <Card cardClass="flex items-center justify-between w-full bg-white shadow-md">
 <template #description>
<div class="flex items-center w-full justify-around space-x-16">
<div class="mr-4">
<h5>MHMD</h5>
</div>
    <div class="flex gap-4 text-sm">
    <label class="cursor-pointer hover:text-gray-400 transition-all duration-300">
    Home</label>
    <label class="cursor-pointer hover:text-gray-400 transition-all duration-300">
    Product</label>
    <label class="cursor-pointer hover:text-gray-400 transition-all duration-300">
    About</label>
    </div>
    <div class="scale-90">
    <Input prefix="➥" suffix='🗙' placeholder='search' InputClass="rounded-full w-44 h-10"/>
    </div>
 </div>
</template>
  </Card>
```
</template>

<template #content3>
```md
```
</template>
</Tab>

<Tab 
     class="gap-3 border-[1px] rounded-md w-full mx-auto"
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>



<Card class="bg-white  border-gray-200 dark:bg-gray-900 shadow-none">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MHMD</span>
  <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        🇺🇸 English (US)
      </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <label href="#" class="block py-2 px-3 text-white 0 rounded md:bg-transparent" aria-current="page">Home</label>
      </li>
      <li>
        <label href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</label>
      </li>
      <li>
        <label href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</label>
      </li>
    </ul>
  </div>
  </div>
</Card>

</template>
<template #content2>

 ```md
 <Card class="bg-white  border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MHMD</span>
  <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
       <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        🇺🇸 English (US)
      </button>
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
        <ul class="py-2 font-medium" role="none">
          <li>
              <div class="inline-flex items-center">            
                English (US)
              </div>
              </li>
        </ul>
  </div>

  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <label href="#" class="block py-2 px-3 text-white 0 rounded md:bg-transparent" aria-current="page">Home</label>
      </li>
      <li>
        <label href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</label>
      </li>
      <li>
        <label href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</label>
      </li>
    </ul>
  </div>
  </div>
</Card>
```
</template>

<template #content3>
```md
```
</template>
</Tab>

