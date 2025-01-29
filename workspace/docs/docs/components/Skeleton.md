<script setup>
import { ref } from 'vue';

const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Props', value: 2, content: '' }
];
const Active = ref(true);

</script>

# Skeleton Component

The `Skeleton` component is used to display a placeholder preview of your content before the data gets loaded.

## Usage

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg bg-slate-50/50 flex justify-center items-center flex-col gap-4'>
    <Card cardClass='w-96 bg-white'>
        <div class='flex flex-col gap-4'>
            <Skeleton width='300px' height='100px' class='mx-auto rounded-xl'/>
            <Skeleton width='180px' height='15px' class='ml-8 rounded-md' />
            <Skeleton width='240px' height='15px' class='ml-8 rounded-md'/>
            <Skeleton width='70px' height='15px' class='ml-8 rounded-md'/>
        </div>
    </Card>
</div>
"
  scriptCode="
export default {
data() {
    return {
    }
  },
methods: {
}
}
}
"
/>



## Handle Event

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg flex justify-center items-center flex-col gap-4'>
    <Card cardClass='w-96'>
        <div class='flex flex-col gap-4'>
            <Skeleton v-if='isLoading' width='350px' height='210px' class='mx-auto rounded-xl'/>
            <Skeleton v-if='isLoading' width='180px' height='15px' class='ml-8 my-2 rounded-md' />
            <Skeleton v-if='isLoading' width='240px' height='15px' class='ml-8 rounded-md'/>
            <Skeleton v-if='isLoading' width='70px' height='15px' class='ml-8 my-1 rounded-md'/>
            <img v-else src='https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true' alt='Loaded' class='mx-auto rounded-xl'/>
            <h6 v-if='!isLoading' class='ml-8'>Its Demo</h6>
            <h6 v-if='!isLoading' class='ml-8'>For Testing Skeleton Component</h6>
            <h6 v-if='!isLoading' class='ml-8'>MHMD</h6>
            <Button @click='loadImage' buttonClass='mt-4 w-full px-4 py-2 text-white rounded'>{{ isLoading ? 'Load' : 'Hide' }}</Button>
        </div>
    </Card>
</div>
"
  scriptCode="
export default {
  data() {
    return {
      isLoading: true // Define isLoading in data
    };
  },
  methods: {
    loadImage() {
      this.isLoading = !this.isLoading; // Toggle the loading state
    }
  }
}
"
/>

## Chat example

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
            <Skeleton  width='180px' height='15px' class="my-2 rounded-md" />
            <Skeleton  width='240px' height='15px' class="mb-6 rounded-md"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 rounded-md "/>

</div>
<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2 rounded-md" />
            <Skeleton  width='240px' height='15px' class="mb-6 rounded-md"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 rounded-md"/>

</div>
<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2 rounded-md" />
            <Skeleton  width='240px' height='15px' class="mb-6 rounded-md"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 rounded-md"/>

</div>
<div class="flex justify-between border-b-2 m-4 rounded-md">
<div>
            <Skeleton  width='180px' height='15px' class="my-2 rounded-md" />
            <Skeleton  width='240px' height='15px' class="mb-6 rounded-md"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 rounded-md"/>

</div>
</div>
</template>

<template #content2>

  ```md

<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2 rounded-md" />
            <Skeleton  width='240px' height='15px' class="mb-6 rounded-md"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 rounded-md"/>

</div>
<div class="flex justify-between border-b-2 m-4">
<div>
            <Skeleton  width='180px' height='15px' class="my-2 rounded-md" />
            <Skeleton  width='240px' height='15px' class="mb-6 rounded-md"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 rounded-md"/>

</div>
<div class="flex justify-between border-b-2 m-4 rounded-md">
<div>
            <Skeleton  width='180px' height='15px' class="my-2  rounded-md" />
            <Skeleton  width='240px' height='15px' class="mb-6 rounded-md"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 rounded-md"/>

</div>
<div class="flex justify-between border-b-2 m-4 rounded-md">
<div>
            <Skeleton  width='180px' height='15px' class="my-2 rounded-md" />
            <Skeleton  width='240px' height='15px' class="mb-6 rounded-md"/>
</div>
            <Skeleton  width='80px' height='15px' class="mt-4 rounded-md"/>

</div>
```

  </template>

</Tab>

## Post example

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto"
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
>
<template #content1>
<div class="p-6 rounded-lg grid grid-cols-2 gap-8">
    <div class="grid h-80 p-4 shadow-xl grid-cols-2 grid-rows-2 gap-4">
        <Skeleton width='50px' height='50px' class="rounded-full" />
        <Skeleton width='50px' height='25px' class="rounded mt-4" />
        <Skeleton width='100px' height='25px' class="rounded mt-4" />
        <Skeleton width='100px' height='25px' class="rounded mt-4" />
        <Skeleton width='250px' height='140px' class="rounded  col-span-2" />
    </div>
    <div class="grid h-80 p-4 shadow-xl grid-cols-2 grid-rows-2 gap-4">
        <img src="https://avatar.iran.liara.run/public/46" width='50px' height='50px' class="rounded-full" />
        <h5  class="rounded mt-4 "> Jonas</h5>
        <p width='100px' height='25px' class="rounded mt-4 text-sm text-gray-500" >last update </p>
        <p width='100px' height='25px' class="rounded mt-4 text-xs text-gray-500" >2024/07/21</p>
        <img src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" alt="Loaded" class="col-span-2 rounded-md  object-cover" />
    </div>
</div>

</template>

<template #content2>

  ```md
<div class="grid h-80 p-4 shadow-xl grid-cols-2 grid-rows-2 gap-4">
        <Skeleton width='50px' height='50px' class="rounded-full" />
        <Skeleton width='50px' height='25px' class="rounded mt-4" />
        <Skeleton width='100px' height='25px' class="rounded mt-4" />
        <Skeleton width='100px' height='25px' class="rounded mt-4" />
        <Skeleton width='250px' height='140px' class="rounded  col-span-2" />
    </div>
```

  </template>

</Tab>

## Props

| **Feature**             | **Description**                                                                                                   | **Usage**                                                                                   |
|-------------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Width**               | Sets the width of the skeleton element.                                                                           | Pass the `width` prop with a string value (e.g., `100%`, `300px`, etc.).                   |
| **Height**              | Sets the height of the skeleton element.                                                                          | Pass the `height` prop with a string value (e.g., `20px`, `100px`, etc.).                  |
| **Animated**            | Controls the animation of the skeleton element.                                                                   | Set the `animated` prop to `false` to disable the animation.                               |
| **Class**               | Adds custom CSS classes to the skeleton element for further styling.                                              | Pass any additional classes using the `class` prop.                                        |
| **Default Skeleton**    | Basic skeleton that serves as a loading placeholder.                                                              | Use the `Skeleton` component with `width` and `height` props to display a placeholder.      |
| **Custom Skeleton**     | Customize the skeleton’s appearance with unique sizes and animations.                                             | Combine `width`, `height` and `animated` props to tailor the skeleton.          |
