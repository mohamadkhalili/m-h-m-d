# list
<script setup>
import { ref } from 'vue'
const menuValue = ref("");
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

<List v-model="menuValue"  >
</List>
<br>
<br>
<br>
