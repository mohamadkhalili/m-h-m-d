# Date Range

<script setup lang="ts">
import { ref, watch } from 'vue'
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];
const modelValue = ref(false);
const resetValue = ref()
const startDate = ref();
const endDate = ref();
const modelValue2 = ref();
const startDate2 = ref();
const endDate2 = ref();
const modelValue3 = ref();
const startDate3 = ref();
const endDate3 = ref();
watch(endDate, (newValue) => {
  if(newValue){
    modelValue.value = false;
  }
})
</script>

## Default Date Range

**Props:**

- `v-model`: Binds the selected date value.
- `startDate`: Binds the selected start date value.
- `endDate`: Binds the selected end date value.

**Usage:**

- This is a date range picker that allows users to select a start and end date.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<div dir="rtl" class="mb-6">
<Button @click="modelValue = true" buttonClass="w-40">انتخاب بازه زمانی</Button>
</div>
<DateRange v-model="modelValue" v-model:startDate="startDate" v-model:endDate="endDate"/>
<div dir="rtl">
  <p>
    شروع بازه : <span dir="ltr">{{ startDate }}</span>
  </p>
  <p>
    پایان بازه : <span dir="ltr">{{ endDate }}</span>
  </p>
</div>

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
<DateRange v-model="modelValue" 
v-model:startDate="startDate" 
v-model:endDate="endDate"/>
```

</template>
</Tab>

## Date Range - Gregorian Mode

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
<DateRange v-model="modelValue2" v-model:startDate="startDate2" v-model:endDate="endDate2" :persianMode="false" />
<p>Start Date Selected: {{startDate2}}</p>
<p>End Date Selected: {{endDate2}}</p>
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
<DateRange v-model="modelValue" 
v-model:startDate="startDate" 
v-model:endDate="endDate" 
:persianMode="false" />
```

</template>
</Tab>

## Date Range - Custom Class

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
<DateRange v-model="modelValue3" v-model:startDate="startDate3" v-model:endDate="endDate3" buttonSelectClass="bg-indigo-700" dayOfWeekClass="text-black" calenderClass="bg-indigo-200 rounded-2xl" onActiveDayClass="text-balck rounded-2xl hover:bg-indigo-300" nowDayClass="border-indigo-700 hover:bg-indigo-300 text-black rounded-2xl" activeDayClass="bg-indigo-700 text-white rounded-2xl" selectMonthClass="bg-indigo-100" activeMonthClass="bg-indigo-700 hover:bg-indigo-600 hover:text-white text-white" onActiveMonthClass="bg-indigo-200 text-black hover:bg-indigo-300 hover:text-black" selectYearClass="bg-indigo-100" activeYearClass="bg-indigo-700 hover:bg-indigo-600 text-white hover:text-white" onActiveYearClass="bg-indigo-200 text-black hover:bg-indigo-300 hover:text-black"/>
<div dir="rtl">
  <p>
    شروع بازه : <span dir="ltr">{{ startDate3 }}</span>
  </p>
  <p>
    پایان بازه : <span dir="ltr">{{ endDate3 }}</span>
  </p>
</div>
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
<DatePicker v-model="modelValue" v-model:startDate="startDate" 
v-model:endDate="endDate" buttonSelectClass="bg-indigo-700" 
dayOfWeekClass="text-black" calenderClass="bg-indigo-200 rounded-2xl" 
onActiveDayClass="text-balck rounded-2xl hover:bg-indigo-300" 
nowDayClass="border-indigo-700 hover:bg-indigo-300 text-black rounded-2xl" 
activeDayClass="bg-indigo-700 text-white rounded-2xl" 
selectMonthClass="bg-indigo-100" 
activeMonthClass="bg-indigo-700 hover:bg-indigo-600 hover:text-white text-white" 
onActiveMonthClass="bg-indigo-200 text-black hover:bg-indigo-300 hover:text-black" 
selectYearClass="bg-indigo-100" 
activeYearClass="bg-indigo-700 hover:bg-indigo-600 text-white hover:text-white" 
onActiveYearClass="bg-indigo-200 text-black hover:bg-indigo-300 hover:text-black"/>
```

</template>
</Tab>
