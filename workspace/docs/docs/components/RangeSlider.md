# Temperature Slider Example


  <div class="slider-container">
    <h3>Temperature Slider</h3>
    <RangeSlider
      className="max-w-md"
      v-model="temperature"
      label="Temperature"
      :maxValue="1"
      :minValue="0"
      :step="0.01"
    />
    <p>Selected Value: {{ temperature }}</p>
  </div>

<script setup>
import { ref } from 'vue';


const temperature = ref(0.4);
const humidity = ref(0.5);
const primary = ref(0.6);
const secondary = ref(0.7);
const music = ref(0.8);
const sound = ref(0.9);
const carRentalRange = ref([500, 1500]);
</script>

<style scoped>
.slider-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.slider-container h3 {
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #333;
}
.slider-container p {
  margin-top: 10px;
  font-size: 1em;
  color: #666;
}
</style>

# Humidity Slider Example

<div class="slider-container">
  <h3>Humidity Slider</h3>
  <RangeSlider
    className="max-w-md"
    v-model:value="humidity"
    label="Humidity"
    :maxValue="1"
    :minValue="0"
    :step="0.01"
  />
  <p>Selected Value: {{ humidity }}</p>
</div>

# Primary Slider Example

<div class="slider-container">
  <h3>Primary Slider</h3>
  <RangeSlider
    className="max-w-md"
    v-model:value="primary"
    label="Primary"
    :maxValue="1"
    :minValue="0"
    :step="0.01"
    variant="primary"
  />
  <p>Selected Value: {{ primary }}</p>
</div>

# Secondary Slider Example

<div class="slider-container">
  <h3>Secondary Slider</h3>
  <RangeSlider
    className="max-w-md"
    v-model:value="secondary"
    label="Secondary"
    :maxValue="1"
    :minValue="0"
    :step="0.01"
    variant="secondary"
  />
  <p>Selected Value: {{ secondary }}</p>
</div>

# Music Slider Example

<div class="slider-container">
  <h3>Music Slider</h3>
  <RangeSlider
    className="max-w-md"
    v-model:value="music"
    label="Music"
    :maxValue="1"
    :minValue="0"
    :step="1"
    variant="music"
  />
  <p>Selected Value: {{ music }}</p>
</div>

# Sound Slider Example

<div class="slider-container">
  <h3>Sound Slider</h3>
  <RangeSlider
    className="max-w-md"
    v-model:value="sound"
    label="Sound"
    :maxValue="1"
    :minValue="0"
    :step="0.01"
    variant="sound"
  />
  <p>Selected Value: {{ sound }}</p>
</div>

# Car Rental Slider Example

<div class="slider-container">
  <h3>Car Rental Slider</h3>
  <RangeSlider
    className="max-w-md"
    v-model:value="carRentalRange"
    label="Car Rental Range"
    :maxValue="2000"
    :minValue="0"
    :step="1"
    variant="carRental"
    range
  />
  <p>Selected Range: {{ carRentalRange[0] }}$ to {{ carRentalRange[1] }}$</p>
</div>
