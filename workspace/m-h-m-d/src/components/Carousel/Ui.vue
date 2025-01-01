<template>
    <div class="relative w-full overflow-hidden">
      <div class="flex transition-transform duration-300" :style="`transform: translateX(-${currentIndex * 100}%)`">
        <div v-for="(item, index) in items" :key="index" class="flex-none w-full">
          <img :src="item" alt="" :class="imageClass" />
        </div>
      </div>
      <button @click="prev" :class="arrowsClass + ' absolute left-4 top-1/2 transform -translate-y-1/2 scale-150 bg-gray-500/50 hover:bg-gray-500/80 transition-all duration-300 rounded-full pr-2 '">《</button>
      <button @click="next" :class="arrowsClass + ' absolute right-4 top-1/2 transform -translate-y-1/2  scale-150 bg-gray-500/50 hover:bg-gray-500/80 transition-all duration-300 rounded-full pl-2 '">》</button>
      <div v-if="variants === 'dots'" class="flex justify-center mt-4">
  <span v-for="(item, index) in items" :key="index" 
        class="dot" 
        :class="[{ active: currentIndex === index }, variantsClass]" 
        @click="goToSlide(index)"></span>
</div>

      <div v-if="variants === 'number'" class="flex justify-center mt-4">
        {{ currentIndex + 1 }} / {{ items.length }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps } from 'vue';
import { variants } from '../tab/props';
  
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
    variantsClass: {
      type: String,
      default: ''
    },
    imageClass: {
      type: String,
      default: 'w-full h-auto object-cover'
    },
    arrowsClass: {
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
  
  const goToSlide = (index:any) => {
    currentIndex.value = index;
  };
  
  // Autoplay functionality
  if (props.autoPlay) {
    setInterval(next, 3500); // Change slide every 3 seconds
  }
  </script>
  
  <style scoped>
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    margin: 0 5px;
  }
  .dot.active {
    background-color: black;
  }
  </style>
  