# menu

<script setup>
import { ref } from 'vue'
const menuValue = ref(false);
const menuValueColor = ref(false);
const menuValueRounded = ref(false);
const menuValueOutside = ref(false);
const menuValueHover = ref(false);
const menuValueSize = ref(false);
</script>

## Default Menu

**Props:**

- `v-model`: Binds the open/close state of the menu.

**Usage:**

- This is the basic menu that toggles when the button is clicked.

<Button  @click="menuValue = !menuValue" buttonClass="w-28 p-2 mt-1">Open menu</Button>
<Menu v-model="menuValue"  >
</Menu>
<br>
<br>
<br>

```vue
<Menu v-model="menuValue">
```

## Menu with Close on Click Outside

**Props:**

- `closeOutside`: Closes the menu when clicking outside.

**Usage:**

- This menu closes automatically when you click outside of it.

<Button  @click="menuValueOutside = !menuValueOutside" buttonClass="w-28 p-2 mt-1">Open menu</Button>
<Menu v-model="menuValueOutside" :closeOutside="true" >
</Menu>
<br>
<br>
<br>

```vue
<Menu v-model="menuValueOutside" :closeOutside="true" >
```

## Menu with Open on Hover

**Props:**

- `@mouseleave`: Closes the menu when mouse leaves.

**Usage:**

- This menu opens when hovered over and closes when the mouse leaves.

<Button @mouseover="menuValueHover = true" @mouseleave="menuValueHover = false" buttonClass="w-28 p-2 mt-1">Open menu</Button>
<Menu v-model="menuValueHover" @mouseover="menuValueHover = true" @mouseleave="menuValueHover = false">
</Menu>
<br>
<br>
<br>

```vue
<button @mouseover="menuValueHover = true"   
@mouseleave="menuValueHover = false"
class="w-28 bg-black text-white rounded-lg p-2 mt-1" 
cleaner>Open menu</button>
<Menu v-model="menuValueHover" @mouseover="menuValueHover = true"
 @mouseleave="menuValueHover = false">
```

## Menu with Set Size and border radius and Create Button in Menu

**Props:**

- `menuClass`: Sets custom tailwind classes for the menu.

**Usage:**

- This menu has custom size, border radius and a button (`item1`) inside.

<Button  @click="menuValueSize = !menuValueSize" buttonClass="w-28 p-2 mt-1" cleaner>Open menu</Button>
<Menu v-model="menuValueSize" menuClass="rounded-xl bg-indigo-700 border-2 border-indigo-200" >
<template #menu><Button buttonClass="ml-7 w-14 h-9 text-xs bg-indigo-200 rounded-lg mt-5 text-black" cleaner>item1</Button></template>
</Menu>
<br>
<br>
<br>

```vue
<Menu v-model="menuValueSize" 
menuClass="rounded-xl bg-indigo-700 border-2 border-indigo-200" >
<template #menu>
<Button buttonClass="ml-7 w-14 h-9 text-xs bg-indigo-200 rounded-lg mt-5 text-black" 
cleaner>item1</Button>
</template>
</Menu>
```
