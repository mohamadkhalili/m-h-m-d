# SliderRange Component Documentation

## Props:
- **label** (string): عنوان برای نمایش در کنار اسلایدر.
- **min** (number): حداقل مقدار اسلایدر (پیش‌فرض ۰).
- **max** (number): حداکثر مقدار اسلایدر (پیش‌فرض ۱۰۰).
- **modelValue** (number): مقدار فعلی اسلایدر.
- **name** (string): نام برای استفاده در فرم‌ها.

## Example:

<RangeSlider
  label="Select Range"
  :min="0"
  :max="100"
  v-model="rangeValue"
  name="rangeSlider"
/>
<p>Selected Value: {{ rangeValue }}</p>

<script setup>
import { ref } from 'vue';

const rangeValue = ref(50); // مقدار اولیه
</script>
