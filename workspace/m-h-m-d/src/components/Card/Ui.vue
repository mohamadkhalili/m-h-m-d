<template>
  <Core
    :class="[
      'rounded-xl',
      'overflow-hidden',
      'shadow-md',
      'relative',
      props.variant === 'post' ? 'bg-white flex flex-col p-4 gap-4' : '',
      props.variant === 'weather' ? 'bg-white flex flex-col p-4 gap-6' : '',
      props.variant === 'post' && !props.horizontal ? 'w-[28rem]' : '',
      props.variant === 'weather' ? 'w-[28rem]' : '',
      props.horizontal ? 'grid grid-flow-col grid-rows-3 gap-4 h-52' : '',
    ]"
  >
    <!-- Post Variant -->
    <template v-if="props.variant === 'post'">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img :src="props.avatar" alt="User Avatar" class="w-14 h-14 rounded-full mr-2" />
          <div>
            <h3 v-if="!$slots.username" class="text-lg font-bold">{{ props.username }}</h3>
            <slot name="username" />
            <p v-if="!$slots.time" class="text-sm text-gray-500">{{ props.time }}</p>
            <slot name="time" />
          </div>
        </div>
        <slot />
      </div>
      <p v-if="props.description" class="mt-2 text-gray-700">{{ props.description }}</p>
      <slot name="description" />
      <div v-if="props.image" class="mt-2">
        <img :src="props.image" alt="Post Image" class="w-full h-auto rounded-lg" />
      </div>
      <div class="flex text-gray-500 text-xs mt-4">
        <div class="flex justify-center items-center border-t pt-2 w-full space-x-4">
          <span v-if="!$slots.info1 && props.info1">{{ props.info1 }}</span>
          <slot name="info1" />
          <span v-if="!$slots.info2 && props.info2">{{ props.info2 }}</span>
          <slot name="info2" />
          <span v-if="!$slots.info3 && props.info3">{{ props.info3 }}</span>
          <slot name="info3" />
          <span v-if="!$slots.info4 && props.info4">{{ props.info4 }}</span>
          <slot name="info4" />
        </div>
      </div>
    </template>

    <!-- Progress Variant -->
    <template v-else-if="props.variant === 'progress'">
      <div class="flex flex-col gap-4 p-4 w-96">
        <div class="flex justify-between items-center">
          <h3 v-if="!$slots.title" class="text-lg font-semibold">{{ props.title }}</h3>
          <slot name="title" />
          <span v-if="!$slots.info1 && props.info1" class="text-sm text-gray-500">{{ props.info1 }}</span>
          <slot name="info1" />
        </div>
        <div class="w-full bg-gray-200 rounded-full h-4">
          <div
            class="bg-blue-500 h-4 rounded-full"
            :style="{ width: `${props.info2}%` }"
          ></div>
        </div>
        <div class="flex justify-between items-center text-sm text-gray-500">
          <span v-if="!$slots.info3 && props.info3">{{ props.info3 }}</span>
          <slot name="info3" />
          <span v-if="!$slots.info4 && props.info4">{{ props.info4 }}</span>
          <slot name="info4" />
        </div>
        <p v-if="!$slots.description && props.description" class="text-sm text-gray-600 mt-2">
          {{ props.description }}
        </p>
        <slot name="description" />
      </div>
    </template>

    <!-- Weather Variant -->
    <template v-else-if="props.variant === 'weather'">
      <div class="flex items-center justify-between space-x-4">
        <div class="flex items-center space-x-4">
          <img :src="props.weatherImage" class="w-16 h-16" />
          <div>
            <h3 v-if="!$slots.title" class="text-xl font-semibold">{{ props.title }}</h3>
            <slot name="title" />
            <p v-if="!$slots.description" class="text-sm text-gray-500">{{ props.description }}</p>
            <slot name="description" />
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <p class="text-3xl font-bold">{{ props.info4 }}</p>
          <div class="flex space-x-4 text-xs text-gray-500 mt-2">
            <span v-if="!$slots.info1 && props.info1">{{ props.info1 }}</span>
            <slot name="info1" />
            <span v-if="!$slots.info2 && props.info2">{{ props.info2 }}</span>
            <slot name="info2" />
            <span v-if="!$slots.info3 && props.info3">{{ props.info3 }}</span>
            <slot name="info3" />
          </div>
        </div>
      </div>
    </template>

    <!-- Default Variant -->
    <template v-else>
      <div v-if="props.header || $slots.header" :class="[props.horizontal ? '' : 'p-4']">
        <div class="flex items-center justify-between">
          <span v-if="!$slots.header && props.header" class="text-sm text-gray-500 pr-2">{{ props.header }}</span>
          <slot name="header" />
        </div>
      </div>
      <div v-if="props.image" :class="['relative', props.horizontal ? 'mx-auto row-span-3' : 'w-full h-48']">
        <img :src="props.image" alt="Card Image" class="object-cover w-[90%] h-[90%] mt-[0.7rem] m-auto rounded-lg" />
      </div>
      <div :class="['p-4', props.horizontal ? 'col-span-2 row-span-1' : '']">
        <h3 v-if="!$slots.title && props.title" class="text-xl font-semibold">{{ props.title }}</h3>
        <slot name="title" />
        <p v-if=" !$slots.description" class="text-sm text-gray-500">{{ props.description }}</p>
        <slot v-if=" $slots.description" class=" text-gray-500" name="description" />
      </div>
      <div
        v-if="props.footer || $slots.footer || $slots.default"
        :class="[props.horizontal ? 'col-span-2 row-span-2 p-4 mt-10' : 'p-4  border-t']"
      >
        <div class="flex items-center justify-between">
          <span v-if="props.footer" class="text-sm text-gray-500 pr-2">{{ props.footer }}</span>
          <slot></slot>
          <slot name="footer" />
        </div>
      </div>
    </template>
  </Core>
</template>

<script setup lang="ts">
import { cardProps } from './Props';

const props = defineProps(cardProps);
</script>
