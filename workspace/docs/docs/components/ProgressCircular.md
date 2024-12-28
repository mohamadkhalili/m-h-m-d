# Progress Linear
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
const progressValue = ref(40);
const progressValue2 = ref(0);
const progressValue3 = ref(0);
const progressValue4 = ref(60);
const progressValue5 = ref(60);
const progressValue6 = ref(60);

let loopingInterval: ReturnType<typeof setInterval> | null = null;
let loopingInterval2: ReturnType<typeof setInterval> | null = null;
let isPaused = false;
let isPaused2 = false;

const startLoopingProgress2 = () => {
  loopingInterval = setInterval(() => {
    if (isPaused) return; 
    progressValue2.value += 1;
    if (progressValue2.value == 33) {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
      }, 500);
    }
    if (progressValue2.value == 66) {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
      }, 500);
    }
    if (progressValue2.value == 100) {
      isPaused = true;
      setTimeout(() => {
      progressValue2.value = 0;
        isPaused = false;
      }, 1000);
    }
    
  }, 15);
};
const startLoopingProgress3 = () => {
  loopingInterval2 = setInterval(() => {
    if (isPaused2) return; 
    progressValue3.value += 1;
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
  startLoopingProgress2();
  startLoopingProgress3();
});

onUnmounted(() => {
  if (loopingInterval) clearInterval(loopingInterval);
  if (loopingInterval2) clearInterval(loopingInterval2);
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
<template #content1>
<ProgressLinear v-model="progressValue"/>

</template>

<template #content2>

```vue
<slot name="progress"></slot>
<slot name="progressFill"></slot>
```

</template>
<template #content3>

```vue
<ProgressLinear v-model="progressValue"/>
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
      <ProgressLinear v-model="progressValue2" />
    </div>
    <div class="flex flex-col items-center">
      <span class="mb-3 text-sm font-medium">installing Progress:</span>
      <ProgressLinear v-model="progressValue3" />
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

## Pending Progress

**Props:**
- `pending`: Determines whether the progress bar operates in pending mode. When true, the progress bar animates continuously, moving from the start to the end and resetting seamlessly.

**Usage:**
- This is a progress bar In pending mode, it simulates an indeterminate state by animating continuously.
<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<span class="mb-3 text-sm font-medium">default pending:</span>
<div class="mb-5"><ProgressLinear v-model="progressValue4" :pending="true"/></div>
<span class="mb-3 text-sm font-medium">with pendingSpeed : 5</span>
<div class="mb-5"><ProgressLinear v-model="progressValue4" :pendingSpeed="5" :pending="true"/></div>
<span class="mb-3 text-sm font-medium">with pendingSpeed : 6</span>
<div class="mb-5"><ProgressLinear v-model="progressValue4" :pendingSpeed="6" :pending="true"/></div>
</template>

<template #content2>

```vue
<slot name="progress"></slot>
<slot name="progressFill"></slot>
```

</template>
<template #content3>

```vue
<div class="mb-5"><ProgressLinear v-model="progressValue" :pending="true"/></div>
<div class="mb-5"><ProgressLinear v-model="progressValue" :pendingSpeed="5" :pending="true"/></div>
<div class="mb-5"><ProgressLinear v-model="progressValue" :pendingSpeed="6" :pending="true"/></div>
```

</template>
</Tab>
## Progress With Custom Class

**Props:**
- `progressClass`: Customizes the outer progress bar container.
- `progressFillClass`: Customizes the filled portion of the progress bar.

**Usage:**
- This example demonstrates how to customize the progress bar's container and filled section using Tailwind classes.
<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template  #content1>
<button :disabled="progressValue5 === 0"  @click="progressValue5 >= 10 ? progressValue5 = progressValue5 - 10 : progressValue5 = 0" class="mb-10 size-10 bg-black text-white rounded-lg p-2 mt-1 mr-40" cleaner>-</button>
<button :disabled="progressValue5 === 100" @click="progressValue5 <= 90 ? progressValue5 = progressValue5 + 10 : progressValue5 = 100" class="mb-10 size-10 bg-black text-white rounded-lg p-2 mt-1 ml-[390px]" cleaner>+</button>
<ProgressLinear v-model="progressValue5" progressClass="ml-40 w-80 bg-emerald-100" progressFillClass="bg-emerald-600 transition-all duration-300"/>
<div class="mt-16">
<ProgressLinear v-model="progressValue6" :pending="true" progressClass="ml-40 w-80 bg-emerald-100" progressFillClass="bg-emerald-600 transition-all duration-300"/>
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
<ProgressLinear v-model="progressValue"
progressClass="ml-40 w-80 bg-emerald-100" 
progressFillClass="bg-emerald-600 transition-all duration-300"/>
```

</template>
</Tab>