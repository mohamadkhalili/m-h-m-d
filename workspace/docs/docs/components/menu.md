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

<CodeTabs
  templateCode="
<div class='ml-[255px]'>
<Button  @click='menuValue = !menuValue' :buttonClass='buttonClass'>Open menu</Button>
<Menu v-model='menuValue' >
</Menu>
</div>
<br>
<br>
<br>
"
scriptCode="
export default {
data() {
    return {
      menuValue : false,
      buttonClass : 'w-28 p-2 mt-1'
    }
  },
  methods: {
    openMenu() {
      this.menuValue = !this.menuValue;
    }
  }
}
"
/>

## Menu with Close on Click Outside

**Props:**

- `closeOutside`: Closes the menu when clicking outside.

**Usage:**

- This menu closes automatically when you click outside of it.

<CodeTabs
  templateCode="
<div class='ml-[255px]'>
<Button  @click='menuValue = !menuValue' :buttonClass='buttonClass'>Open menu</Button>
<Menu v-model='menuValue' closeOutside>
</Menu>
</div>
<br>
<br>
<br>
"
scriptCode="
export default {
data() {
    return {
      menuValue : false,
      buttonClass : 'w-28 p-2 mt-1'
    }
  },
  methods: {
    openMenu() {
      this.menuValue = !this.menuValue;
    }
  }
}
"
/>

## Menu with Open on Hover

**Props:**

- `@mouseleave`: Closes the menu when mouse leaves.

**Usage:**

- This menu opens when hovered over and closes when the mouse leaves.

<CodeTabs
  templateCode="
<div class='ml-[255px]'>
<Button  @mouseover='openMenu' @mouseleave='openMenu' :buttonClass='buttonClass'>Open menu</Button>
<Menu v-model='menuValue' @mouseover='openMenu' @mouseleave='openMenu'>
</Menu>
</div>
<br>
<br>
<br>
"
scriptCode="
export default {
data() {
    return {
      menuValue : false,
      buttonClass : 'w-28 p-2 mt-1'
    }
  },
  methods: {
    openMenu() {
      this.menuValue = !this.menuValue;
    }
  }
}
"
/>

## Menu with Set Size and border radius and Create Button in Menu

**Props:**

- `menuClass`: Sets custom tailwind classes for the menu.

**Usage:**

- This menu has custom size, border radius and a button (`item1`) inside.

<CodeTabs
  templateCode="
<div class='ml-[255px]'>
<Button  @click='menuValue = !menuValue' :buttonClass='buttonClass'>Open menu</Button>
<Menu v-model='menuValue' :menuClass='menuClass'>
<template #menu><Button :buttonClass='templateClass' cleaner>item1</Button></template>
</Menu>
</div>
<br>
<br>
<br>
"
scriptCode="
export default {
data() {
    return {
      menuValue : false,
      buttonClass : 'w-28 p-2 mt-1',
      menuClass : 'rounded-xl bg-indigo-700 border-2 border-indigo-200',
      templateClass : 'ml-7 w-14 h-9 text-xs bg-indigo-200 rounded-lg mt-5 text-black'
    }
  },
  methods: {
    openMenu() {
      this.menuValue = !this.menuValue;
    }
  }
}
"
/>
