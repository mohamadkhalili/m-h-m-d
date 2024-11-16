# menu
<script setup>
import { ref } from 'vue'
const menuValue = ref(false);
const menuValueTooltip = ref("");
const menuValueVertical = ref("");
const menuValueColor = ref("");
</script>

this is default menu component:

<button  @click="menuValue = !menuValue" class="w-28 bg-black text-white rounded-lg p-2 mt-1" cleaner>Open menu</button>
<Menu v-model="menuValue">
</Menu>
<br>
<br>
<br>

```vue
<Menu v-model="menuValue">
```