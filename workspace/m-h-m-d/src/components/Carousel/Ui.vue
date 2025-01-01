<template>
    <div class="relative w-full overflow-hidden">
      <div class="flex transition-transform duration-300" :style="`transform: translateX(-${currentIndex * 100}%)`">
        <div v-for="(item, index) in items" :key="index" class="flex-none w-full">
          <img :src="item" alt="" :class="imageClass" />
        </div>
      </div>
      <button @click="prev" :class="arrowsClass + ' absolute left-4 top-1/2 transform -translate-y-1/2 scale-150 bg-gray-500/50 hover:bg-gray-500/80 transition-all duration-300 rounded-full px-2  '">《</button>
      <button @click="next" :class="arrowsClass + ' absolute right-4 top-1/2 transform -translate-y-1/2  scale-150 bg-gray-500/50 hover:bg-gray-500/80 transition-all duration-300 rounded-full px-2 '">》</button>
      <div v-if="variants==='dots'" class="absolute z-10 bottom-10 left-[45%]">
      <div class="flex justify-center  ">
        <span v-for="(item, index) in items" :key="index" 
      class="dot" 
      :class="[{ active: currentIndex === index  }, variantClass]" 
      @click="goToSlide(index)"></span>

</div>
</div>
<div v-if="variants==='number'" :class="['absolute z-10 bottom-7 left-[48%]',variantClass]">
        {{ currentIndex + 1 }} / {{ items.length }}
    </div>

    <div v-if="variants==='lines'" class="absolute z-10 bottom-10 left-[42%]">
      <div class="flex justify-center  ">
        <span v-for="(item, index) in items" :key="index" 
      class="line" 
      :class="[{ active: currentIndex === index  }, variantClass]" 
      @click="goToSlide(index)"></span>

</div>
</div>
</div>

  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
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
  
  const goToSlide = (index:any) => {
    currentIndex.value = index;
  };
  
  if (props.autoPlay) {
    setInterval(next, 3000); 
  }
  </script>
  
  <style scoped>
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(128, 128, 128, 0.63);
    opacity: 80%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }
  .dot.active {
    background-color: rgba(24, 24, 24, 0.658);
  }

  .line {
    width: 30px;
    height: 4px;
    background-color: rgba(112, 112, 112, 0.76);
    margin: 0 2px;
   
    cursor: pointer;
  }
  .line.active {
    background-color: rgba(218, 218, 218, 0.815);
  }
  </style>
  