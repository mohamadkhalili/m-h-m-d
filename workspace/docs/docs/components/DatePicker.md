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
const modelValue3 = ref();
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
<DatePicker v-model="modelValue" :persianMode="false" />
```

</template>
</Tab>


## Date Picker - Custom Class

**Props:**
- `buttonSelectClass`: Custom class for the button.
- `selectYearClass`: Custom class for the year selector.
- `activeYearClass`: Custom class for the active year.
- `onActiveYearClass`: Custom class for hover/active state on the year.
- `selectMonthClass`: Custom class for the month selector.
- `activeMonthClass`: Custom class for the active month.
- `onActiveMonthClass`: Custom class for hover/active state on the month.
- `calendarClass`: Custom class for the calendar container.
- `dayOfWeekClass`: Custom class for the days of the week.
- `separatorClass`: Custom class for separators (if applicable).
- `activeDayClass`: Custom class for the active day.
- `nowDayClass`: Custom class for the current day.
- `onActiveDayClass`: Custom class for hover/active state on the day.


**Usage:**
- Use these props to customize the styling of the `DatePicker` component, such as the appearance of year and month selectors or the active state of days.

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<DatePicker v-model="modelValue3" buttonSelectClass="bg-indigo-700" dayOfWeekClass="text-black" calenderClass="bg-indigo-200 rounded-2xl" onActiveDayClass="text-balck rounded-2xl hover:bg-indigo-300" nowDayClass="border-indigo-700 hover:bg-indigo-300 text-black rounded-2xl" activeDayClass="bg-indigo-700 text-white rounded-2xl" selectMonthClass="bg-indigo-100" activeMonthClass="bg-indigo-700 hover:bg-indigo-600 hover:text-white text-white" onActiveMonthClass="bg-indigo-200 text-black hover:bg-indigo-300 hover:text-black" selectYearClass="bg-indigo-100" activeYearClass="bg-indigo-700 hover:bg-indigo-600 text-white hover:text-white" onActiveYearClass="bg-indigo-200 text-black hover:bg-indigo-300 hover:text-black"/>
<p>Date Selected: {{modelValue3}}</p>
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
<DatePicker v-model="modelValue" buttonSelectClass="bg-gray-900" 
dayOfWeekClass="text-white" calenderClass="bg-gray-900 rounded-2xl" 
onActiveDayClass="text-white rounded-2xl hover:bg-gray-600" 
nowDayClass="border-white text-amber-200 rounded-2xl"
activeDayClass="bg-gray-700 text-white rounded-2xl" 
selectMonthClass="bg-gray-900" activeMonthClass="bg-gray-800 text-white" 
onActiveMonthClass="bg-gray-600 text-white hover:bg-gray-600 hover:text-white" 
selectYearClass="bg-gray-900" activeYearClass="bg-gray-800 text-white" 
onActiveYearClass="bg-gray-600 text-white hover:bg-gray-600 hover:text-white"/>
```

</template>
</Tab>