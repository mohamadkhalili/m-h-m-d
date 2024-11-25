<script setup lang="ts">
import { defineProps } from 'vue';
import { ChatBubbleProps } from './Props';

const props = defineProps(ChatBubbleProps);
</script>

<template>
  <div>
    <slot
      :Side="props.Side"
      :downChat="props.downChat"
      :TopChat="props.TopChat"
      :Avatar="props.Avatar"
    />
  </div>
</template>
