<script setup>

const props = defineProps({
  min: Number,
  max: Number,
  value: [Number, Array],
  variant: {
    type: String,
    default: 'default',
    validator: value => ['default', 'primary', 'secondary', 'music', 'sound', 'carRental'].includes(value),
  },
  range: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:value']);

const updateValue = (event, index = null) => {
  if (props.range && Array.isArray(props.value)) {
    const newValue = [...props.value];
    newValue[index] = Number(event.target.value);
    emit('update:value', newValue);
  } else {
    emit('update:value', Number(event.target.value));
  }
};

export { updateValue, props }; // منطق و props را صادر می‌کنیم
</script>
