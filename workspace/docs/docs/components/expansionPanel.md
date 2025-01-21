# Expansion Panel

<script setup lang="ts">
import { ref } from 'vue'
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];
const title = ref("Expandable Title");
const text = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies, ex a interdum consequat, risus libero aliquet justo, at facilisis purus justo ac erat. Donec euismod nisi nec velit hendrerit, nec varius purus pharetra. Fusce sit amet quam vel nisi vestibulum tincidunt. Suspendisse potenti.")

</script>

## Default Expansion Panel

**Props:**

- `title`: The title of the expansion panel, displayed at the top.
- `text`: The content text that appears when the panel is expanded.

**Usage:**

- Use the `ExpansionPanel` component to create collapsible sections with smooth transitions.
- Customize the appearance and behavior using props or slots.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<ExpansionPanel :title="title" :text="text"
/>
</template>

<template #content2>

```vue
<slot name="title" :isActive="isActive"></slot>
<slot name="text" :isActive="isActive"></slot>
```

</template>
<template #content3>

```vue
<ExpansionPanel :title="title" :text="text"
```

</template>
</Tab>

## Custom Class Expansion Panel

**Props:**

- `activeTitleClass`: Classes applied to the title when the panel is active.
- `onActiveTitleClass`: Classes applied to the title when the panel is inactive.
- `activeTextClass`: Classes applied to the text/content when the panel is active.
- `onActiveTextClass`: Classes applied to the text/content when the panel is inactive.

**Usage:**

- Customize the title and text using the provided active and onactive class props.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<div class="ml-16">
<ExpansionPanel :title="title" :text="text" activeTitleClass="bg-indigo-700 text-white hover:bg-indigo-600 rounded-lg w-[500px]" onActiveTitleClass="bg-blue-900 hover:bg-indigo-700 text-white w-[500px] rounded-t-lg" activeTextClass="bg-indigo-200 w-[500px] rounded-b-lg" onActiveTextClass="bg-indigo-200 w-[500px] rounded-b-lg" />
</div>
</template>

<template #content2>

```vue
<slot name="title" :isActive="isActive"></slot>
<slot name="text" :isActive="isActive"></slot>
```

</template>
<template #content3>

```vue
<ExpansionPanel :title="title" 
:text="text" 
activeTitleClass="bg-blue-900 text-white hover:bg-blue-800 w-[500px] rounded-lg" 
onActiveTitleClass="bg-blue-900 hover:bg-blue-800 text-white w-[500px] rounded-t-lg" 
activeTextClass="bg-blue-100 w-[500px] rounded-b-lg" 
onActiveTextClass="bg-blue-100 w-[500px] rounded-b-lg" /
```

</template>
</Tab>
