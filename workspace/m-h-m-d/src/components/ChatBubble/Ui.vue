<script setup>
import Core from './Core.vue';

const props = defineProps({
  Side: { type: String, required: true },
  rightSubChat: { type: String, required: true },
  leftSubChat: { type: String, required: false },
  Avatar: { type: String, required: false },
  Header: { type: String, required: false },
  HeaderSub: { type: String, required: false },
});

const isLongMessage = (message) => {
  return message.length > 100;  
};
</script>

<template>
  <Core :Side="Side" :rightSubChat="rightSubChat" :leftSubChat="leftSubChat" :Avatar="Avatar" :Header="Header" :HeaderSub="HeaderSub">
    <template #default="{ Side, rightSubChat, leftSubChat, Avatar, Header, HeaderSub }">
      <div :class="['flex w-full p-2', Side === 'left' ? 'justify-start ' : 'justify-end']">
        <div class="relative max-w-[75%]">
          <div v-if="Avatar" class="absolute -left-10 top-2">
            <img
              :src="Avatar"
              alt="Avatar"
              class="w-10 h-10 rounded-full border border-gray-300 shadow"
            />
          </div>

          <div
            class="flex items-center mb-1"
            :class="Side === 'left' ? 'text-left justify-start flex-row ml-4' : 'text-right justify-start flex-row-reverse mr-4 '"
          >
            <span class="text-lg">{{ Header }}</span>
            <span class="text-xs px-2">{{ HeaderSub }}</span>
          </div>

          <!-- Chat Bubble with dynamic border-radius based on message length -->
          <div
            :class="[
              'px-4 py-2 shadow-md max-w-[75%]',
              Side === 'left' ? 'bg-gray-400 text-black' : 'bg-blue-500 text-white',
              isLongMessage($slots.default ? $slots.default()[0].children : '') 
                ? 'rounded-md' 
                : (Side === 'left' 
                    ? 'rounded-bl-full rounded-e-full' 
                    : 'rounded-br-full rounded-s-full')
            ]"
            style="word-wrap: break-word; word-break: break-word;"
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
