<script setup>
import { ref } from 'vue';

const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Props', value: 2, content: '' }
];
const isLoading = ref(true);
const Active = ref(true);
const loadImage = (e) => {
  isLoading.value = !isLoading.value;
};
</script>

# Skeleton Component

The `Skeleton` component is used to display a placeholder preview of your content before the data gets loaded.

## Usage


<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto"
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
>
<template #content1>
<div class="p-6 rounded-lg bg-slate-50/50 flex justify-center items-center flex-col gap-4">
    <Card cardClass="w-96 bg-white">
        <div class="flex flex-col gap-4">
            <Skeleton width='300px' height='100px' class="mx-auto rounded-xl"/>
            <Skeleton width='180px' height='15px' class="ml-8" />
            <Skeleton width='240px' height='15px' class="ml-8"/>
            <Skeleton width='70px' height='15px' class="ml-8"/>
        </div>
    </Card>
</div>
</template>

<template #content2>

  ```md

<Card cardClass="w-96 bg-white">
<div class="flex flex-col gap-4">
<Skeleton width='300px' height='100px' class="mx-auto rounded-xl"/>
<Skeleton width='180px' height='15px' class="ml-8" />
<Skeleton width='240px' height='15px' class="ml-8"/>
<Skeleton width='70px' height='15px' class="ml-8"/>
</div>
</Card>

```
  </template>

</Tab>

## Handle Event
<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto"
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
>
<template #content1>
<div class="p-6 rounded-lg  flex justify-center items-center flex-col gap-4">
    <Card cardClass="w-96  ">
        <div class="flex flex-col gap-4">
            <Skeleton v-if="isLoading" width='350px' height='210px' class="mx-auto rounded-xl"/>
            <Skeleton v-if="isLoading" width='180px' height='15px' class="ml-8 my-2" />
            <Skeleton v-if="isLoading" width='240px' height='15px' class="ml-8 "/>
             <Skeleton v-if="isLoading" width='70px' height='15px' class="ml-8 my-1"/>
            <img v-else src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" alt="Loaded" class="mx-auto rounded-xl"/>
            <h6 v-if="!isLoading" class="ml-8" >Its Demo</h6>
            <h6 v-if="!isLoading" class="ml-8" >For Testing Skeleton Component</h6>
            <h6 v-if="!isLoading" class="ml-8" >MHMD</h6>
            <Button @click="loadImage" buttonClass="mt-4 w-full px-4 py-2  text-white rounded">{{ isLoading ? 'Load' : 'Hide' }} </Button>
        </div>
    </Card>
</div>
</template>

<template #content2>

  ```md

<script setup>
import { ref } from 'vue';

const isLoading = ref(true);
const loadImage = (e) => {
  isLoading.value = !isLoading.value;
};
</script>

  <Card cardClass="w-96  ">
        <div class="flex flex-col gap-4">
            <Skeleton v-if="isLoading" width='350px' height='210px' class="mx-auto rounded-xl"/>
            <Skeleton v-if="isLoading" width='180px' height='15px' class="ml-8 my-2" />
            <Skeleton v-if="isLoading" width='240px' height='15px' class="ml-8 "/>
             <Skeleton v-if="isLoading" width='70px' height='15px' class="ml-8 my-1"/>
            <img v-else src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" alt="Loaded" class="mx-auto rounded-xl"/>
            <h6 v-if="!isLoading" class="ml-8" >Its Demo</h6>
            <h6 v-if="!isLoading" class="ml-8" >For Testing Skeleton Component</h6>
            <h6 v-if="!isLoading" class="ml-8" >MHMD</h6>
            <Button @click="loadImage" buttonClass="mt-4 w-full px-4 py-2  text-white rounded">{{ isLoading ? 'Load' : 'Hide' }} </Button>
        </div>
    </Card>

```
  </template>

</Tab>

## It is already prepared


<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto"
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
>
<template #content1>
<div class="p-6 rounded-lg  flex   flex-col gap-2">
<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2" />
            <Skeleton  width='240px' height='15px' class="mb-6"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 "/>

</div>
<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2" />
            <Skeleton  width='240px' height='15px' class="mb-6"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 "/>

</div>
<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2" />
            <Skeleton  width='240px' height='15px' class="mb-6"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 "/>

</div>
<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2" />
            <Skeleton  width='240px' height='15px' class="mb-6"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 "/>

</div>
</div>
</template>

<template #content2>

  ```md

<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2" />
            <Skeleton  width='240px' height='15px' class="mb-6"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 "/>

</div>
<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2" />
            <Skeleton  width='240px' height='15px' class="mb-6"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 "/>

</div>
<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2" />
            <Skeleton  width='240px' height='15px' class="mb-6"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 "/>

</div>
<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2" />
            <Skeleton  width='240px' height='15px' class="mb-6"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 "/>

</div>
```
  </template>

</Tab>


## Props

| Name     | Type    | Default | Description                        |
|----------|---------|---------|------------------------------------|
| `width`  | String  | `100%`  | The width of the skeleton element. |
| `height` | String  | `20px`  | The height of the skeleton element.|
| `circle` | Boolean | `false` | If true, the skeleton will be circular. |
| `animated` | Boolean | `true` | If false, the skeleton will not animate. |

## Example


