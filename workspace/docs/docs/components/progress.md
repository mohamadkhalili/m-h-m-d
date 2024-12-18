# modal
<script setup lang="ts">
import { ref } from 'vue'

const progressValue = ref(10);
</script>


## Default Modal

**Props:**
- `v-model`: Binds the modal open/close state.
- `teleport`: Teleports the modal content to the `<body>`.

**Usage:**
- This is the basic modal that opens when the button is clicked.

<Progress v-model="progressValue"/>

```vue
<modal v-model="isModalOpen" teleport="body"/>
```