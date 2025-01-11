# Progress Circular

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];
const tabsInstalling = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Props', value: 2, content: ''},
  { label: 'Script', value: 3, content: ''},
];
const progressValue = ref(50);
const progressValue2 = ref(64);
const progressValue3 = ref(0);
const progressValue4 = ref(0);
const progressValue5 = ref(0);
const progressValue6 = ref(60);

let loopingInterval: ReturnType<typeof setInterval> | null = null;
let loopingInterval2: ReturnType<typeof setInterval> | null = null;
let loopingInterval3: ReturnType<typeof setInterval> | null = null;
let isPaused = false;
let isPaused2 = false;
let isPaused3 = false;
const startLoopingProgress3 = () => {
  loopingInterval3 = setInterval(() => {
    if (isPaused3) return;
    progressValue3.value += 1;
    if (progressValue3.value == 10) {
      isPaused3 = true;
      setTimeout(() => {
        isPaused3 = false;
      }, 1000);
    }
    if (progressValue3.value == 20) {
      isPaused3 = true;
      setTimeout(() => {
        isPaused3 = false;
      }, 1000);
    }
    if (progressValue3.value == 30) {
      isPaused3 = true;
      setTimeout(() => {
        isPaused3 = false;
      }, 1000);
    }
    if (progressValue3.value == 40) {
      isPaused3 = true;
      setTimeout(() => {
        isPaused3 = false;
      }, 1000);
    }
    if (progressValue3.value == 50) {
      isPaused3 = true;
      setTimeout(() => {
        isPaused3 = false;
      }, 1000);
    }
    if (progressValue3.value == 60) {
      isPaused3 = true;
      setTimeout(() => {
        isPaused3 = false;
      }, 1000);
    }
    if (progressValue3.value == 70) {
      isPaused3 = true;
      setTimeout(() => {
        isPaused3 = false;
      }, 1000);
    }
    if (progressValue3.value == 80) {
      isPaused3 = true;
      setTimeout(() => {
        isPaused3 = false;
      }, 1000);
    }
    if (progressValue3.value == 90) {
      isPaused3 = true;
      setTimeout(() => {
        isPaused3 = false;
      }, 1000);
    }
    if (progressValue3.value == 100) {
      isPaused3 = true;
      setTimeout(() => {
      progressValue3.value = 0;
        isPaused3 = false;
      }, 1000);
    }

  }, 15);
};
const startLoopingProgress4 = () => {
  loopingInterval = setInterval(() => {
    if (isPaused) return;
    progressValue4.value += 1;
    if (progressValue4.value == 33) {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
      }, 500);
    }
    if (progressValue4.value == 66) {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
      }, 500);
    }
    if (progressValue4.value == 100) {
      isPaused = true;
      setTimeout(() => {
      progressValue4.value = 0;
        isPaused = false;
      }, 1000);
    }

  }, 15);
};
const startLoopingProgress5 = () => {
  loopingInterval2 = setInterval(() => {
    if (isPaused2) return;
    progressValue5.value += 1;
    if (progressValue5.value == 100) {
      isPaused2 = true;
      setTimeout(() => {
      progressValue5.value = 0;
        isPaused2 = false;
      }, 1000);
    }

  }, 25);
};
onMounted(() => {
  startLoopingProgress3();
  startLoopingProgress4();
  startLoopingProgress5();
});

onUnmounted(() => {
  if (loopingInterval) clearInterval(loopingInterval);
  if (loopingInterval2) clearInterval(loopingInterval2);
  if (loopingInterval3) clearInterval(loopingInterval3);
});
</script>

## Default Progress

**Props:**

- `v-model`: Binds the progress value.

**Usage:**

- This is the basic progress bar that adjusts its value dynamically when v-model is updated.
<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
>
<template #content1>
<div class="flex justify-center item-center">
<ProgressCircular v-model="progressValue"/>
</div>

</template>

<template #content2>

```vue
<slot name="progress"></slot>
<slot name="numberFill"></slot>
```

</template>
<template #content3>

```vue
<ProgressCircular v-model="progressValue"/>
```

</template>
</Tab>

## Progress With Show Number Fill

**Props:**

- `showNumberFill`: Determines whether the progress value is displayed as a percentage inside the circular progress bar. Accepts a boolean value (true to display the value, false to hide it).

**Usage:**

- This is a dynamic circular progress bar. The progress value can be updated dynamically using v-model, and the current progress percentage is displayed inside the bar when showNumberFill is set to true.
<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
>
<template #content1>
<div class="flex justify-center item-center">
<ProgressCircular v-model="progressValue2" showNumberFill="true"/>
</div>

</template>

<template #content2>

```vue
<slot name="progress"></slot>
<slot name="numberFill"></slot>
```

</template>
<template #content3>

```vue
<ProgressCircular v-model="progressValue" showNumberFill="true"/>
```

</template>
</Tab>

## Progress With Rotate

**Props:**

- `rotate`: Determines the starting position of the circular progress bar. Accepts a degree value (0, 90, 180, 270, etc.) to set the starting angle of the progress.

**Usage:**

- This is a dynamic circular progress bar that adjusts its value using v-model. The rotate prop allows you to customize the starting point of the progress arc. Combined with showNumberFill, the progress percentage can also be displayed inside the bar.
<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
>
<template #content1>
<div class="flex items-center justify-center space-x-4">
<ProgressCircular v-model="progressValue3" showNumberFill="true"/>
<ProgressCircular v-model="progressValue3" rotate="90" showNumberFill="true"/>
<ProgressCircular v-model="progressValue3" rotate="180" showNumberFill="true"/>
<ProgressCircular v-model="progressValue3" rotate="270" showNumberFill="true"/>
</div>
</template>

<template #content2>

```vue
<slot name="progress"></slot>
<slot name="numberFill"></slot>
```

</template>
<template #content3>

```vue
<div class="flex items-center justify-center space-x-4">
<ProgressCircular v-model="progressValue3" 
showNumberFill="true"/>
<ProgressCircular v-model="progressValue3" 
rotate="90" showNumberFill="true"/>
<ProgressCircular v-model="progressValue3" 
rotate="180" showNumberFill="true"/>
<ProgressCircular v-model="progressValue3" 
rotate="270" showNumberFill="true"/>
```

</template>
</Tab>

## Example For Installing Progress

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabsInstalling"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
    <div class="flex flex-col items-center">
      <span class="mb-3 text-sm font-medium">installing Progress:</span>
      <ProgressCircular v-model="progressValue4" />
    </div>
    <div class="flex flex-col items-center">
      <span class="mb-3 text-sm font-medium">installing Progress:</span>
      <ProgressCircular v-model="progressValue5" />
    </div>

</template>

<template #content2>

```vue
<ProgressLinear v-model="progressValue" />
```

</template>
<template #content3>

```vue
let loopingInterval: ReturnType<typeof setInterval> | null = null;
let isPaused = false;
let isPaused2 = false;

const startLoopingProgress = () => {
  loopingInterval = setInterval(() => {
    if (isPaused) return; 
    progressValue.value += 1;
    if (progressValue.value == 33) {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
      }, 500);
    }
    if (progressValue.value == 66) {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
      }, 500);
    }
    if (progressValue.value == 100) {
      isPaused = true;
      setTimeout(() => {
      progressValue.value = 0;
        isPaused = false;
      }, 1000);
    }
    
  }, 15);
};
const startLoopingProgress2 = () => {
  loopingInterval = setInterval(() => {
    if (isPaused2) return; 
    progressValue.value += 1;
    if (progressValue3.value == 100) {
      isPaused2 = true;
      setTimeout(() => {
      progressValue3.value = 0;
        isPaused2 = false;
      }, 1000);
    }
    
  }, 25);
};
onMounted(() => {
  startLoopingProgress();
  startLoopingProgress2();
});

onUnmounted(() => {
  if (loopingInterval) clearInterval(loopingInterval);
});
```

</template>
</Tab>

## Progress With Custom Class

**Props:**

- `progressClass`: Allows you to apply custom classes to the outer progress bar container for styling (e.g., size, positioning, and general layout).
- `progressFillClass`: Customizes the filled portion of the progress bar, enabling color and animation effects.
- `progressContainerClass` : Adds custom classes to the container that wraps the entire progress bar, allowing you to define overall styling.
- `numberFillClass` : Customizes the appearance of the percentage text displayed inside the progress bar (e.g., font size, color, and alignment).

**Usage:**

- This example demonstrates how to customize the circular or linear progress bar, including the progress container, the filled portion, and the percentage text, by applying Tailwind classes. The numberFillClass prop allows for precise styling of the percentage text inside the progress bar.
<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
>
<template  #content1>
<button :disabled="progressValue6 === 0"  @click="progressValue6 >= 10 ? progressValue6 = progressValue6 - 10 : progressValue6 = 0" class="mb-10 size-10 bg-black text-white rounded-lg p-2 mt-1 mr-40" cleaner>-</button>
<button :disabled="progressValue6 === 100" @click="progressValue6 <= 90 ? progressValue6 = progressValue6 + 10 : progressValue6 = 100" class="mb-10 size-10 bg-black text-white rounded-lg p-2 mt-1 ml-[390px]" cleaner>+</button>
<div class="flex justify-center item-center">
<ProgressCircular v-model="progressValue6" progressClass="w-32 h-32" progressContainerClass="text-emerald-100" progressFillClass="text-emerald-600 transition-all duration-300" showNumberFill="true" numberFillClass="text-emerald-600"/>
</div>
</template>

<template #content2>

```vue
<slot name="progress"></slot>
<slot name="progressFill"></slot>
```

</template>
<template #content3>

```vue
<ProgressCircular v-model="progressValue6" 
progressClass="ml-60 w-32 h-32" 
progressContainerClass="text-emerald-100" 
progressFillClass="text-emerald-600 transition-all duration-300" 
showNumberFill="true" numberFillClass="text-emerald-600"/>
```

</template>
</Tab>
