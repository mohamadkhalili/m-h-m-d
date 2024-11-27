# stepper
<script setup>
import { ref } from 'vue'
const stepperValue = ref();
const menuValueColor = ref(false);
const menuValueRounded = ref(false);
const menuValueOutside = ref(false);
const menuValueHover = ref(false);
const menuValueSize = ref(false);
</script>

## Default stepper

**Props:**

- `v-model`: Binds the open/close state of the menu.

**Usage:**

- This is the basic menu that toggles when the button is clicked.

<Stepper v-model="stepperValue"  >
</Stepper>