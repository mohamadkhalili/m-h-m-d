  <!-- Radio buttons with multiple options -->
  <Radio
    :modelValue="selectedValue"
    value="Option 1"
    label="Option 1"
    @update:modelValue="updateValue"
  />
  <Radio
    :modelValue="selectedValue"
    value="Option 2"
    label="Option 2"
    @update:modelValue="updateValue"
  />
  <Radio
    :modelValue="selectedValue"
    value="Option 3"
    label="Option 3"
    @update:modelValue="updateValue"
  />
    <Radio
    :modelValue="selectedValue"
    value="Option 4"
    label="Option 4"
    @update:modelValue="updateValue"
  />
    <Radio
    :modelValue="selectedValue"
    value="Option 5"
    label="Option 5"
    @update:modelValue="updateValue"
  />

<script setup lang="ts">
import { ref } from 'vue';

const selectedValue = ref<string | null>(null);

// Update the modelValue when radio button is clicked
const updateValue = (newValue: string) => {
  selectedValue.value = newValue;

  console.log(selectedValue.value)
};
</script>
