# alert
<script setup lang="ts">
import { ref } from 'vue'

const isModalOpen = ref(true);
</script>


## Default Alert

**Props:**
- `v-model`: Binds the alert open/close state.

**Usage:**
- This is the basic alert that opens when the button is clicked.

<Alert v-model="isModalOpen"/>

```vue
<Alert v-model="isModalOpen"/>
```