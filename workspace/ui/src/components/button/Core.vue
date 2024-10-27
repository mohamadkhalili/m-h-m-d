<template>
    <div class="relative inline-flex items-center justify-center">
      <button
        :class="[
          'px-8 py-2 m-32 rounded-lg text-white shadow z-10 active:scale-95 transition-all duration-100 hover:shadow-inner',
          buttonColor,
        ]"
        @click="createRipple"
        style="position: relative; overflow: hidden"
      >
        <slot></slot>
        <span
          class="ripple absolute rounded-full bg-white opacity-60 pointer-events-none"
          v-if="rippleVisible"
          :style="rippleStyle"
          @transitionend="resetRipple"
        ></span>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, defineProps } from 'vue'
  import { buttonColors } from './props' // مسیر صحیح به فایل props.ts را وارد کنید
  
  const props = defineProps({
    color: {
      type: String,
      default: 'default', // مقدار پیش‌فرض باید 'default' باشد
    },
  })
  
  const rippleVisible = ref(false)
  const rippleStyle = ref({})
  
  const createRipple = event => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
  
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2
  
    rippleStyle.value = {
      width: `${size}px`,
      height: `${size}px`,
      top: `${y}px`,
      left: `${x}px`,
      transition: 'none',
    }
  
    rippleVisible.value = true
  
    setTimeout(() => {
      rippleVisible.value = false
    }, 200)
  }
  
  const buttonColor = computed(() => {
    return {
      'bg-blue-700 hover:bg-blue-800': props.color === buttonColors.default,
      'bg-purple-700 hover:bg-purple-800': props.color === buttonColors.secondary,
      'bg-green-700 hover:bg-green-800': props.color === buttonColors.primary,
      'bg-red-600 hover:bg-red-700': props.color === buttonColors.error,
      'bg-amber-500 hover:bg-amber-600': props.color === buttonColors.warning,
    }
  })
  
  const resetRipple = () => {
    rippleStyle.value = {}
  }
  </script>
  
  <style >
 
  </style>
  