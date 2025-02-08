
## Example

<CodeTabs
  templateCode="
<div class='py-10 rounded-lg flex flex-col justify-center items-center'>
  <RangeSlider
    :min='0'
    :max='100'
    v-model='rangeValueLight'
    name='rangeSliderLight'
  />
  <p>Selected Value: {{ rangeValueLight }}</p>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        rangeValueLight: 20,
      };
    }
  }
  "
/>

## Customize

<CodeTabs
  templateCode="
<div class='py-10 rounded-lg gap-4 grid grid-cols-1 justify-items-center'>
  <RangeSlider
    :min='0'
    :max='100'
    v-model='rangeValueLight'
    thumbColor='#FFFF'
    thumbBorderColor='#4338ca'
    linkFieldColor='bg-indigo-500'
  />
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        rangeValueLight: 24,
      };
    }
  }
  "
/>

## Step

<CodeTabs
  templateCode="
<div class='py-10 rounded-lg gap-4 grid grid-cols-2 justify-items-center'>
  <RangeSlider
    min='0'
    max='100'
    v-model='rangeValueLight'
    thumbColor='#FFFF'
    thumbBorderColor='#4338ca'
    linkFieldColor='bg-indigo-500'
    step='10'
  />
  <p> with 10 step => {{rangeValueLight}}</p>
  <RangeSlider
    :min='0'
    :max='100'
    v-model='rangeValueLight2'
    thumbColor='#FFFF'
    thumbBorderColor='#4338ca'
    linkFieldColor='bg-indigo-500'
    step='5'
  />
  <p> with 5 step => {{rangeValueLight2}}</p>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        rangeValueLight: 60,
        rangeValueLight2: 50,
      };
    }
  }
  "
/>

## Variant

<CodeTabs
  templateCode="
<div class='py-10 rounded-lg gap-4 grid grid-cols-2 justify-items-center'>
  <RangeSlider
    min='0'
    max='100'
    v-model='rangeValueLight'
    thumbColor='#FFFF'
    thumbBorderColor='#4338ca'
    linkFieldColor='bg-indigo-400'
    variant='inside'
  />
  <RangeSlider
    :min='0'
    :max='100'
    v-model='rangeValueLight2'
    thumbColor='#FFFF'
    thumbBorderColor='#4338ca'
    linkFieldColor='bg-indigo-400'
  />
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
        rangeValueLight: 85,
        rangeValueLight2: 95,
      };
    }
  }
  "
/>

## RangeSlider Component Features

| **Feature**           | **Description**                                                                                   | **Usage**                                                                                     |
|-----------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Default Slider**    | A basic range slider with default styling for minimal designs.                                    | Use without additional props to apply the default look. Example: `<RangeSlider :min="0" :max="100" v-model="value" />` |
| **Custom Colors**     | Customize slider colors with options for thumb and track.                                         | Set the `thumbColor` and `linkFieldColor` props to change the slider's appearance. Example: `<RangeSlider thumbColor="#007bff" linkFieldColor="bg-blue-500" />` |
| **Disable**           | Disable interaction to make the slider inactive.                                                  | Use the `disabled` prop to disable the slider. Example: `<RangeSlider :disabled="true" />`    |
| **Variants**          | Style the slider with options like `default` or `inside`.                                         | Set the `variant` prop for unique styles. Example: `<RangeSlider variant="inside" />`         |
| **Step Value**        | Adjust the step value for the slider.                                                             | Use the `step` prop to set the step value. Example: `<RangeSlider :step="5" />`               |
| **Event Handling**    | Trigger actions on input or other events.                                                         | Attach events using `@` syntax. Example: `<RangeSlider @input="handleInput" />`               |

## Props Description

| Prop Name         | Type    | Default       | Description                                                                 |
|-------------------|---------|---------------|-----------------------------------------------------------------------------|
| `min`             | Number  | `0`           | The minimum value of the range slider.                                      |
| `max`             | Number  | `100`         | The maximum value of the range slider.                                      |
| `modelValue`      | Number  | `0`           | The current value of the range slider.                                      |
| `name`            | String  | `''`          | The name attribute for the range input.                                     |
| `baseColor`       | String  | `'bg-gray-300'` | The base color of the slider track.                                         |
| `thumbColor`      | String  | `'#007bff'`   | The color of the slider thumb.                                              |
| `thumbBorderColor`| String  | `'#ffffff'`   | The border color of the slider thumb.                                       |
| `variant`         | String  | `'default'`   | The variant of the slider, which can be `default` or `inside`.              |
| `step`            | Number  | `1`           | The step value for the range slider.                                        |
| `linkFieldColor`  | String  | `''`          | The color of the filled part of the slider track.                           |
| `disabled`        | Boolean | `false`       | Whether the slider is disabled.                                             |
