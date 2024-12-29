<template>
  <div>
    <div v-if="persianMode" class="mt-4">
      <label for="persian-month" class="block mb-2"
        >Select Persian Month:</label
      >
      <select
        id="persian-year"
        v-model="persianYear"
        @change="generateCalendar"
        class="border rounded p-2"
      >
        <option v-for="year in persianYears" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
      <select
        id="persian-month"
        v-model="persianMonth"
        @change="generateCalendar"
        class="border rounded p-2 ml-2"
      >
        <option
          v-for="(month, index) in persianMonths"
          :key="index"
          :value="index + 1"
        >
          {{ month }}
        </option>
      </select>
    </div>

    <div v-else>
      <label for="gregorian-month" class="block mb-2"
        >Select Gregorian Month:</label
      >
      <input
        id="gregorian-month"
        type="month"
        v-model="selectedMonth"
        @change="generateCalendar"
        class="border rounded p-2 mt-4"
      />
    </div>

    <div
      :dir="persianMode ? 'rtl' : 'ltr'"
      class="grid grid-cols-7 gap-4 max-w-[430px] mt-6"
    >
      <div
        class="font-bold text-center flex justify-center items-center w-10 h-10 select-none"
        v-for="day in persianMode ? persianDays : days"
        :key="day"
      >
        {{ day }}
      </div>
      <div
        class="w-10 h-10 bg-transparent text-center flex justify-center items-center"
        v-for="n in persianMode ? firtsPersianMonth(persianYear, persianMonth, 1) : firstDayOffset"
        :key="'empty-' + n"
      ></div>

      <div
        
        
        v-for="day in persianMode ? daysPersianInMonth() : daysInMonth"
        :key="'day-' + day"
        >
      <div @click="changeModelValue(day)" :class="[day == dayNumber ? 'w-10 h-10 text-center flex justify-center items-center  rounded-full select-none cursor-pointer rounded-full bg-gray-200' : 'w-10 h-10 bg-transparent text-center flex justify-center items-center  rounded-full select-none cursor-pointer rounded-full hover:bg-gray-100']"
      >{{ day }}</div>
      </div>
    </div>
  </div>
</template>

  
  <script setup lang="ts">
import { ref } from "vue";
import { componentEmits } from "./Emits";
import { coreProps } from "./Props";
import { coreSlots } from "./Slots";

const props = defineProps(coreProps);
const emit = defineEmits(componentEmits);
const slots = defineSlots<coreSlots>();
const dayNumber = ref();
const persianMonth = ref(1);
const persianYear = ref(1403);
const selectedMonth = ref<string>("");
const days = ["S", "M", "T", "W", "T", "F", "S"];
const persianDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
];
const firstDayOffset = ref<number>(0);
const daysInMonth = ref<number[]>([]);
const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
const firtsPersianMonth = (jy: number, jm: number, jd:number) =>  {
  var sal_a, gy, gm, gd, days;
  jy += 1595;
  days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
  gy = 400 * ~~(days / 146097);
  days %= 146097;
  if (days > 36524) {
    gy += 100 * ~~(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }
  gy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
    gy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  gd = days + 1;
  sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
  const firstDay = new Date(gy, gm - 1, gd);
  let fd = firstDay.getDay();
  if(fd < 6){
    fd += 1;
  }else if(fd == 6){
    fd = 0;
  }
  return fd;
};
const persianYears = Array.from({ length: 100 }, (_, i) => 1340 + i);
const changeModelValue = (day: number) => {
  if(props.persianMode){
    emit("update:modelValue", persianYear.value.toString() + '-' + persianMonth.value.toString() + '-' + day);
    dayNumber.value = day;
  }else{
    const [year, month] = selectedMonth.value.split("-");
    emit("update:modelValue", year + '-' + month + '-' + day);
    dayNumber.value = day;
  }
}
const generateCalendar = () => {
  if (!selectedMonth.value) return;

  const [year, month] = selectedMonth.value.split("-");
  const firstDay = new Date(parseInt(year), parseInt(month) - 1, 1);

  firstDayOffset.value = firstDay.getDay();

  const totalDays = new Date(parseInt(year), parseInt(month), 0).getDate();
  daysInMonth.value = Array.from({ length: totalDays }, (_, i) => i + 1);
};

const daysPersianInMonth = () => {
  if(persianMonth.value < 7){
    return Array.from({ length: 31 }, (_, i) => i + 1);
  }else if(persianMonth.value < 12){
    return Array.from({ length: 30 }, (_, i) => i + 1);
  }else if(persianMonth.value == 12){
    if(persianYear.value % 4 == 3){
      return Array.from({ length: 30 }, (_, i) => i + 1);
    }else{
      return Array.from({ length: 29 }, (_, i) => i + 1);
    }
  }
}
</script>
  