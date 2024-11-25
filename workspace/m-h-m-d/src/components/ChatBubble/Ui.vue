<script setup >
import Core from './Core.vue';

const props = defineProps({
  Side: { type: String, required: true },
  downChat: { type: String, required: true },
  TopChat: { type: String, required: false },
  Avatar: { type: String, required: false },
});
</script>

<template>
  <Core :Side="Side" :downChat="downChat" :TopChat="TopChat" :Avatar="Avatar">
    <template #default="{ Side, downChat, TopChat, Avatar }">
      <div :class="['flex w-full p-2', Side === 'left' ? 'justify-start' : 'justify-end']">
        <div class="relative max-w-[75%]">
          <div v-if="Avatar" class="absolute -left-10 top-2">
            <img
              :src="Avatar"
              alt="Avatar"
              class="w-10 h-10 rounded-full border border-gray-300 shadow"
            />
          </div>
          <div
            :class="[
              'rounded-3xl px-4 py-2 shadow-lg',
              Side === 'left' ? 'bg-gray-100 text-black' : 'bg-blue-500 text-white'
            ]"
          >
            <slot />
          </div>
          <div
            class="flex items-center mt-1 text-xs space-x-1"
            :class="Side === 'left' ? 'text-left' : 'text-right justify-end flex-row-reverse'"
          >
            <span>{{ TopChat }}</span>
            <span class="text-gray-500">{{ downChat }}</span>
          </div>
        </div>
      </div>
    </template>
  </Core>
</template>

<style scoped>
/* Adjust styles for iPhone-like appearance */
</style>
