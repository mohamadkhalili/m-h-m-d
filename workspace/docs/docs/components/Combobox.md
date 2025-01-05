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


## Default Combo Box

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
<ComboBox v-model="modelValue2" 
:items="items" multiple/>
```

</template>
</Tab>


## Default Combo Box

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
<ComboBox v-model="modelValue3" :items="items" multiple enableChip/>
<p> {{modelValue}}</p>

</template>

<template #content2>

```vue
<slot name="input"></slot>
<slot name="item" :isActive="isActive" :item="item"></slot>
```

</template>
<template #content3>

```vue
<Alert v-model="alertEnable"/>
```

</template>
</Tab>


## Default Combo Box

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
<ComboBox v-model="modelValue4" :items="items" multiple enableChip/>
<p> {{modelValue}}</p>

</template>

<template #content2>

```vue
<slot name="input"></slot>
<slot name="item" :isActive="isActive" :item="item"></slot>
```

</template>
<template #content3>

```vue
<Alert v-model="alertEnable"/>
```

</template>
</Tab>