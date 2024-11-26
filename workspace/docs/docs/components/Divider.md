# Divider Component

Simple Usage Divider with `vertical`

<div class="bg-gray-50 p-6 rounded-lg shadow-inner flex w-full justify-between">
  <div class="flex-1 rounded-md p-4"> 
    <p class="bg-gray-200 h-6 w-3/4 rounded"></p>
    <p class="bg-gray-200 h-6 w-1/2 rounded"></p>
    <p class="bg-gray-200 h-6 w-full rounded"></p>
    <p class="bg-gray-200 h-6 w-2/3 rounded"></p>
  </div>

<Divider direction="vertical" length="" text="OR" color="bg-gray-400" />

  <div class="flex-1 rounded-md p-4">
    <p class="bg-gray-200 h-6 w-3/4 rounded"></p>
    <p class="bg-gray-200 h-6 w-1/2 rounded"></p>
    <p class="bg-gray-200 h-6 w-5/6 rounded"></p>
    <p class="bg-gray-200 h-6 w-2/3 rounded"></p>
  </div>
</div>

<br/>

and `horizontal`

<div class="bg-gray-50 p-6 rounded-lg shadow-inner flex flex-col w-full justify-between">
  <div class="flex-1 rounded-md p-4"> 
    <p class="bg-gray-200 h-6 w-2/3 rounded"></p>
    <p class="bg-gray-200 h-6 w-3/4 rounded"></p>
    <p class="bg-gray-200 h-6 w-1/2 rounded"></p>
    <p class="bg-gray-200 h-6 w-full rounded"></p>
  </div>
  <Divider length="250px" text="OR" color="bg-gray-400"/>
  <div class="flex-1 rounded-md p-4">
    <p class="bg-gray-200 h-6 w-3/4 rounded"></p>
    <p class="bg-gray-200 h-6 w-1/2 rounded"></p>
    <p class="bg-gray-200 h-6 w-5/6 rounded"></p>
    <p class="bg-gray-200 h-6 w-2/3 rounded"></p>
  </div>
</div>

**Code**

```md
<div class="bg-gray-50 p-6 rounded-lg shadow-inner
 flex w-full justify-between">
  <div class="flex-1 rounded-md p-4"> 
<p class="bg-gray-200 h-6 w-3/4 rounded"></p>
<p class="bg-gray-200 h-6 w-1/2 rounded"></p>
<p class="bg-gray-200 h-6 w-full rounded"></p>
<p class="bg-gray-200 h-6 w-2/3 rounded"></p>
  </div>

<Divider 
direction="vertical"
 length="100px" 
 text="OR" 
 color="bg-gray-400" />

<div class="flex-1 rounded-md p-4">
 <p class="bg-gray-200 h-6 w-3/4 rounded"></p>
 <p class="bg-gray-200 h-6 w-1/2 rounded"></p>
 <p class="bg-gray-200 h-6 w-5/6 rounded"></p>
 <p class="bg-gray-200 h-6 w-2/3 rounded"></p>
  </div>
</div>
```