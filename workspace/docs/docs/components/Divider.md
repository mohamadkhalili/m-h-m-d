
# Divider Component

The `Divider` component is a versatile tool for separating content in both vertical and horizontal layouts. It can include text, adapt to custom colors and thickness, and fit various lengths based on your design requirements.



## Vertical Divider Example  
A simple `vertical` divider used in a flex container:  

<div class="bg-gray-50 p-6 rounded-lg shadow-inner flex w-full justify-between">
  <div class="flex-1 rounded-md p-4"> 
    <p class="bg-gray-200 h-6 w-3/4 rounded"></p>
    <p class="bg-gray-200 h-6 w-1/2 rounded"></p>
    <p class="bg-gray-200 h-6 w-full rounded"></p>
    <p class="bg-gray-200 h-6 w-2/3 rounded"></p>
  </div>

<Divider direction="vertical" length="100px" text="OR" color="bg-gray-400" diameter="1px" />

  <div class="flex-1 rounded-md p-4">
    <p class="bg-gray-200 h-6 w-3/4 rounded"></p>
    <p class="bg-gray-200 h-6 w-1/2 rounded"></p>
    <p class="bg-gray-200 h-6 w-5/6 rounded"></p>
    <p class="bg-gray-200 h-6 w-2/3 rounded"></p>
  </div>
</div>


## Horizontal Divider Example  
A `horizontal` divider with text and a specific length:  

<div class="bg-gray-50 p-6 rounded-lg shadow-inner flex flex-col w-full justify-between">
  <div class="flex-1 rounded-md p-4"> 
    <p class="bg-gray-200 h-6 w-2/3 rounded"></p>
    <p class="bg-gray-200 h-6 w-3/4 rounded"></p>
    <p class="bg-gray-200 h-6 w-1/2 rounded"></p>
    <p class="bg-gray-200 h-6 w-full rounded"></p>
  </div>
  <Divider length="250px" text="OR" color="bg-gray-400" diameter="1px"/>
  <div class="flex-1 rounded-md p-4">
    <p class="bg-gray-200 h-6 w-3/4 rounded"></p>
    <p class="bg-gray-200 h-6 w-1/2 rounded"></p>
    <p class="bg-gray-200 h-6 w-5/6 rounded"></p>
    <p class="bg-gray-200 h-6 w-2/3 rounded"></p>
  </div>
</div>

**Code**

```md
<div class="bg-gray-50 p-6 rounded-lg shadow-inner flex w-full justify-between">
  <div class="flex-1 rounded-md p-4"> 
    <p class="bg-gray-200 h-6 w-3/4 rounded"></p>
    <p class="bg-gray-200 h-6 w-1/2 rounded"></p>
    <p class="bg-gray-200 h-6 w-full rounded"></p>
    <p class="bg-gray-200 h-6 w-2/3 rounded"></p>
  </div>

<Divider direction="vertical"
  length="100px"
  text="OR"
  color="bg-gray-400"
  diameter="1px" />

  <div class="flex-1 rounded-md p-4">
    <p class="bg-gray-200 h-6 w-3/4 rounded"></p>
    <p class="bg-gray-200 h-6 w-1/2 rounded"></p>
    <p class="bg-gray-200 h-6 w-5/6 rounded"></p>
    <p class="bg-gray-200 h-6 w-2/3 rounded"></p>
  </div>
</div>


```

## Colors

The `Divider` component supports custom colors through the `color`  and `textColor` props.  


<Divider direction="horizontal" length="300px" text="VS" textColor="text-red-500" color="bg-red-500"  class="my-8" />
<Divider direction="horizontal" length="300px" text="VS" textColor="text-yellow-500" color="bg-yellow-500" class="my-8" />
<Divider direction="horizontal" length="300px" text="VS" textColor="text-blue-500" color="bg-blue-500" class="my-8"  />
<Divider direction="horizontal" length="300px" text="VS" textColor="text-green-500" color="bg-green-500" class="my-8"  />
<Divider direction="horizontal" length="300px" text="VS" textColor="text-purple-500" color="bg-purple-500" class="my-8"  />

**Code**

```md
<Divider direction="horizontal"  text="VS" textColor="text-red-500" color="bg-red-500"  class="my-8" />
<Divider direction="horizontal" text="VS" textColor="text-yellow-500" color="bg-yellow-500" class="my-8" />
<Divider direction="horizontal" text="VS" textColor="text-blue-500" color="bg-blue-500" class="my-8"  />
<Divider direction="horizontal" text="VS" textColor="text-green-500" color="bg-green-500" class="my-8"  />
<Divider direction="horizontal" text="VS" textColor="text-purple-500" color="bg-purple-500" class="my-8"  />

```
## **Diameter**

The `diameter` prop defines the thickness of the divider:

<div class="flex justify-around">
<Divider direction="vertical" diameter="1px"  length="100px" text="VS" textColor="text-red-500" color="bg-red-500"  class="my-8" />
<Divider direction="vertical" diameter="2px" length="100px" text="VS" textColor="text-yellow-500" color="bg-yellow-500" class="my-8" />
<Divider direction="vertical" diameter="3px" length="100px" text="VS" textColor="text-blue-500" color="bg-blue-500" class="my-8"  />
<Divider direction="vertical" diameter="4px" length="100px" text="VS" textColor="text-green-500" color="bg-green-500" class="my-8"  />
<Divider direction="vertical" diameter="5px" length="100px" text="VS" textColor="text-purple-500" color="bg-purple-500" class="my-8"  />
</div>

**Code**

```md
<div class="flex justify-around">
<Divider direction="vertical" diameter="1px"  length="100px" text="VS" textColor="text-red-500" color="bg-red-500"  class="my-8" />
<Divider direction="vertical" diameter="2px" length="100px" text="VS" textColor="text-yellow-500" color="bg-yellow-500" class="my-8" />
<Divider direction="vertical" diameter="3px" length="100px" text="VS" textColor="text-blue-500" color="bg-blue-500" class="my-8"  />
<Divider direction="vertical" diameter="4px" length="100px" text="VS" textColor="text-green-500" color="bg-green-500" class="my-8"  />
<Divider direction="vertical" diameter="5px" length="100px" text="VS" textColor="text-purple-500" color="bg-purple-500" class="my-8"  />
</div>
```




## Multi
<div class="bg-gray-50 p-6 rounded-lg shadow-inner
 flex w-full justify-between">
     <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-medium font-medium">MHMD Components</h4>
        <p className="text-small text-default-400">Beautiful, fast and modern Vue UI library.</p>
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

**Code**

```md
<div class="bg-gray-50 p-6 rounded-lg shadow-inner
 flex w-full justify-between">
     <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-medium font-medium">MHMD Components</h4>
        <p className="text-small text-default-400">
        Beautiful,fast and modern Vue UI library
        </p>
      </div>
      <Divider className="my-4"  />
      <div className="flex h-5 items-center space-x-4 text-small">
        <p>Blog</p>
    <Divider direction="vertical" length="20px" text=" "color="bg-gray-400" />
        <div>Docs</div>
    <Divider direction="vertical" length="20px" text=" "color="bg-gray-400"/>
        <p >Source</p>
      </div>
    </div>

</div>
```

## **Props Table**

| **Prop**    | **Type**                        | **Default**        | **Description**                                           |
|-------------|---------------------------------|--------------------|-----------------------------------------------------------|
| `direction` | `'horizontal' | 'vertical'`     | `'horizontal'`     | Specifies the divider's orientation.                     |
| `color`     | `string`                        | `'bg-gray-400'`    | Background color of the divider.                         |
| `diameter`  | `string`                        | `'1px'`            | Thickness of the divider.                                |
| `length`    | `string`                        | `'100%'`           | Length of the divider.                                    |
| `text`      | `string`                        | `' '`              | Text displayed in the middle of the divider (if any).    |

---

Enjoy building with the `Divider` component! 🎉