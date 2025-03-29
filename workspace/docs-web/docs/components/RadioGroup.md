# RadioGroup Component Example

The `RadioGroup` component allows you to group multiple `Radio` buttons together, ensuring only one button is selected at a time.

### Props

- `label`: The label for the group of radio buttons.
- `value`: The currently selected value.
- `isInvalid`: A flag to indicate whether the group is invalid (for error states).
- `onValueChange`: A callback function when the value changes.

### Usage Example

<CodeTabs
  templateCode="
<div class='flex flex-col gap-3'>
  <RadioGroup
    :isInvalid='isInvalid'
    label='Select your favorite city'
    v-model='selected'
  >
    <Radio value='buenos-aires'>Buenos Aires</Radio>
    <Radio value='sydney'>Sydney</Radio>
    <Radio value='san-francisco'>San Francisco</Radio>
    <Radio value='london'>London</Radio>
    <Radio value='tokyo'>Tokyo</Radio>
  </RadioGroup>
  <p>Selected: {{ selected }}</p>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        selected: null,  
        isInvalid: false,
      };
    }
  }
  "
/>
