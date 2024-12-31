# Date Picker
<script setup lang="ts">
import { ref } from 'vue'
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];
const modelValue = ref();
const modelValue2 = ref();
</script>

## Default Date Picker

**Props:**
- `v-model`: Binds the selected date value.

**Usage:**
- This is a basic date picker that updates the displayed date when a selection is made.

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<DatePicker v-model="modelValue" />
<p>Date Selected: {{modelValue}}</p>

</template>

<template #content2>

```vue
<slot name="selectMonth"></slot>
<slot name="selectYear"></slot>
<slot name="calender"></slot>
```

</template>
<template #content3>

```vue
<DatePicker v-model="modelValue" />
```

</template>
</Tab>

## Date Picker - Gregorian Mode

**Props:**
- `persianMode`: A Boolean prop. Set to `false` to enable Gregorian mode.

**Usage:**
- This is a `DatePicker` configured to work in Gregorian mode. Selected dates will follow the Gregorian calendar format.

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<DatePicker v-model="modelValue2" :persianMode="false" />
<p>Date Selected: {{modelValue2}}</p>
</template>

<template #content2>

```vue
<slot name="selectMonth"></slot>
<slot name="selectYear"></slot>
<slot name="calender"></slot>
```

</template>
<template #content3>

```vue
<DatePicker v-model="modelValue2" :persianMode="false" />
```

</template>
</Tab>