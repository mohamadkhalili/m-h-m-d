# Date Picker
<script setup lang="ts">
import { ref } from 'vue'
const modelValue = ref();
const modelValue2 = ref();
</script>


<DatePicker v-model="modelValue" />
<p>{{modelValue}}</p>


<DatePicker v-model="modelValue2" :persianMode="false" />
<p>{{modelValue2}}</p>