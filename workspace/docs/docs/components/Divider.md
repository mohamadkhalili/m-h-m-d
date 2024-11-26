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

## Multi
<div class="bg-gray-50 p-6 rounded-lg shadow-inner
 flex w-full justify-between">
     <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-medium font-medium">MHMD Components</h4>
        <p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>
      </div>
      <Divider className="my-4"  />
      <div className="flex h-5 items-center space-x-4 text-small">
        <p>Blog</p>
    <Divider direction="vertical" length="20px" text=" " color="bg-gray-400"  />
        <div>Docs</div>
    <Divider direction="vertical" length="20px" text=" "  color="bg-gray-400" />
        <p >Source</p>
      </div>
    </div>

</div>
