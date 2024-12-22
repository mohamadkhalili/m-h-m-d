# SliderRange Component Documentation

## Example:

### Light Theme

<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueLight"
  name="rangeSliderLight"
  theme="light"
/>
<p>Selected Value: {{ rangeValueLight }}</p>

### Dark Theme

<RangeSlider
  :min="0"
  :max="100"
  v-model="rangeValueDark"
  name="rangeSliderDark"
  theme="dark"
/>
<p>Selected Value: {{ rangeValueDark }}</p>

<script setup>
import { ref } from 'vue';

const rangeValueLight = ref(20);
const rangeValueDark = ref(20);
</script>
