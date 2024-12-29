# alert
<script setup lang="ts">
import { ref } from 'vue'
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];
const alertEnable = ref(true);
const dayOfWeek = (dateString: string) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateValue);
  return days[date.getDay()];
}
const dateValue = "2020-12-29";
console.log(dayOfWeek(dateValue));


</script>


## Default Alert

**Props:**
- `v-model`: Binds the alert open/close state.

**Usage:**
- This is the basic alert that opens when the button is clicked.

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<Alert v-model="alertEnable"/>

</template>

<template #content2>

```vue
<slot name="alert"></slot>
<slot name="icon"></slot>
<slot name="title"></slot>
<slot name="text"></slot>
```

</template>
<template #content3>

```vue
<Alert v-model="alertEnable"/>
```

</template>
</Tab>

## Custom Value Of Alert

**Props:**
- `icon`: Specifies the icon to be displayed in the alert. 
- `title`: Defines the title of the alert.
- `text`: Provides the main text content or message of the alert.

**Usage:**
- The Alert component is a simple and customizable alert box. It binds the open/close state through the v-model directive. For example, the alert will open or close dynamically based on the value of alertEnable. The component also accepts props like icon, title, and text to customize its appearance and content.

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<Alert v-model="alertEnable" icon="mdiShieldAlertOutline" title="Warning" text="Invalid email address!"/>

</template>

<template #content2>

```vue
<slot name="alert"></slot>
<slot name="icon"></slot>
<slot name="title"></slot>
<slot name="text"></slot>
```

</template>
<template #content3>

```vue
<Alert v-model="alertEnable" icon="mdiShieldAlertOutline" 
title="Warning" text="Invalid email address!"/>
```

</template>
</Tab>

## Custom Class Alert

**Props:**
- `alertClass`: Applies custom styling classes to the main container of the alert. 
- `iconClass`: Applies custom styling classes to the alert's icon. 
- `titleClass`: Adds custom styling to the alert's title.
- `textClass`: Applies custom styling to the alert's text.

**Usage:**
- The Alert component allows customization of its appearance using the alertClass, iconClass, titleClass, and textClass props. This makes it highly flexible for adapting to various design requirements.

<Tab 
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs" 
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<div class="mb-4">
<Alert v-model="alertEnable" alertClass="bg-amber-500" iconClass="text-white" titleClass="text-white" textClass="text-white" />
</div>
<div class="mb-4">
<Alert v-model="alertEnable" alertClass="bg-green-500" iconClass="text-white" titleClass="text-white" textClass="text-white" 
       icon="mdiCheck" title="Done" text="Your purchase has been confirmed!"/>
</div>
<div class="mb-4">
<Alert v-model="alertEnable" alertClass="bg-red-600" iconClass="text-white" titleClass="text-white" textClass="text-white" 
       icon="mdiCloseCircleOutline" title="Error" text="Task failed successfully."/>
</div>
<Alert v-model="alertEnable" alertClass="bg-sky-400" iconClass="text-white" titleClass="text-white" textClass="text-white" 
       icon="mdiInformationVariantCircleOutline" title="Info" text="New software update available."/>
</template>

<template #content2>

```vue
<slot name="alert"></slot>
<slot name="icon"></slot>
<slot name="title"></slot>
<slot name="text"></slot>
```

</template>
<template #content3>

```vue
<Alert v-model="alertEnable" alertClass="bg-amber-500" 
iconClass="text-white" titleClass="text-white" 
textClass="text-white" />

<Alert v-model="alertEnable" alertClass="bg-green-500" 
iconClass="text-white" 
titleClass="text-white" textClass="text-white" 
icon="mdiCheck" title="Done" 
text="Your purchase has been confirmed!"/>

<Alert v-model="alertEnable" alertClass="bg-red-600" 
iconClass="text-white" 
titleClass="text-white" textClass="text-white" 
icon="mdiCloseCircleOutline" title="Error" 
text="Task failed successfully."/>

<Alert v-model="alertEnable" alertClass="bg-sky-400" 
iconClass="text-white" 
titleClass="text-white" textClass="text-white" 
icon="mdiInformationVariantCircleOutline" title="Info" 
text="New software update available."/>
```

</template>
</Tab>