# Breadcrumb

<script setup lang="ts">
import { ref } from 'vue'
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];
const items =  ref([
            { title: "tab", disable:false },
            { title: "pagination", disable:false },
            { title: "modal", disable:false },
            { title: "menu", disable:false }
        ]);
const breadcrumbValue = ref("");
const breadcrumbValue2 = ref("");
const breadcrumbValue3 = ref("");
const breadcrumbValue4 = ref("");
</script>

## Default Breadcrumb

Improved the explanation for the default breadcrumb and corrected the inconsistent structure in template slots.

**Props:**

- `v-model`: Binds the current item value.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<Breadcrumb v-model="breadcrumbValue"/>
</template>
<template #content2>

```vue
<slot name="item" :title="title" 
:disable="disable" :end="end"></slot>
 <slot name="separator"></slot>
```

</template>
<template #content3>

```vue
<Breadcrumb v-model="isModalOpen"/>
```

</template>
</Tab>

## Breadcrumb with Slot for Separator

Added consistent formatting and improved the explanation for the separator slot.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<Breadcrumb v-model="breadcrumbValue2">
<template #separator> &nbsp> </template>
</Breadcrumb>
</template>
<template #content2>

```vue
<slot name="item" :title="title" 
:disable="disable" :end="end"></slot>
 <slot name="separator"></slot>
```

</template>
<template #content3>

```vue
<Breadcrumb v-model="breadcrumbValue2">
<template #separator> &nbsp> </template>
</Breadcrumb>
```

</template>
</Tab>
<br>

## With Custom Items

Clarified the usage of the items prop and enhanced alignment.

**Props:**

- `items`: Accepts an array of breadcrumb items with title and disable properties.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<Breadcrumb v-model="breadcrumbValue3" :items="items">
<template #separator> &nbsp> </template>
</Breadcrumb>
</template>
<template #content2>

```vue
<slot name="item" :title="title" 
:disable="disable" :end="end"></slot>
 <slot name="separator"></slot>
```

</template>
<template #content3>

```vue
<Breadcrumb v-model="breadcrumbValue3" :items="items">
<template #separator> &nbsp> </template>
</Breadcrumb>
```

</template>
</Tab>
<br>

## Custom Class

The breadcrumb component with custom active, onActive, and disabled classes for enhanced customization.

**Props:**

- `activeClass`: Binds the current step value.
- `onActiveClass`: Specifies additional classes applied to active items onActive.
- `disableClass`: Class applied to disabled breadcrumb items.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<Breadcrumb v-model="breadcrumbValue4" activeClass="text-indigo-700 hover:text-indigo-600" onActiveClass="text-indigo-300 hover:text-indigo-400" disableClass="text-indigo-100">
<template #separator> &nbsp> </template>
</Breadcrumb>
</template>
<template #content2>

```vue
<slot name="item" :title="title" 
:disable="disable" :end="end"></slot>
 <slot name="separator"></slot>
```

</template>
<template #content3>

```vue
<Breadcrumb v-model="breadcrumbValue4" 
activeClass="text-indigo-700 hover:text-indigo-600" 
onActiveClass="text-indigo-300 hover:text-indigo-400" 
disableClass="text-indigo-100">
<template #separator> &nbsp> </template>
</Breadcrumb>
```

</template>
</Tab>
<br>
