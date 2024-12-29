<template>
    <input
      type="month"
      v-model="selectedMonth"
      @change="generateCalendar"
      class="border rounded p-2 mt-4"
    />
  
    <div class="grid grid-cols-7 gap-1 max-w-sm mt-6">
      <div
        class="font-bold text-center"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </div>
  
      <div
        class="w-10 h-10 bg-transparent"
        v-for="n in firstDayOffset"
        :key="'empty-' + n"
      ></div>
  
      <div
        class="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 rounded"
        v-for="day in daysInMonth"
        :key="'day-' + day"
      >
        {{ day }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { componentEmits } from './Emits';
  import { coreProps } from './Props';
  import { coreSlots } from './Slots';
  
  const props = defineProps(coreProps);
  const emit = defineEmits(componentEmits);
  const slots = defineSlots<coreSlots>();
  
  const selectedMonth = ref<string>(""); 
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
  const firstDayOffset = ref<number>(0); 
  const daysInMonth = ref<number[]>([]); 
  
  const generateCalendar = () => {
    if (!selectedMonth.value) return;
  
    const [year, month] = selectedMonth.value.split("-");
    const firstDay = new Date(parseInt(year), parseInt(month) - 1, 1);
  
    firstDayOffset.value = firstDay.getDay();
  
    const totalDays = new Date(parseInt(year), parseInt(month), 0).getDate();
  
    daysInMonth.value = Array.from({ length: totalDays }, (_, i) => i + 1);
  };
  </script>
  