<script setup>
import { ChatBubbleClasses } from '../../styles/Chatbubble';
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
  Images: { type: Array, default: () => [] },  
});


const isLongMessage = (message) => {
  if (typeof message === 'string') {
    return message.length > 100;
  }
  return false; 
};
</script>

<template>
    <Core :Side="Side" :rightSubChat="rightSubChat" :leftSubChat="leftSubChat" :Avatar="Avatar" :Header="Header" :HeaderSub="HeaderSub" 
    :color="color" :typing="typing" :subColor="subColor" :Images="Images">
      <template #default="{ Side, rightSubChat, leftSubChat, Avatar, Header, HeaderSub, color, typing ,subColor, Images }">
        <div :class="[ChatBubbleClasses.uiChatClass, Side === 'left' ? ChatBubbleClasses.uiLeftSideClass : ChatBubbleClasses.uiRightSideClass,
         Avatar && Side === 'left' ? ChatBubbleClasses.UiChatPaddingLeftSideClass : '',
         Avatar && Side === 'right' ? ChatBubbleClasses.UiChatPaddingRightSideClass : '',
        ]">
         
          <div :class=ChatBubbleClasses.uiChatBubbleMainClass>
            <div v-if="Avatar" :class="[ Side === 'left' ? ChatBubbleClasses.uiAvatarLeftSideClass : ChatBubbleClasses.uiAvatarRightSideClass ]">
              <img
                :src="Avatar"       
                :class=ChatBubbleClasses.UiChatImageClass
              />
            </div>
  
            <div
              class="flex items-center "
              :class="Side === 'left' ? ChatBubbleClasses.uiChatHeaderLeftClasses: ChatBubbleClasses.uiChatHeaderRightClasses"
            >
              <span :class="[subColor]">{{ Header }}</span>
              <span  :class="[subColor,ChatBubbleClasses.uiChatSubHeaderSizeClasses]">{{ HeaderSub }}</span>
            </div>

          

            <div
              :class="[
                ChatBubbleClasses.uiChatMassageClass, color,
                isLongMessage($slots.default ? $slots.default()[0].children : '') 
                  ? (Side === 'left' 
                      ? 'rounded-3xl rounded-tl-none' 
                      : 'rounded-3xl rounded-tr-none')
                  : (Side === 'left' 
                      ? 'rounded-bl-full rounded-e-full' 
                      : 'rounded-br-full rounded-s-full'),
                      Images.length > 0   ? (Side === 'left' 
                      ? ' rounded-xl rounded-tl-none ' 
                      : 'rounded-xl rounded-tr-none')
                  : (Side === 'left' 
                      ? 'rounded-bl-full rounded-e-full' 
                      : 'rounded-br-full rounded-s-full'),
              ]"
              style="word-wrap: break-word; word-break: break-word;"
            >
            <div v-if="Images.length > 0" :class="['grid gap-2  mb-4 rounded-xl ' ,Images.length >1 ?'grid-cols-2' :'grid-cols']">
  <div v-for="(image, index) in Images.slice(0, 4)" :key="index" class="image-item relative group">
    <div :class="['relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300', Images.length === 1 ? 'w-[360px] h-fit' : 'w-[160px] h-[100px]']">
      
      <img :src="image" alt="chat image" class="transform scale-110 group-hover:scale-125 transition-transform duration-300 ease-in-out object-cover object-center" />
      <div v-if="index === 3 && Images.length > 4" class="absolute inset-0 bg-black opacity-70 flex items-center justify-center hover:opacity-60">
        <span class="text-white font-medium text-xl">+{{ Images.length - 4 }} more</span>
      </div>
    </div>
  </div>
</div>
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


.image-item img {
  
  border-radius: 5px;
  background-size: 50%;
  
}

.blurred {
  filter: blur(5px);
}


</style>


