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

## Default List

<List v-model="menuValue" vertical >
</List>