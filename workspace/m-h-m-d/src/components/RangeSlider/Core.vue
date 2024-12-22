<template>
    <div>
      <h3>Primary Slider</h3>
      <RangeSlider 
        :min="0" 
        :max="100" 
        :value="sliderValues.primary" 
        @update:value="updateValue('primary', $event)" 
        variant="primary" 
      />
  
      <h3>Music Slider</h3>
      <RangeSlider 
        :min="0" 
        :max="100" 
        :value="sliderValues.music" 
        @update:value="updateValue('music', $event)" 
        variant="music" 
      />
  
      <h3>Sound Slider</h3>
      <RangeSlider 
        :min="0" 
        :max="100" 
        :value="sliderValues.sound" 
        @update:value="updateValue('sound', $event)" 
        variant="sound" 
      />
  
      <h3>Car Rental Slider</h3>
      <RangeSlider 
        :min="0" 
        :max="1000" 
        :value="sliderValues.carRental" 
        @update:value="updateValue('carRental', $event)" 
        variant="carRental" 
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import RangeSlider from './Ui.vue';
  
  const sliderValues = ref({
    primary: 50,
    music: 50,
    sound: 30,
    carRental: 500,
  });
  
  const updateValue = (key, value) => {
    sliderValues.value[key] = value;
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>