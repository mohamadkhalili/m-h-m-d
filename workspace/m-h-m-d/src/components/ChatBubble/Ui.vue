<script setup >
import Core from './Core.vue';

const props = defineProps({
  Side: { type: String, required: true },
  rightSubChat: { type: String, required: true },
  leftSubChat: { type: String, required: false },
  Avatar: { type: String, required: false },
  Header: { type: String, required: false },
  HeaderSub: { type: String, required: false },


});
</script>

<template>
  <Core :Side="Side" :rightSubChat="rightSubChat" :leftSubChat="leftSubChat" :Avatar="Avatar" :Header="Header" :HeaderSub="HeaderSub">
    <template #default="{ Side, rightSubChat, leftSubChat, Avatar ,  Header,HeaderSub }">
      <div :class="['flex w-full p-2', Side === 'left' ? 'justify-start ' : 'justify-end']">
        <div class="relative max-w-[75%]">
          <div v-if="Avatar" class="absolute -left-10 top-2">
            <img
              :src="Avatar"
              alt="Avatar"
              class="w-10 h-10 rounded-full  border border-gray-300 shadow"
            />
          </div>
          
          <div
            class="flex items-center mb-1  "
            :class="Side === 'left' ? 'text-left justify-start flex-row ml-4' : 'text-right justify-start flex-row-reverse mr-4 '"
          >
          <span class="" >{{ Header }}</span>
          <span class="text-xs px-2">{{ HeaderSub }}</span>
        </div>


          <div
            :class="[
              'rounded-3xl px-4 py-2 shadow-md ',
              Side === 'left' ? 'bg-gray-100 text-black  rounded-ss-full rounded-e-full' : 'bg-blue-500 text-white  rounded-se-full rounded-s-full leading-2'
            ]"
          >

            <slot />
          </div>
          <div
            class="flex items-center mt-1 text-xs space-x-1"
            :class="Side === 'left' ? 'text-left justify-end flex-row-reverse opacity-80' : 'text-right justify-end flex-row-reverse opacity-80 '"
          >
          <span class="">{{ rightSubChat }}</span>
          <span class="px-2">{{ leftSubChat }}</span>
          </div>
        </div>
      </div>
    </template>
  </Core>
</template>

<style scoped>
/* Adjust styles for iPhone-like appearance */
</style>
