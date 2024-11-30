<script setup lang="ts">
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
      :color="props.color"
      :subColor="props.subColor"
      :typing="props.typing"
      :Images="props.Images"
    />
    
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  gap: 5px;
}
.image-item img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  object-fit: cover;
}
.more-images {
  margin-top: 5px;
  font-size: 12px;
  color: #888;
}
</style>
