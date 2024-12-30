<template>
  <div>
    <div class="inline" :class="persianMode ? 'iran-font' : ''">
      <Button @click="[(selectYear = !selectYear), (selectMonth = false)]" buttonClass="mr-4">{{
        persianMode ? persianYear : gYear
      }}</Button>
      <Button @click="[(selectMonth = !selectMonth), (selectYear = false)]">{{
        persianMode
          ? persianMonths[persianMonth - 1]
          : gregorianMonths[gMonth - 1]
      }}</Button>
    </div>
    <div
      v-if="selectYear && !selectMonth"
      :dir="persianMode ? 'rtl' : 'ltr'"
      class="grid grid-cols-3 gap-4 w-[430px] h-[400px] max-w-[430px] mt-3 border rounded-md p-5 text-center overflow-y-scroll"
      ref="yearContainer"
    >
      <div
        v-for="year in persianMode ? persianYears : gregorainYears"
        :key="year"
        :class="[
          year == persianYear || year == gYear
            ? 'flex justify-center items-center w-full h-10 select-none bg-gray-300 rounded-lg shadow hover:bg-gray-200 cursor-pointer'
            : 'flex justify-center items-center w-full h-10 select-none bg-gray-100 rounded-lg shadow hover:bg-gray-200 cursor-pointer',
          persianMode == true ? 'iran-font' : '',
        ]"
        @click="changeYear(year)"
      >
        {{ year }}
      </div>
    </div>
    <div
      v-if="selectMonth && !selectYear"
      :dir="persianMode ? 'rtl' : 'ltr'"
      class="grid grid-cols-3 gap-4 w-[430px] h-[400px] max-w-[430px] mt-3 border rounded-md p-5 text-center"
    >
      <div
        v-for="(month, index) in persianMode ? persianMonths : gregorianMonths"
        :key="month"
        :class="[
          persianMode ? 'iran-font' : '',
          persianMode == true && index + 1 == persianMonth
            ? 'flex justify-center items-center w-30 h-16 select-none bg-gray-300 rounded-lg shadow hover:bg-gray-400 cursor-pointer'
            : 'flex justify-center items-center w-30 h-16 select-none bg-gray-100 rounded-lg shadow hover:bg-gray-200 cursor-pointer',
          persianMode == false && index + 1 == gMonth
            ? 'flex justify-center items-center w-30 h-16 select-none bg-gray-300 rounded-lg shadow hover:bg-gray-400 cursor-pointer'
            : 'flex justify-center items-center w-30 h-16 select-none bg-gray-100 rounded-lg shadow hover:bg-gray-200 cursor-pointer',
        ]"
        @click="changeMonth(index)"
      >
        {{ month }}
      </div>
    </div>
    <div
      v-if="!selectMonth && !selectYear"
      :dir="persianMode ? 'rtl' : 'ltr'"
      class="grid grid-cols-7 w-[430px] h-[400px] gap-4 max-w-[430px] mt-3 border rounded-md evaluation-4 p-2"
    >
      <div
        class="font-bold text-center flex justify-center items-center w-10 h-10 select-none"
        :class="persianMode ? 'iran-font' : ''"
        v-for="day in persianMode ? persianDays : days"
        :key="day"
      >
        {{ day }}
      </div>
      <div
        class="w-10 h-10 bg-transparent text-center flex justify-center items-center"
        v-for="n in persianMode
          ? firtsPersianDay(persianYear, persianMonth, 1)
          : firstGregorianDay(gYear, gMonth)"
        :key="'empty-' + n"
      ></div>

      <div
        v-for="day in persianMode
          ? daysPersianInMonth()
          : daysGregorianInMonth()"
        :key="'day-' + day"
      >
        <label
          @click="changeModelValue(day)"
          :class="[
            persianMode == true
              ? day == dateCurrent?.day &&
                persianMonth == dateCurrent?.month &&
                persianYear == dateCurrent.year
                ? 'w-10 h-10 text-center flex justify-center items-center rounded-full select-none cursor-pointer bg-gray-200'
                : 'w-10 h-10 bg-transparent text-center flex justify-center items-center rounded-full select-none cursor-pointer hover:bg-gray-100'
              : day == dateCurrent?.day &&
                gMonth == dateCurrent.month &&
                gYear == dateCurrent.year
              ? 'w-10 h-10 text-center flex justify-center items-center rounded-full select-none cursor-pointer bg-gray-200'
              : 'w-10 h-10 bg-transparent text-center flex justify-center items-center rounded-full select-none cursor-pointer hover:bg-gray-100',
              persianMode == true
              ? day == pNowDate?.day &&
                persianMonth == pNowDate?.month &&
                persianYear == pNowDate.year &&
                day != dateCurrent?.day
                ? 'border border-black'
                : ''
              : day == gNowDate?.day &&
                gMonth == gNowDate.month &&
                gYear == gNowDate.year &&
                day != dateCurrent?.day
              ? 'border border-black'
              : '',
          ]"
          :style="{ fontFamily: persianMode ? 'iransans' : '' }"
        >
          {{ day }}
        </label>
      </div>
    </div>
  </div>
</template>

  
  <script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import { componentEmits } from "./Emits";
import { coreProps } from "./Props";
import { coreSlots } from "./Slots";

const props = defineProps(coreProps);
const emit = defineEmits(componentEmits);
const slots = defineSlots<coreSlots>();
type dateInterface = {
  year: Number;
  month: Number;
  day: Number;
};
const dateCurrent = ref<dateInterface>();
const gNowDate = ref<dateInterface>({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1, 
  day: new Date().getDate(),
});
const pNowDate = ref<dateInterface>();
gregorian_to_jalali(gNowDate.value.year, gNowDate.value.month, gNowDate.value.day);
function gregorian_to_jalali(gy, gm, gd) {
  var g_d_m, jy, jm, jd, gy2, days;
  g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  gy2 = (gm > 2) ? (gy + 1) : gy;
  days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
  jy = -1595 + (33 * ~~(days / 12053));
  days %= 12053;
  jy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  if (days < 186) {
    jm = 1 + ~~(days / 31);
    jd = 1 + (days % 31);
  } else {
    jm = 7 + ~~((days - 186) / 30);
    jd = 1 + ((days - 186) % 30);
  }
  pNowDate.value = {year: jy, month: jm, day: jd}; 
};
const persianMonth = ref(pNowDate.value?.month);
const persianYear = ref(pNowDate.value?.year);
const gMonth = ref(gNowDate.value.month);
const gYear = ref(gNowDate.value.year);
const selectMonth = ref(false);
const selectYear = ref(false);
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
const persianYears = Array.from({ length: 100 }, (_, i) => 1340 + i);
const gregorainYears = Array.from({ length: 100 }, (_, i) => 1961 + i);
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
const gregorianMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const changeMonth = (month: number) => {
  if (props.persianMode) {
    persianMonth.value = month + 1;
  } else {
    gMonth.value = month + 1;
  }
  selectMonth.value = false;
};
const changeYear = (year: number) => {
  if (props.persianMode) {
    persianYear.value = year;
  } else {
    gYear.value = year;
  }
  selectYear.value = false;
};
const firtsPersianDay = (jy: number, jm: number, jd: number) => {
  var sal_a, gy, gm, gd, days;
  jy += 1595;
  days =
    -355668 +
    365 * jy +
    ~~(jy / 33) * 8 +
    ~~(((jy % 33) + 3) / 4) +
    jd +
    (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
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
  sal_a = [
    0,
    31,
    (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
  const firstDay = new Date(gy, gm - 1, gd);
  let fd = firstDay.getDay();
  if (fd < 6) {
    fd += 1;
  } else if (fd == 6) {
    fd = 0;
  }
  return fd;
};
const changeModelValue = (day: number) => {
  if (props.persianMode) {
    emit(
      "update:modelValue",
      persianYear.value.toString() +
        "-" +
        persianMonth.value.toString() +
        "-" +
        day
    );
    dateCurrent.value = {
      year: persianYear.value,
      month: persianMonth.value,
      day: day,
    };
  } else {
    emit("update:modelValue", gYear.value + "-" + gMonth.value + "-" + day);
    dateCurrent.value = { year: gYear.value, month: gMonth.value, day: day };
  }
};
const firstGregorianDay = (gy: number, gm: number) => {
  const firstDay = new Date(gy, gm - 1, 1);
  return firstDay.getDay();
};
const daysGregorianInMonth = () => {
  const totalDays = new Date(gYear.value, gMonth.value, 0).getDate();
  return Array.from({ length: totalDays }, (_, i) => i + 1);
};
const daysPersianInMonth = () => {
  if (persianMonth.value < 7) {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  } else if (persianMonth.value < 12) {
    return Array.from({ length: 30 }, (_, i) => i + 1);
  } else if (persianMonth.value == 12) {
    if (persianYear.value % 4 == 3) {
      return Array.from({ length: 30 }, (_, i) => i + 1);
    } else {
      return Array.from({ length: 29 }, (_, i) => i + 1);
    }
  }
};
const yearContainer = ref<HTMLElement | null>(null);

watch(selectYear, async (newValue) => {
  if (newValue) {
    await nextTick();

    const container = yearContainer.value as HTMLElement;
    const years = props.persianMode ? persianYears : gregorainYears;
    const selectedYear = props.persianMode ? persianYear.value : gYear.value;

    const selectedYearIndex = years.indexOf(selectedYear);
    if (selectedYearIndex === -1) return;

    container.scrollTop = (1600 * selectedYearIndex) / 100;
  }
});
</script>
<style scoped>
@font-face {
  font-family: iransans;
  src: url("../../assets/IRAN(FaNum).ttf");
}
.iran-font {
  font-family: iransans, sans-serif;
}
</style>
  