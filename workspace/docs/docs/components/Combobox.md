# Combo Box

<script setup lang="ts">
import { ref } from 'vue'
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];
const modelValue = ref();
const modelValue2 = ref([]);
const modelValue3 = ref([]);
const modelValue4 = ref([]);
const items = ['first choice', 'second choice', 'thrid choice', 'forth choice', 'fifth choice'];
</script>

## Default ComboBox

**Props:**

- `v-model`: Binds the selected value of the ComboBox.
- `items` : An array of items to display in the dropdown list.

**Usage:**

- The ComboBox allows users to select an item from a dropdown list. The v-model binds the selected item, and the items prop populates the dropdown options.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<ComboBox v-model="modelValue" :items="items" />
<p>selected item: {{modelValue}}</p>

</template>

<template #content2>

```vue
<slot name="input"></slot>
<slot name="item" :isActive="isActive" :item="item"></slot>
```

</template>
<template #content3>

```vue
<ComboBox v-model="modelValue" :items="items" />
```

</template>
</Tab>

## Multiple ComboBox

**Props:**

- `multiple`: A Boolean to enable multiple selections. When set to true, v-model will bind to an array of selected items.

**Usage:**

- Setting the multiple prop enables multi-selection mode.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<ComboBox v-model="modelValue2" :items="items" multiple/>
<p> {{modelValue2}}</p>

</template>

<template #content2>

```vue
<slot name="input"></slot>
<slot name="item" :isActive="isActive" :item="item"></slot>
```

</template>
<template #content3>

```vue
<ComboBox v-model="modelValue" 
:items="items" multiple/>
```

</template>
</Tab>

## Enable Chip ComboBox

**Props:**

- `enableChip`: A Boolean that, when set to true, enables chips to display the selected items.

**Usage:**

- with enableChip, the selected items are shown as chips.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<ComboBox v-model="modelValue3" :items="items" multiple enableChip/>
<p> {{modelValue3}}</p>

</template>

<template #content2>

```vue
<slot name="input"></slot>
<slot name="item" :isActive="isActive" :item="item"></slot>
```

</template>
<template #content3>

```vue
<ComboBox v-model="modelValue" 
:items="items" multiple enableChip/>
```

</template>
</Tab>

## Custom Class ComboBox

**Props:**

- `containerClass`: A custom CSS class for the container Input box.
- `chipContainerClass`: A custom CSS class for the chip container.
- `chipClass`:  A custom CSS class for each chip.
- `chipCloseClass`:  A custom CSS class for the chip close button.
- `inputClass`: A custom CSS class for the input field.
- `dropdownClass`: A custom CSS class for the dropdown menu.
- `dropdownItemClass`: A custom CSS class for each dropdown item.
- `dropdownItemActiveClass`: A custom CSS class for the active dropdown item.

**Usage:**

- The custom class props allow you to style various parts of the ComboBox, such as the container, input field, chips, and dropdown items.

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>
<ComboBox v-model="modelValue4" :items="items" multiple enableChip chipClass="bg-blue-900" dropdownItemClass="bg-blue-100 hover:bg-blue-200" dropdownItemActiveClass="bg-blue-900 hover:bg-blue-100"/>
<p> {{modelValue4}}</p>

</template>

<template #content2>

```vue
<slot name="input"></slot>
<slot name="item" :isActive="isActive" :item="item"></slot>
```

</template>
<template #content3>

```vue
<ComboBox v-model="modelValue4" 
:items="items" multiple enableChip 
chipClass="bg-blue-900" 
dropdownItemClass="bg-blue-100 hover:bg-blue-100" 
dropdownItemActiveClass="bg-blue-900 hover:bg-blue-100"/>
```

</template>
</Tab>
