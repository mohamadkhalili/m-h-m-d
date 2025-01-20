# stepper

<script setup>
import { ref } from 'vue'
const steps =  ref([
            { label: "authentication", icon: "mdiCheck" },
            { label: "Pre payment", icon: "mdiCloudCheckVariantOutline" },
            { label: "payment", icon: "mdiCloudCheckVariantOutline" },
            { label: "payment", icon: "mdiCloudCheckVariantOutline" },
            { label: "payment", icon: "mdiCloudCheckVariantOutline" },
            { label: "Final approval", icon: "mdiCheckDecagramOutline" }
        ]);
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];
const stepperValue = ref(0);
const stepperValue2 = ref(0);
const stepperValue3 = ref(0);
const stepperValue4 = ref(0);
</script>

## Default Stepper

The default stepper component with `prev` and `next` buttons.

**Props:**

- `v-model`: Binds the current step value.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<Stepper v-model="stepperValue" ></Stepper>
<br>
<Button :isDisabled="stepperValue === 0"  @click="stepperValue = stepperValue - 1" buttonClass="w-28  p-2 mt-8 mr-40" cleaner>prev</Button>
<Button :isDisabled="stepperValue === 4" @click="stepperValue = stepperValue + 1" buttonClass="w-28 p-2 mt-8 ml-[254px]" cleaner>next</Button>
</template>

<template #content2>

```vue
<slot name="progress"></slot>
<slot name="progressBar"></slot>
<slot
  name="step"
  :index="index + 1"
  :step="step"
  :currentStep="modelValue"
  :status="getStatus(index + 1)"
>
</slot>
```

</template>
<template #content3>

```vue
<Stepper v-model="stepperValue" ></Stepper>
<button :disabled="stepperValue === 1"  @click="stepperValue = stepperValue - 1" 
class="w-28 bg-black text-white rounded-lg p-2 mt-1 mr-80" cleaner>prev</button>
<button :disabled="stepperValue === 4" @click="stepperValue = stepperValue + 1" 
class="w-28 bg-black text-white rounded-lg p-2 mt-1 ml-36" cleaner>next</button>
```

</template>
</Tab>

## Stepper with Step Click Enabled

A stepper that allows users to click on any step to navigate directly to it.

**Props:**

- `allowStepClick`: Enables clicking on steps for direct navigation.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<Stepper v-model="stepperValue2" allowStepClick></Stepper>
</template>
<template #content2>

```vue
<slot name="progress"></slot>
<slot name="progressBar"></slot>
<slot
  name="step"
  :index="index + 1"
  :step="step"
  :currentStep="modelValue"
  :status="getStatus(index + 1)"
>
</slot>
```

</template>
<template #content3>

```vue
<Stepper v-model="stepperValue" allowStepClick></Stepper>
```

</template>
</Tab>

## Stepper with Custom Steps

A stepper configured with a defined list of custom steps, each with labels and icons.

**Props:**

- `steps`: An array of steps, where each step includes:
- `label`: The step's label (string).
- `icon`: The step's icon (string, optional).

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<Stepper v-model="stepperValue3" :steps="steps"></Stepper>
<Button :isDisabled="stepperValue3 === 0"  @click="stepperValue3 = stepperValue3 - 1" buttonClass="w-28 p-2 mt-8 mr-40" cleaner>prev</Button>
<Button :isDisabled="stepperValue3 === 7" @click="stepperValue3 = stepperValue3 + 1" buttonClass="w-28 p-2 mt-8 ml-[254px]" cleaner>next</Button>
</template>
<template #content2>

```vue
<slot name="progress"></slot>
<slot name="progressBar"></slot>
<slot
  name="step"
  :index="index + 1"
  :step="step"
  :currentStep="modelValue"
  :status="getStatus(index + 1)"
>
</slot>
```

</template>
<template #content3>

```vue
const steps =  ref([
            { label: "authentication", icon: "mdiCheck" },
            { label: "Pre payment", icon: "mdiCloudCheckVariantOutline" },
            { label: "payment", icon: "mdiCloudCheckVariantOutline" },
            { label: "Final approval", icon: "mdiCheckDecagramOutline" }
        ]);

<Stepper v-model="stepperValue" :steps="steps"></Stepper>
```

</template>
</Tab>

## Custom Class Stepper

A stepper with fully customized styles for progress, progress bar, done, and not-done states.

**Props:**

- `progressClass`: Custom CSS classes for the progress state.
- `progressBarClass`: Custom CSS classes for the progress bar.
- `doneClass`: Custom CSS classes for completed steps.
- `notDoneClass`: Custom CSS classes for incomplete steps.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<Stepper v-model="stepperValue4" progressClass="shadow-md bg-indigo-200" progressBarClass="bg-indigo-700" doneClass="shadow-md bg-indigo-700" notDoneClass="shadow-md bg-indigo-200 text-black"></Stepper>
<Button :isDisabled="stepperValue4 === 0"  @click="stepperValue4 = stepperValue4 - 1" buttonClass="w-28 p-2 mt-5 mr-40" cleaner>prev</Button>
<Button :isDisabled="stepperValue4 === 4" @click="stepperValue4 = stepperValue4 + 1" buttonClass="w-28 p-2 mt-5 ml-[254px]" cleaner>next</Button>
</template>
<template #content2>

```vue
<slot name="progress"></slot>
<slot name="progressBar"></slot>
<slot
  name="step"
  :index="index + 1"
  :step="step"
  :currentStep="modelValue"
  :status="getStatus(index + 1)"
>
</slot>
```

</template>
<template #content3>

```vue
<Stepper v-model="stepperValue4" 
progressClass="shadow-md bg-indigo-200" 
progressBarClass="bg-indigo-700" 
doneClass="shadow-md bg-indigo-700" 
notDoneClass="shadow-md bg-indigo-200 text-black">
</Stepper>
```

</template>
</Tab>
