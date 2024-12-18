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
                      ? ChatBubbleClasses.uiChatLowLengthLeftClasses
                      :ChatBubbleClasses.uiChatLowLengthRightClasses )
                  : (Side === 'left' 
                      ? ChatBubbleClasses.uiChatHighLengthLeftClasses 
                      : ChatBubbleClasses.uiChatHighLengthRightClasses),
                      Images.length > 0   ? (Side === 'left' 
                      ? ChatBubbleClasses.uiChatWithImageLeftClasses
                      : ChatBubbleClasses.uiChatWithImageRightClasses)
                  : (Side === 'left' 
                      ?  ChatBubbleClasses.uiChatWithNoImageLeftClasses
                      :ChatBubbleClasses.uiChatWithNoImageRightClasses ),
              ]"
              style="word-wrap: break-word; word-break: break-word;"
            >
            <div v-if="Images.length > 0" :class="[ChatBubbleClasses.uiChatImageGridClass ,Images.length >1 ?ChatBubbleClasses.uiChatImageGridImageUpClass :ChatBubbleClasses.uiChatImageGridImageDownClass]">
  <div v-for="(image, index) in Images.slice(0, 4)" :key="index" :class=ChatBubbleClasses.uiChatImageItemClass>
    <div :class="[ChatBubbleClasses.UiChatImageHoverClasses, Images.length === 1 ?  ChatBubbleClasses.uiChatImageWidthClass :ChatBubbleClasses.uiChatImageWidth2Class ]">
      
      <img :src="image" alt="chat image" :class=ChatBubbleClasses.uiChatImageGroupStyleClass />
      <div v-if="index === 3 && Images.length > 4" :class=ChatBubbleClasses.uiChatImageMoreLabelClass >
        <span :class=ChatBubbleClasses.uiChatMoreLabelClass>+{{ Images.length - 4 }} more</span>
      </div>
    </div>
  </div>
</div>
              <span v-if="typing">
                <div :class=ChatBubbleClasses.uiChatTypingAnimeParentClass>
                  <span :class=ChatBubbleClasses.uiChatTypingAnimeClass></span>
                  <span :class=ChatBubbleClasses.uiChatTypingAnime2Class></span>
                  <span :class=ChatBubbleClasses.uiChatTypingAnimeClass></span>
                </div>
              </span>
              <span v-else><slot /></span>
            </div>
  
            <div
              :class="[ChatBubbleClasses.uiChatSubParentClass,
              Side === 'left' ? ChatBubbleClasses.uiChatSubLeftClass : ChatBubbleClasses.uiChatSubRightClass ]"
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


