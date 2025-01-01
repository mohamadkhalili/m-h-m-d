<template>
    <div :class="carouselClasses.container">
      <div :class="carouselClasses.flexContainer" :style="`transform: translateX(-${currentIndex * 100}%)`">
        <div v-for="(item, index) in items" :key="index" :class="carouselClasses.imageContainer">
          <img :src="item" alt="" :class="imageClass" />
          <slot/> 
        </div>

      </div>
      <button 
        @click="prev" 
        :class="`${carouselClasses.arrowBase} ${carouselClasses.leftArrow} ${arrowsClass}`">
        《
      </button>
      <button 
        @click="next" 
        :class="`${carouselClasses.arrowBase} ${carouselClasses.rightArrow} ${arrowsClass}`">
        》
      </button>
      
      <div v-if="variants === 'dots'" :class="carouselClasses.centerAbsolute">
        <div :class="carouselClasses.centerContent">
          <span 
            v-for="(item, index) in items" 
            :key="index" 
            :class="`${carouselClasses.dotBase} ${currentIndex === index ? carouselClasses.dotActive : ''} ${variantClass}`" 
            @click="goToSlide(index)">
          </span>
        </div>
      </div>
      
      <div v-if="variants === 'number'" :class="`${carouselClasses.numberBase} ${variantClass}`">
        {{ currentIndex + 1 }} / {{ items.length }}
      </div>
      
      <div v-if="variants === 'lines'" :class="carouselClasses.centerAbsolute">
        <div :class="carouselClasses.centerContent">
          <span 
            v-for="(item, index) in items" 
            :key="index" 
            :class="`${carouselClasses.lineBase} ${currentIndex === index ? carouselClasses.lineActive : ''} ${variantClass}`" 
            @click="goToSlide(index)">
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { carouselClasses } from '../../styles/CarouselClasses';
  
  const props = defineProps({
    items: {
      type: Array,
      required: true
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    variants: {
      type: String,
      default: 'dots'
    },
    variantClass: {
      type: String,
      default: ''
    },
    arrowsClass: {
      type: String,
      default: ''
    },
    imageClass: {
      type: String,
      default: ''
    }
  });
  
  const currentIndex = ref(0);
  
  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.items.length;
  };
  
  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length;
  };
  
  const goToSlide = (index: number) => {
    currentIndex.value = index;
  };
  
  if (props.autoPlay) {
    setInterval(next, 3000);
  }
  </script>
  
  <style scoped>
  /* No custom styles needed because everything is handled by TailwindCSS */
  </style>
  