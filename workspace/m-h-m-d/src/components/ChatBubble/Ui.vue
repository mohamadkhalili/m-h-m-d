<script setup>
import Core from './Core.vue';

const props = defineProps({
  Side: { type: String, required: true },
  rightSubChat: { type: String, required: true },
  leftSubChat: { type: String, required: false },
  Avatar: { type: String, required: false },
  Header: { type: String, required: false },
  HeaderSub: { type: String, required: false },
  color: { type: String, required: false },
  subColor: { type: String, required: false },
  typing: { type: Boolean ,required: false },
});

const isLongMessage = (message) => {
  return message.length > 100;  
};
</script>

<template>
    <Core :Side="Side" :rightSubChat="rightSubChat" :leftSubChat="leftSubChat" :Avatar="Avatar" :Header="Header" :HeaderSub="HeaderSub" 
    :color="color" :typing="typing" :subColor="subColor">
      <template #default="{ Side, rightSubChat, leftSubChat, Avatar, Header, HeaderSub, color, typing ,subColor}">
        <div :class="['flex w-full p-2', Side === 'left' ? 'justify-start ' : 'justify-end',
         Avatar && Side === 'left' ? 'pl-12 ' : '',
         Avatar && Side === 'right' ? 'pr-12 ' : '',
        ]">
         
          <div class="relative max-w-[75%]">
            <div v-if="Avatar" :class="['absolute ', Side === 'left' ? '-left-10 top-0  ' : '-right-10 top-0']">
              <img
                :src="Avatar"       
                class="w-10 h-10 rounded-full border  border-gray-300 shadow"
              />
            </div>
  
            <div
              class="flex items-center "
              :class="Side === 'left' ? 'text-left justify-start flex-row ml-4' : 'text-right justify-start flex-row-reverse mr-4 '"
            >
            <span :class="['text-lg', subColor]">{{ Header }}</span>
<span class="text-xs px-2" :class="subColor">{{ HeaderSub }}</span>


            </div>
            <div
              :class="[
                'px-4 py-2 shadow-md max-w-[75%]', color,
                isLongMessage($slots.default ? $slots.default()[0].children : '') 
                  ? (Side === 'left' 
                      ? 'rounded-3xl rounded-tl-none' 
                      : 'rounded-3xl rounded-tr-none')
                  : (Side === 'left' 
                      ? 'rounded-bl-full rounded-e-full' 
                      : 'rounded-br-full rounded-s-full')
              ]"
              style="word-wrap: break-word; word-break: break-word;"
            >
              <span v-if="typing">
                <div class="flex gap-1">
                  <span class="size-1.5 rounded-full bg-neutral-600 motion-safe:animate-[bounce_1s_ease-in-out_infinite] dark:bg-neutral-600"></span>
                  <span class="size-1.5 rounded-full bg-neutral-600 motion-safe:animate-[bounce_0.5s_ease-in-out_infinite] dark:bg-neutral-600"></span>
                  <span class="size-1.5 rounded-full bg-neutral-600 motion-safe:animate-[bounce_1s_ease-in-out_infinite] dark:bg-neutral-600"></span>
                </div>
              </span>
              <span v-else><slot /></span>
            </div>
  
            <div
              class="flex items-center mt-1 text-xs space-x-2"
              :class="Side === 'left' ? 'text-left justify-start flex-row-reverse  pr-4' : 'text-right justify-end flex-row-reverse  '"
            >
              <span v-if="!typing" :class="[subColor]">{{ rightSubChat }}</span>
              <span v-if="!typing" :class="['px-2',subColor]">{{ leftSubChat }}</span>
            </div>
          </div>
        </div>
      </template>
    </Core>
  </template>
  

<style scoped>
div {
  max-width: 100%;
}

img {
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}

.rounded-xl {
  border-radius: 20px;
}

.shadow-md {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.text-xs {
  font-size: 0.75rem;
}

.text-lg {
  font-size: 1rem;
}

.text-gray-500 {
  color: rgba(0, 0, 0, 0.5);
}
</style>
