# menu
<script setup>
import { ref } from 'vue'
const menuValue = ref("");
const menuValueTooltip = ref("");
const menuValueVertical = ref("");
const menuValueColor = ref("");
</script>

this is default menu component:
<br>
<Menu v-model="menuValue">
</Menu>
<br>
<div>Selected menu item: {{ menuValue }}</div>

```vue
<Menu v-model="menuValue">
```

this is menu component with tooltip:
<br>
<Menu v-model="menuValueTooltip" tooltip>
</Menu>
<br>
<div>Selected menu item: {{ menuValueTooltip }}</div>

```vue
<Menu v-model="menuValueTooltip" tooltip>
```

this is vertical menu component:
<br>
<Menu v-model="menuValueVertical" vertical>
</Menu>
<br>
<div>Selected menu item: {{ menuValueVertical }}</div>

```vue
<Menu v-model="menuValueVertical" vertical>
```
this is custom color menu component:
<br>
<Menu v-model="menuValueColor" 
activeColor="bg-emerald-400" 
color="bg-emerald-950" 
activeTextColor="text-emerald-950" 
textColor="text-emerald-100">
</Menu>
<br>
<div>Selected menu item: {{ menuValueColor }}</div>

```vue
<Menu v-model="menuValueColor" 
activeColor="bg-emerald-400" 
color="bg-emerald-950" 
activeTextColor="text-emerald-950" 
textColor="text-emerald-100">
</Menu>
```