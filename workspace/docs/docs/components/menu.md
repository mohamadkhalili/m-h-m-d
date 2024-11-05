# menu
<script setup>
import { ref } from 'vue'
const menuValue = ref("");
</script>

this is test for menu
<br>
<Menu v-model="menuValue">
</Menu>
<div>Selected menu item: {{ menuValue }}</div>
