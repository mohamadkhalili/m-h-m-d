<CheckBox 
  v-model="checked" 
  :lineThrough="true" 
  color="bg-rose-400"
>
  Married?
</CheckBox>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
