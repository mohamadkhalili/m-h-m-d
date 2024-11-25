<script setup lang="ts">
import { defineProps } from 'vue';
import { ChatBubbleProps } from './Props';

const props = defineProps(ChatBubbleProps);
</script>

<template>
  <div>
    <slot
      :Side="props.Side"
      :rightSubChat="props.rightSubChat"
      :leftSubChat="props.leftSubChat"
      :Avatar="props.Avatar"
      :Header="props.Header"
      :HeaderSub="props.HeaderSub"

    />
  </div>
</template>
