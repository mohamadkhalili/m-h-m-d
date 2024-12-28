<script setup lang="ts">
import { defineProps, defineEmits, watch } from 'vue';

// Props
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  isInvalid: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  }
});

// Emit
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

// Watch for changes in the `modelValue` (v-model)
watch(() => props.modelValue, (newValue) => {
  emit('update:modelValue', newValue); // Update the selected value
});
</script>
