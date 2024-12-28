<script setup>
import { ref, watch } from 'vue';

const tabs = [
    { label: 'Ui', value: 1, content: '' },
    { label: 'Slots', value: 2, content: '' },
    { label: 'Props', value: 3, content: '' }
];
const Timer = ref(0);
const RealTime = ref(0);

const updateTimer = (time) => {
    RealTime.value = time;
};
</script>

## Countdown Component

The Countdown component is a flexible and reusable timer component built with Vue 3 and TypeScript. It supports features like auto-start, time updates, and custom controls.

<Tab 
     class="gap-3 border-[1px] rounded-md w-full mx-auto "
     :tabs="[ { label: 'Ui', value: 1, content: '' }, { label: 'Props', value: 3, content: '' }]" 
     variant="bordered"
     size="sm"
     activeColor="text-blue-500 shadow-blue-500"
>

<template #content1>
<div class="py-10 rounded-lg shadow-inner flex justify-center items-center">
    <CountDown :time="110" auto-start format="hh:mm:ss" class='text-6xl font-thin' />
</div>
</template>

<template #content3>

```md
<CountDown :time=110 auto-start class='text-6xl font-thin'/>
```
</template>

</Tab>

## Modify the Styles

You can easily customize the appearance of the Countdown component by using the following CSS classes:

- `container`: Adjust the main container styling.
- `countDownClass`: Customize the countdown timer display styles.

<Tab 
     class="gap-3 border-[1px] rounded-md w-full mx-auto "
     :tabs="[ { label: 'Ui', value: 1, content: '' }, { label: 'Slots', value: 3, content: '' }]" 
     variant="bordered"
     size="sm"
     activeColor="text-blue-500 shadow-blue-500"
>

<template #content1>
<div class="py-10 px-2 rounded-lg shadow-inner justify-items-center">
    <CountDown :time="45" :auto-start="false" format="hh mm ss" class="font-thin text-6xl" >
        <template #controls="{ isRunning, start, reset }">
        <div class="flex gap-4 mt-10">
            <Button @click="start" buttonClass="bg-blue-500 font-normal">
                {{ isRunning ? 'Running' : 'Start' }}
            </Button>
            <Button @click="reset" buttonClass="bg-red-500 font-normal">Stop</Button>
        </div>
        </template>
    </CountDown>
</div>
</template>

<template #content3>

```md
<CountDown :time="45" :auto-start="false" class="font-semibold text-6xl">
<template #controls="{ isRunning, start, reset }">
<div class="flex gap-4 mt-10">
<Button @click="start" buttonClass=" bg-blue-500  font-normal ">
{{ isRunning ? 'Running' : 'Start' }}
 </Button>
<Button @click="reset" buttonClass="bg-red-500  font-normal">Stop</Button>
</div>
</template>
</CountDown>
```
</template>

</Tab>

## Formats
<Tab 
     class="gap-3 border-[1px] rounded-md w-full mx-auto "
     :tabs="[ { label: 'Ui', value: 1, content: '' }, { label: 'Props', value: 3, content: '' }]" 
     variant="bordered"
     size="sm"
     activeColor="text-blue-500 shadow-blue-500"
>

<template #content1>
<div class="py-10 gap-4 rounded-lg shadow-inner grid grid-cols-1 justify-items-center">
    <CountDown :time=4400 auto-start class='text-2xl  text-purple-900 ' format="hh hours mm minutes ss seconds"/>
    -
    <CountDown :time=4400 auto-start class='text-2xl  text-rose-900 ' format="hhH mmM ssS"/>
    -
    <CountDown :time=4400 auto-start class='text-2xl  text-yellow-900 ' format="default"/>
    -
    <CountDown :time=4400 auto-start class='text-2xl  text-green-900 ' format="hh mm ss"/>
</div>
</template>

<template #content3>

```md
<CountDown :time=4400 auto-start class='text-2xl  ' format="hh hours mm minutes ss seconds"/>
<CountDown :time=4400 auto-start class='text-2xl  ' format="hhH mmM ssS"/>
<CountDown :time=4400 auto-start class='text-2xl  ' format="default"/>
<CountDown :time=4400 auto-start class='text-2xl  ' format="hh mm ss"/>
```
</template>

</Tab>

## Handle Events 
<Tab 
     class="gap-3 border-[1px] rounded-md w-full mx-auto "
     :tabs="[ { label: 'Ui', value: 1, content: '' }, { label: 'Props', value: 3, content: '' }]" 
     variant="bordered"
     size="sm"
     activeColor="text-blue-500 shadow-blue-500"
>

<template #content1>
 <CountDown 
            :time="3630" 
            auto-start 
            class="text-4xl font-sans text-gray-600" 
            format="hh hours mm ss" 
            @update:time="updateTimer"
        />
        <div class="py-10 gap-4 rounded-lg shadow-inner grid grid-cols-2 justify-items-center">
            <p><span class="text-yellow-600">{{ RealTime }}</span> remaining</p>
            <p><span class="text-yellow-600">{{3630- RealTime }}</span> passed</p>
        </div>
</template>

<template #content3>

```md
 <CountDown 
    :time="3700" 
     auto-start 
    class="text-4xl font-sans text-gray-600" 
    format="hh hours mm ss" 
    @update:time="updateTimer"
        />
<div class="py-10 gap-4 rounded-lg shadow-inner grid grid-cols-2 justify-items-center">
     <p><span class="text-yellow-600">{{ RealTime }}</span> remaining</p>
    <p><span class="text-yellow-600">{{3700- RealTime }}</span> passed</p>
</div>

<script setup>
    const updateTimer = (time) => {
    RealTime.value = time;
};
</script>
```
</template>

</Tab>

## Countdown Component Features

| **Feature**             | **Description**                                                                                         | **Usage**                                                                                     |
|--------------------------|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Custom Controls**      | Add custom buttons for controlling the countdown.                                                      | Use the `controls` slot to define buttons for start, pause, and reset.                        |
| **Auto Start**           | Automatically starts the countdown when the component is mounted.                                      | Use the `autoStart` prop and set it to `true`.                                                |
| **Event Handling**       | Handle time updates and countdown finish events in the parent component.                              | Listen to the `update:time` and `finish` events to execute custom logic.                      |
| **Styling Flexibility**  | Fully customizable styles for the countdown timer and controls.                                        | Use the CSS classes `container` and `display` to adjust the appearance.                       |

This documentation provides a structured and detailed guide to using and customizing the Countdown component effectively.
```
