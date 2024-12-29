# Date Picker
<script setup lang="ts">
import { ref } from 'vue'
const modelValue = ref(10);

</script>


<DatePicker v-model="modelValue" />